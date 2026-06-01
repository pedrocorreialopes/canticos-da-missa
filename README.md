# ✞ Cânticos da Missa — Folha Litúrgica

Aplicação web estática para visualização e busca de cânticos litúrgicos da Missa Católica, com design elegante inspirado em manuscritos iluminados medievais.

---

## 🎵 Funcionalidades Implementadas

### Núcleo
- **22 cânticos** organizados por momento litúrgico (Entrada, Glória, Salmo, Ofertório, Santo, Comunhão, Final)
- **Grid agrupado por seção** com divisores visuais quando exibindo "Todos"
- **Filtro por seção** via abas na barra de controles
- **Busca em tempo real** por título e letra dos cânticos
- **Estatísticas no header**: pílulas por seção + total

### Modal de Letra Completa
- Letras com versos e refrões diferenciados visualmente
- **Navegação ← →** entre cânticos sem fechar o modal
- Contador de posição (ex: "3 / 22")
- **Botão favoritar** diretamente no modal
- **Botão modo celebração** (abre tela cheia)
- **Botão imprimir** cântico individual (abre janela de impressão formatada)

### ♥ Favoritos
- Botão de coração em cada card e no modal
- **Persistência em localStorage**
- Aba "Favoritos" no filtro + badge de contagem no header
- Toast de confirmação ao favoritar/desfavoritar

### 🌙 Modo Escuro
- Toggle lua/sol no header
- Tokens CSS separados para tema dark
- **Persistência em localStorage**

### 🎭 Modo Celebração (Tela Cheia)
- Ativado pelo botão ⛶ no modal
- Overlay escuro imersivo com texto ampliado
- Suporte a **Fullscreen API** do navegador
- Navegação com botões ← → e **atalhos de teclado**
- Controles aparecem ao hover; footer com dicas de teclado

### ⌨️ Atalhos de Teclado
| Tecla | Ação |
|-------|------|
| `/` | Focar na busca |
| `←` | Modal/Celebração: cântico anterior |
| `→` | Modal/Celebração: próximo cântico |
| `Esc` | Fechar modal ou sair da celebração |

### 🖨️ Impressão
- Layout de impressão global via `@media print`
- Impressão individual de cântico com formatação dedicada

---

## 📂 Estrutura do Projeto

```
index.html          — Página principal
css/
  style.css         — Estilos completos (light + dark + celebração)
js/
  canticos.js       — Banco de dados dos cânticos (22 canticos)
  app.js            — Toda a lógica da aplicação
README.md
```

---

## 📖 Seções e Cânticos

| Seção       | Qtd | Cânticos incluídos |
|-------------|-----|---------------------|
| Entrada     | 4   | Glória – Ó Trindade · Nós Viemos, Senhor · Vinde, Povo de Deus · Que Alegria |
| Glória      | 2   | Glória a Deus nas Alturas · Glória – Aleluia ao Senhor |
| Salmo       | 4   | O Senhor É Meu Pastor · Louvai do Alto dos Céus · A Terra Está Cheia · Dai Graças |
| Ofertório   | 3   | Oferenda · Toma, Senhor, e Recebe · Eis Aqui, Senhor |
| Santo       | 3   | Santo, Santo, Santo · Santo – Aclamação · Cordeiro de Deus |
| Comunhão    | 6   | Pão da Vida · Eu Sou a Videira · Fica Conosco · Vinde a Mim · Senhor Não Sou Digno · Aqui Estou |
| Final       | 5   | Ide por Todo o Mundo · Louvai o Senhor · A Missão · Maria Mãe da Igreja · Salve Rainha |

---

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico (roles, aria-labels, aria-selected)
- CSS3 puro: variáveis, grid, keyframes, `@media print`, `backdrop-filter`
- JavaScript vanilla ES6+ (IIFE, localStorage, Fullscreen API)
- **Google Fonts**: Cinzel · EB Garamond · Lato
- **Font Awesome 6** (ícones)
- Sem dependências externas de JS

---

## 🚀 Próximos Passos Sugeridos

- [ ] Adicionar mais cânticos ao banco de dados (`js/canticos.js`)
- [ ] Campo para adicionar/editar cânticos customizados (via TableAPI)
- [ ] Aumentar fonte no modo celebração via slider
- [ ] Exportar seleção de cânticos como PDF
- [ ] Compartilhar cântico individual por link/QR Code
- [ ] Slideshow automático no modo celebração

---

## 📌 URI de Entrada

- `/index.html` — Página principal
