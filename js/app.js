// ============================================================
//  APLICAÇÃO — CÂNTICOS DA MISSA
//  Funcionalidades: filtro, busca, modal, favoritos,
//  modo escuro, modo celebração (fullscreen), impressão
// ============================================================

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════
     ESTADO
  ══════════════════════════════════════════════════════════ */
  let currentSection  = 'all';
  let searchQuery     = '';
  let filteredList    = [];   // lista atualizada a cada render
  let modalIndex      = -1;   // índice em filteredList do modal aberto
  let celIndex        = -1;   // índice em filteredList do modo celebração
  let favorites       = loadFavorites();
  let darkMode        = loadDarkMode();

  /* ══════════════════════════════════════════════════════════
     ELEMENTOS DOM
  ══════════════════════════════════════════════════════════ */
  const grid             = document.getElementById('canticos-grid');
  const searchInput      = document.getElementById('search-input');
  const clearBtn         = document.getElementById('clear-search');
  const noResults        = document.getElementById('no-results');
  const noResultsMsg     = document.getElementById('no-results-msg');
  const filterTabs       = document.getElementById('filter-tabs');
  const headerStats      = document.getElementById('header-stats');
  const favCountBadge    = document.getElementById('fav-count-badge');

  // Modal
  const modalOverlay     = document.getElementById('modal-overlay');
  const modalContent     = document.getElementById('modal-content');
  const modalClose       = document.getElementById('modal-close');
  const modalPrev        = document.getElementById('modal-prev');
  const modalNext        = document.getElementById('modal-next');
  const modalCounter     = document.getElementById('modal-counter');
  const modalFavBtn      = document.getElementById('modal-fav');
  const modalFullscreen  = document.getElementById('modal-fullscreen');
  const modalPrint       = document.getElementById('modal-print');

  // Celebração
  const celOverlay       = document.getElementById('celebration-overlay');
  const celTitle         = document.getElementById('cel-title');
  const celBadge         = document.getElementById('cel-badge');
  const celLetra         = document.getElementById('cel-letra');
  const celCounter       = document.getElementById('cel-counter');
  const celPrev          = document.getElementById('cel-prev');
  const celNext          = document.getElementById('cel-next');
  const celExit          = document.getElementById('cel-exit');

  // Toast & dark mode
  const toast            = document.getElementById('toast');
  const btnDarkMode      = document.getElementById('btn-dark-mode');
  const btnFavoritosView = document.getElementById('btn-favoritos-view');

  /* ══════════════════════════════════════════════════════════
     CONSTANTES VISUAIS
  ══════════════════════════════════════════════════════════ */
  const SECTION_ICONS = {
    entrada:   'fas fa-church',
    gloria:    'fas fa-star',
    salmo:     'fas fa-book-open',
    ofertorio: 'fas fa-hand-holding-heart',
    santo:     'fas fa-dove',
    comunhao:  'fas fa-bread-slice',
    final:     'fas fa-cross',
  };

  const SECTION_COLORS = {
    entrada:   '#7b5ea7',
    gloria:    '#c9922a',
    salmo:     '#2a7c8a',
    ofertorio: '#5a7c2a',
    santo:     '#a72a2a',
    comunhao:  '#2a5ca7',
    final:     '#7a5c2a',
  };

  const SECTION_ORDER = ['entrada','gloria','salmo','ofertorio','santo','comunhao','final'];

  /* ══════════════════════════════════════════════════════════
     DARK MODE
  ══════════════════════════════════════════════════════════ */
  function loadDarkMode () {
    return localStorage.getItem('canticos_dark') === 'true';
  }
  function applyDarkMode () {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    btnDarkMode.innerHTML = darkMode
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    btnDarkMode.title = darkMode ? 'Modo claro' : 'Modo escuro';
  }
  btnDarkMode.addEventListener('click', () => {
    darkMode = !darkMode;
    localStorage.setItem('canticos_dark', darkMode);
    applyDarkMode();
  });
  applyDarkMode();

  /* ══════════════════════════════════════════════════════════
     FAVORITOS
  ══════════════════════════════════════════════════════════ */
  function loadFavorites () {
    try { return JSON.parse(localStorage.getItem('canticos_favs') || '[]'); }
    catch { return []; }
  }
  function saveFavorites () {
    localStorage.setItem('canticos_favs', JSON.stringify(favorites));
  }
  function isFav (id) { return favorites.includes(id); }
  function toggleFav (id) {
    if (isFav(id)) {
      favorites = favorites.filter(f => f !== id);
      showToast('Removido dos favoritos');
    } else {
      favorites.push(id);
      showToast('Adicionado aos favoritos ♥');
    }
    saveFavorites();
    updateFavBadge();
    // Atualiza ícone do botão no modal se estiver aberto
    updateModalFavBtn();
    // Re-render se estiver na aba favoritos
    if (currentSection === 'favoritos') renderGrid();
    // Atualiza coração nos cards
    document.querySelectorAll(`[data-id="${id}"] .btn-fav`).forEach(btn => {
      updateFavBtnStyle(btn, isFav(id));
    });
  }
  function updateFavBadge () {
    const count = favorites.length;
    if (count > 0) {
      favCountBadge.textContent = count;
      favCountBadge.classList.remove('hidden');
    } else {
      favCountBadge.classList.add('hidden');
    }
  }
  function updateFavBtnStyle (btn, active) {
    btn.innerHTML = active
      ? '<i class="fas fa-heart"></i>'
      : '<i class="far fa-heart"></i>';
    btn.classList.toggle('fav-active', active);
    btn.title = active ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
  }
  function updateModalFavBtn () {
    if (modalIndex < 0) return;
    const c = filteredList[modalIndex];
    if (!c) return;
    const active = isFav(c.id);
    modalFavBtn.innerHTML = active ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    modalFavBtn.classList.toggle('fav-active', active);
    modalFavBtn.title = active ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
  }

  btnFavoritosView.addEventListener('click', () => {
    setSection('favoritos');
  });

  /* ══════════════════════════════════════════════════════════
     FILTRO & RENDER
  ══════════════════════════════════════════════════════════ */
  function getFiltered () {
    return CANTICOS.filter(c => {
      if (currentSection === 'favoritos') {
        if (!isFav(c.id)) return false;
      } else if (currentSection !== 'all') {
        if (c.secao !== currentSection) return false;
      }
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return c.titulo.toLowerCase().includes(q) ||
             c.letra.some(l => l.texto.toLowerCase().includes(q));
    });
  }

  function renderGrid () {
    filteredList = getFiltered();
    grid.innerHTML = '';

    if (filteredList.length === 0) {
      noResults.classList.remove('hidden');
      noResultsMsg.textContent = currentSection === 'favoritos'
        ? 'Nenhum cântico favoritado ainda.'
        : 'Nenhum cântico encontrado.';
      return;
    }
    noResults.classList.add('hidden');

    // Se "all" e sem busca → agrupar por seção com divisores
    if (currentSection === 'all' && !searchQuery) {
      renderGrouped();
    } else {
      filteredList.forEach((c, i) => {
        grid.appendChild(buildCard(c, i));
      });
    }

    updateHeaderStats();
  }

  function renderGrouped () {
    const bySection = {};
    filteredList.forEach(c => {
      if (!bySection[c.secao]) bySection[c.secao] = [];
      bySection[c.secao].push(c);
    });

    let cardIndex = 0;
    SECTION_ORDER.forEach(sec => {
      if (!bySection[sec]) return;
      // Divisor de seção
      const divider = document.createElement('div');
      divider.className = 'section-divider';
      divider.innerHTML = `
        <div class="section-divider-line"></div>
        <span class="section-divider-label">
          <i class="${SECTION_ICONS[sec] || 'fas fa-music'}"></i>
          ${bySection[sec][0].secaoLabel}
        </span>
        <div class="section-divider-line"></div>`;
      grid.appendChild(divider);

      bySection[sec].forEach(c => {
        grid.appendChild(buildCard(c, cardIndex++));
      });
    });
  }

  function buildCard (c, idx) {
    const card = document.createElement('article');
    card.className = 'cantico-card';
    card.setAttribute('role', 'listitem');
    card.dataset.id = c.id;
    card.style.animationDelay = `${Math.min(idx, 12) * 0.045}s`;

    const icon  = SECTION_ICONS[c.secao] || 'fas fa-music';
    const color = SECTION_COLORS[c.secao] || '#555';
    const favActive = isFav(c.id);

    const preview = c.letra.slice(0, 2).map(l => {
      const linhas = l.texto.split('\n');
      const previewText = linhas.slice(0, 3).join('\n') + (linhas.length > 3 ? '…' : '');
      return `<p class="card-preview-text ${l.tipo}">${escapeHtml(previewText)}</p>`;
    }).join('');

    card.innerHTML = `
      <div class="card-header">
        <div class="card-header-top">
          <span class="card-badge" style="background:${color}">
            <i class="${icon}"></i> ${escapeHtml(c.secaoLabel)}
          </span>
          <button class="btn-fav${favActive ? ' fav-active' : ''}"
                  aria-label="${favActive ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
                  title="${favActive ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
            <i class="${favActive ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>
        <h2 class="card-title">${escapeHtml(c.titulo)}</h2>
        <div class="card-accent-bar" style="background:${color}"></div>
      </div>
      <div class="card-body">${preview}</div>
      <div class="card-footer">
        <button class="btn-ver" aria-label="Ver letra completa de ${escapeHtml(c.titulo)}">
          <i class="fas fa-music"></i> Ver letra completa
        </button>
      </div>`;

    // Eventos
    card.querySelector('.btn-fav').addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(c.id);
    });
    card.querySelector('.btn-ver').addEventListener('click', () => {
      modalIndex = filteredList.indexOf(c);
      openModal();
    });
    // Clique no card abre o modal
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-fav') || e.target.closest('.btn-ver')) return;
      modalIndex = filteredList.indexOf(c);
      openModal();
    });

    return card;
  }

  /* ══════════════════════════════════════════════════════════
     HEADER STATS
  ══════════════════════════════════════════════════════════ */
  function updateHeaderStats () {
    const total = CANTICOS.length;
    const bySection = {};
    SECTION_ORDER.forEach(s => { bySection[s] = 0; });
    CANTICOS.forEach(c => { if (bySection[c.secao] !== undefined) bySection[c.secao]++; });

    headerStats.innerHTML = SECTION_ORDER.map(s => `
      <div class="stat-pill" title="${CANTICOS.find(c=>c.secao===s)?.secaoLabel || s}">
        <i class="${SECTION_ICONS[s]}"></i>
        <span>${bySection[s]}</span>
      </div>`).join('') +
      `<div class="stat-pill stat-total" title="Total de cânticos">
        <i class="fas fa-music"></i>
        <span>${total}</span>
      </div>`;
  }

  /* ══════════════════════════════════════════════════════════
     MODAL
  ══════════════════════════════════════════════════════════ */
  function openModal () {
    renderModalContent();
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalOverlay.classList.add('active'), 10);
  }

  function closeModal () {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => modalOverlay.classList.add('hidden'), 300);
  }

  function renderModalContent () {
    const c = filteredList[modalIndex];
    if (!c) return;

    const color = SECTION_COLORS[c.secao] || '#555';
    const icon  = SECTION_ICONS[c.secao] || 'fas fa-music';

    // Navegação
    modalPrev.disabled = modalIndex <= 0;
    modalNext.disabled = modalIndex >= filteredList.length - 1;
    modalCounter.textContent = `${modalIndex + 1} / ${filteredList.length}`;

    // Favorito
    updateModalFavBtn();

    // Conteúdo
    const blocosHtml = c.letra.map(bloco => {
      const cls   = bloco.tipo === 'refrão' ? 'bloco-refrao' :
                    bloco.tipo === 'verso'  ? 'bloco-verso'  : 'bloco-texto';
      const label = bloco.tipo === 'refrão' ? '<span class="bloco-label">Refrão</span>' :
                    bloco.tipo === 'verso'  ? '<span class="bloco-label">Verso</span>'  : '';
      const lines = bloco.texto.split('\n')
                    .map(l => `<span>${escapeHtml(l)}</span>`).join('<br>');
      return `<div class="${cls}">${label}<p class="bloco-texto-p">${lines}</p></div>`;
    }).join('');

    modalContent.innerHTML = `
      <div class="modal-header" style="--accent:${color}">
        <span class="modal-badge" style="background:${color}">
          <i class="${icon}"></i> ${escapeHtml(c.secaoLabel)}
        </span>
        <h2 class="modal-title" id="modal-title-text">${escapeHtml(c.titulo)}</h2>
        <div class="modal-divider" style="background:${color}"></div>
      </div>
      <div class="modal-letra">${blocosHtml}</div>`;
  }

  // Eventos modal
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

  modalPrev.addEventListener('click', () => {
    if (modalIndex > 0) { modalIndex--; renderModalContent(); }
  });
  modalNext.addEventListener('click', () => {
    if (modalIndex < filteredList.length - 1) { modalIndex++; renderModalContent(); }
  });

  modalFavBtn.addEventListener('click', () => {
    const c = filteredList[modalIndex];
    if (c) toggleFav(c.id);
  });

  modalFullscreen.addEventListener('click', () => {
    celIndex = modalIndex;
    closeModal();
    openCelebration();
  });

  modalPrint.addEventListener('click', () => {
    const c = filteredList[modalIndex];
    if (!c) return;
    printCantico(c);
  });

  /* ══════════════════════════════════════════════════════════
     MODO CELEBRAÇÃO (FULLSCREEN)
  ══════════════════════════════════════════════════════════ */
  function openCelebration () {
    renderCelebration();
    celOverlay.classList.remove('hidden');
    setTimeout(() => celOverlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
    // Tentar fullscreen nativo
    if (celOverlay.requestFullscreen) celOverlay.requestFullscreen().catch(() => {});
  }

  function closeCelebration () {
    celOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setTimeout(() => celOverlay.classList.add('hidden'), 300);
  }

  function renderCelebration () {
    const c = filteredList[celIndex];
    if (!c) return;

    const color = SECTION_COLORS[c.secao] || '#555';
    const icon  = SECTION_ICONS[c.secao] || 'fas fa-music';

    celBadge.style.background = color;
    celBadge.innerHTML = `<i class="${icon}"></i> ${escapeHtml(c.secaoLabel)}`;
    celTitle.textContent = c.titulo;
    celCounter.textContent = `${celIndex + 1} / ${filteredList.length}`;

    celPrev.disabled = celIndex <= 0;
    celNext.disabled = celIndex >= filteredList.length - 1;

    celLetra.innerHTML = c.letra.map(bloco => {
      const cls   = bloco.tipo === 'refrão' ? 'cel-bloco-refrao' :
                    bloco.tipo === 'verso'  ? 'cel-bloco-verso'  : 'cel-bloco-texto';
      const label = bloco.tipo === 'refrão' ? '<span class="cel-bloco-label">Refrão</span>' :
                    bloco.tipo === 'verso'  ? '<span class="cel-bloco-label">Verso</span>'  : '';
      const lines = bloco.texto.split('\n')
                    .map(l => `<span>${escapeHtml(l)}</span>`).join('<br>');
      return `<div class="${cls}">${label}<p>${lines}</p></div>`;
    }).join('');

    // Animação de entrada
    celLetra.style.animation = 'none';
    celLetra.offsetHeight; // reflow
    celLetra.style.animation = '';
  }

  celPrev.addEventListener('click', () => {
    if (celIndex > 0) { celIndex--; renderCelebration(); }
  });
  celNext.addEventListener('click', () => {
    if (celIndex < filteredList.length - 1) { celIndex++; renderCelebration(); }
  });
  celExit.addEventListener('click', closeCelebration);

  /* ══════════════════════════════════════════════════════════
     IMPRESSÃO
  ══════════════════════════════════════════════════════════ */
  function printCantico (c) {
    const color = SECTION_COLORS[c.secao] || '#555';
    const icon  = SECTION_ICONS[c.secao] || 'fas fa-music';

    const blocos = c.letra.map(bloco => {
      const label = bloco.tipo === 'refrão' ? '<p style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8a6018;margin-bottom:2px;">REFRÃO</p>' :
                    bloco.tipo === 'verso'  ? '<p style="font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#888;margin-bottom:2px;">VERSO</p>'  : '';
      const borderColor = bloco.tipo === 'refrão' ? '#c9922a' : '#d4c5a9';
      const bg          = bloco.tipo === 'refrão' ? 'rgba(201,146,42,.07)' : 'rgba(0,0,0,.02)';
      const italic      = bloco.tipo === 'refrão' ? 'font-style:italic;' : '';
      const lines = escapeHtml(bloco.texto).replace(/\n/g, '<br>');
      return `<div style="padding:10px 14px;border-left:3px solid ${borderColor};background:${bg};border-radius:6px;margin-bottom:10px;">
        ${label}
        <p style="font-family:Georgia,serif;font-size:1.05rem;line-height:1.85;${italic}">${lines}</p>
      </div>`;
    }).join('');

    const win = window.open('', '_blank');
    win.document.write(`<!DOCTYPE html><html lang="pt-BR"><head>
      <meta charset="UTF-8"><title>${escapeHtml(c.titulo)} — Cânticos da Missa</title>
      <style>
        body{font-family:Georgia,serif;max-width:600px;margin:40px auto;color:#1e1612;background:#fff;padding:20px}
        h1{font-family:'Georgia',serif;font-size:1.6rem;margin-bottom:4px}
        .badge{display:inline-block;background:${color};color:#fff;border-radius:50px;padding:3px 12px;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px}
        .divider{height:2px;background:${color};width:60px;margin:10px 0 20px;opacity:.6;border-radius:2px}
        .footer{margin-top:30px;padding-top:10px;border-top:1px solid #d4c5a9;font-size:.75rem;color:#888;text-align:center}
        @media print{body{margin:20px}}
      </style>
    </head><body>
      <span class="badge">${escapeHtml(c.secaoLabel)}</span>
      <h1>${escapeHtml(c.titulo)}</h1>
      <div class="divider"></div>
      ${blocos}
      <div class="footer">Cânticos da Missa — Folha Litúrgica</div>
      <script>window.onload=()=>{window.print();}<\/script>
    </body></html>`);
    win.document.close();
  }

  /* ══════════════════════════════════════════════════════════
     CONTROLES DE FILTRO / BUSCA
  ══════════════════════════════════════════════════════════ */
  function setSection (sec) {
    currentSection = sec;
    document.querySelectorAll('.tab-btn').forEach(b => {
      const active = b.dataset.section === sec;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', active);
    });
    renderGrid();
  }

  filterTabs.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    setSection(btn.dataset.section);
  });

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    clearBtn.style.opacity       = searchQuery ? '1' : '0';
    clearBtn.style.pointerEvents = searchQuery ? 'auto' : 'none';
    renderGrid();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value            = '';
    searchQuery                  = '';
    clearBtn.style.opacity       = '0';
    clearBtn.style.pointerEvents = 'none';
    renderGrid();
    searchInput.focus();
  });

  /* ══════════════════════════════════════════════════════════
     TECLADO GLOBAL
  ══════════════════════════════════════════════════════════ */
  document.addEventListener('keydown', e => {
    // Modo celebração
    if (!celOverlay.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft'  && !celPrev.disabled) { celIndex--; renderCelebration(); }
      if (e.key === 'ArrowRight' && !celNext.disabled) { celIndex++; renderCelebration(); }
      if (e.key === 'Escape') closeCelebration();
      return;
    }
    // Modal
    if (!modalOverlay.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft'  && !modalPrev.disabled) { modalIndex--; renderModalContent(); }
      if (e.key === 'ArrowRight' && !modalNext.disabled) { modalIndex++; renderModalContent(); }
      if (e.key === 'Escape') closeModal();
    }
    // Atalho busca
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  /* ══════════════════════════════════════════════════════════
     TOAST
  ══════════════════════════════════════════════════════════ */
  let toastTimer;
  function showToast (msg, duration = 2400) {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);
  }

  /* ══════════════════════════════════════════════════════════
     UTILITÁRIO
  ══════════════════════════════════════════════════════════ */
  function escapeHtml (str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ══════════════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════════════ */
  clearBtn.style.opacity       = '0';
  clearBtn.style.pointerEvents = 'none';
  updateFavBadge();
  renderGrid();

})();
