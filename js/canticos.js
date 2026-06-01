// ============================================================
//  BANCO DE DADOS DE CÂNTICOS DA MISSA
// ============================================================

const CANTICOS = [

  // ─── ENTRADA ────────────────────────────────────────────
  {
    id: "entrada-01",
    titulo: "Glória — Ó Trindade",
    secao: "entrada",
    secaoLabel: "Entrada",
    letra: [
      {
        tipo: "verso",
        texto: "Ó Trindade, num trono supremo que brilhais,\nnum intenso fulgor.\nGlória a vós, que o profundo dos seres\npossuís e habitais pelo amor."
      },
      {
        tipo: "refrão",
        texto: "Bendito seja Deus Pai,\nBendito o Filho Unigênito,\nBendito o Espírito Santo.\nMisericordioso foi Deus\nPara conosco, para conosco."
      },
      
      {
        tipo: "verso",
        texto: "Ó Deus Pai, Criador do Universo,\nsois a força que a todos dá vida;\naos que dela fizestes consortes,\ndai a fé, que sustenta na lida."
      },
      {
        tipo: "verso",
        texto: "Esplendor e espelho da luz sois,\nó Filho, que irmãos nos chamais;\ndai-nos ser ramos verdes e vivos\nda fecunda videira do Pai."
      },
      {
        tipo: "verso",
        texto: "Piedade e amor, fogo ardente,\nbranda luz, poderoso clarão,\nrenovai nossa mente, ó Espírito,\ne aquecei o fiel coração."
      },
      {
        tipo: "verso",
        texto: "Doce hóspede, ó feliz Trindade,\natendei nossa humilde oração;\nvinde, vinde morar na nossa alma,\nvinde dar-nos o vosso perdão."
      }
    ]
  },

  {
    id: "entrada-02",
    titulo: "Nós Viemos, Senhor",
    secao: "entrada",
    secaoLabel: "Entrada",
    letra: [
      {
        tipo: "refrão",
        texto: "Nós viemos, Senhor,\npara vós adorar.\nNós viemos, Senhor,\npara vós encontrar."
      },
      {
        tipo: "verso",
        texto: "Que alegria quando me disseram:\n\"Vamos à casa do Senhor!\"\nNossos pés já param nas tuas portas,\nó Jerusalém."
      },
      {
        tipo: "verso",
        texto: "É a casa do Senhor\npara onde sobem as tribos.\nDai graças ao Senhor\ne buscai a Sua paz."
      }
    ]
  },

  {
    id: "entrada-03",
    titulo: "Vinde, Povo de Deus",
    secao: "entrada",
    secaoLabel: "Entrada",
    letra: [
      {
        tipo: "refrão",
        texto: "Vinde, povo de Deus,\nvinde celebrar!\nO Senhor nos reúne\npara nos salvar."
      },
      {
        tipo: "verso",
        texto: "Com louvor e alegria\nentremos no Seu templo,\ncom cânticos de festa\nlouvemos ao Senhor."
      },
      {
        tipo: "verso",
        texto: "Ele é nosso refúgio,\nfortaleza e escudo.\nEm Seu nome reunidos,\nsomos Seu povo amado."
      }
    ]
  },

  {
    id: "entrada-04",
    titulo: "Que Alegria Quando Me Disseram",
    secao: "entrada",
    secaoLabel: "Entrada",
    letra: [
      {
        tipo: "verso",
        texto: "Que alegria quando me disseram:\n\"Vamos à casa do Senhor!\"\nNossos pés já param em tuas portas,\nó Jerusalém!"
      },
      {
        tipo: "verso",
        texto: "Jerusalém é construída\ncomo cidade bem unida.\nPara lá sobem as tribos,\nas tribos do Senhor."
      },
      {
        tipo: "verso",
        texto: "É conforme à lei de Israel,\ndar graças ao nome do Senhor.\nLá estão os tronos do julgamento,\nos tronos da casa de Davi."
      },
      {
        tipo: "verso",
        texto: "Pedí a paz para Jerusalém,\nprosperem os que te amam.\nHaja paz dentro de tuas muralhas,\ntranquilidade em teus palácios."
      }
    ]
  },

  // ─── GLÓRIA ─────────────────────────────────────────────
  {
    id: "gloria-01",
    titulo: "Glória a Deus nas Alturas",
    secao: "gloria",
    secaoLabel: "Glória",
    letra: [
      {
        tipo: "refrão",
        texto: "Glória a Deus nas alturas\ne paz na terra aos homens\nque Ele ama!"
      },
      {
        tipo: "verso",
        texto: "Louvamos a Vós, bendizemos a Vós,\nadoramos a Vós, glorificamos a Vós.\nGraças Vos damos pela Vossa imensa glória.\nSenhor Deus, Rei dos céus,\nDeus Pai Todo-Poderoso."
      },
      {
        tipo: "verso",
        texto: "Senhor, Filho Unigênito, Jesus Cristo.\nSenhor Deus, Cordeiro de Deus,\nFilho do Pai.\nVós que tirais o pecado do mundo,\ntende piedade de nós."
      },
      {
        tipo: "verso",
        texto: "Vós que tirais o pecado do mundo,\nacolhei a nossa súplica.\nVós que estais à direita do Pai,\ntende piedade de nós."
      },
      {
        tipo: "verso",
        texto: "Pois só Vós sois o Santo,\nsó Vós, o Senhor,\nsó Vós, o Altíssimo, Jesus Cristo,\ncom o Espírito Santo,\nna glória de Deus Pai. Amém."
      }
    ]
  },

  {
    id: "gloria-02",
    titulo: "Glória — Aleluia ao Senhor",
    secao: "gloria",
    secaoLabel: "Glória",
    letra: [
      {
        tipo: "refrão",
        texto: "Aleluia, aleluia ao Senhor!\nAleluia, aleluia ao Senhor!"
      },
      {
        tipo: "verso",
        texto: "Glória a Deus nas alturas,\nglória a Deus!\nPaz na terra aos homens\nque o Senhor ama."
      },
      {
        tipo: "verso",
        texto: "Louvamos e bendizemos,\nadoramos e glorificamos.\nDeus Todo-Poderoso,\nRei dos céus!"
      },
      {
        tipo: "verso",
        texto: "Filho de Deus, Jesus Cristo,\nCordeiro que tira o pecado.\nNós Vos suplicamos,\nacolhei nossa oração."
      }
    ]
  },

  // ─── SALMO ──────────────────────────────────────────────
  {
    id: "salmo-01",
    titulo: "O Senhor É Meu Pastor",
    secao: "salmo",
    secaoLabel: "Salmo",
    letra: [
      {
        tipo: "refrão",
        texto: "O Senhor é meu pastor,\nnada me faltará."
      },
      {
        tipo: "verso",
        texto: "O Senhor apascenta-me,\ne nada me falta;\npelos prados verdejantes\nEle me leva a descansar."
      },
      {
        tipo: "verso",
        texto: "Conduz-me às águas tranquilas\ne restaura minhas forças;\nguia-me por sendas retas,\npor amor do Seu nome."
      },
      {
        tipo: "verso",
        texto: "Ainda que eu atravesse\no vale da mais negra sombra,\nnão temerei mal algum,\npois Vós estais comigo."
      },
      {
        tipo: "verso",
        texto: "Vossa bondade e misericórdia\nhão de seguir-me todos os dias;\ne habitarei na casa do Senhor\npor longos dias sem fim."
      }
    ]
  },

  {
    id: "salmo-02",
    titulo: "Louvai o Senhor do Alto dos Céus",
    secao: "salmo",
    secaoLabel: "Salmo",
    letra: [
      {
        tipo: "refrão",
        texto: "Louvai o Senhor do alto dos céus,\nlouvai-O em todo o universo!"
      },
      {
        tipo: "verso",
        texto: "Louvai-O, todos os seus anjos,\nlouvai-O, todos os seus exércitos.\nLouvai-O, sol e lua,\nlouvai-O, estrelas luminosas."
      },
      {
        tipo: "verso",
        texto: "Louvai-O, céus dos céus\ne as águas acima dos céus.\nLouvem o nome do Senhor,\npois Ele mandou e foram criados."
      },
      {
        tipo: "verso",
        texto: "Os reis da terra e todos os povos,\nos príncipes e todos os juízes;\nos jovens e as jovens,\nos velhos com as crianças."
      }
    ]
  },

  {
    id: "salmo-03",
    titulo: "A Terra Está Cheia da Tua Bondade",
    secao: "salmo",
    secaoLabel: "Salmo",
    letra: [
      {
        tipo: "refrão",
        texto: "A terra está cheia da Tua bondade,\nSenhor, da Tua bondade!"
      },
      {
        tipo: "verso",
        texto: "Aclamai ao Senhor, ó terra inteira,\ncantai ao Senhor um cântico novo!\nLouvai a glória do Seu nome,\ndai-Lhe glória e louvores."
      },
      {
        tipo: "verso",
        texto: "Que toda a terra Vos adore\ne cante louvores ao Vosso nome.\nA Sua palavra é reta,\ne todas as Suas obras são fiéis."
      },
      {
        tipo: "verso",
        texto: "Feliz o povo que o Senhor escolheu\ncomo Sua herança e patrimônio.\nDo alto dos céus o Senhor olha\ne vê todos os filhos dos homens."
      }
    ]
  },

  {
    id: "salmo-04",
    titulo: "Dai Graças ao Senhor",
    secao: "salmo",
    secaoLabel: "Salmo",
    letra: [
      {
        tipo: "refrão",
        texto: "Dai graças ao Senhor porque Ele é bom,\nporque é eterna a Sua misericórdia!"
      },
      {
        tipo: "verso",
        texto: "Diga Israel que Ele é bom,\nque é eterna a Sua misericórdia.\nDiga a casa de Aarão:\n\"É eterna a Sua misericórdia.\""
      },
      {
        tipo: "verso",
        texto: "Na angústia clamei ao Senhor,\nEle respondeu e libertou-me.\nO Senhor está a meu lado,\nnão temo o que me possa acontecer."
      },
      {
        tipo: "verso",
        texto: "A pedra que os construtores rejeitaram\ntornou-se pedra angular.\nÉ o Senhor quem o fez;\nque maravilha diante dos nossos olhos!"
      }
    ]
  },

  // ─── OFERTÓRIO ──────────────────────────────────────────
  {
    id: "ofertorio-01",
    titulo: "Oferenda",
    secao: "ofertorio",
    secaoLabel: "Ofertório",
    letra: [
      {
        tipo: "refrão",
        texto: "Recebei, Senhor, a nossa oferenda,\no pão e o vinho que Vos trazemos.\nFruto da terra e do trabalho humano,\npara nós se tornará pão da vida."
      },
      {
        tipo: "verso",
        texto: "Bendito sejais, Senhor, Deus do universo,\npelo pão que recebemos da Vossa bondade,\nfruto da terra e do trabalho humano,\nque ora Vos apresentamos."
      },
      {
        tipo: "verso",
        texto: "Bendito sejais, Senhor, Deus do universo,\npelo vinho que recebemos da Vossa bondade,\nfruto da videira e do trabalho humano,\nque ora Vos apresentamos."
      }
    ]
  },

  {
    id: "ofertorio-02",
    titulo: "Toma, Senhor, e Recebe",
    secao: "ofertorio",
    secaoLabel: "Ofertório",
    letra: [
      {
        tipo: "refrão",
        texto: "Toma, Senhor, e recebe\ntoda a minha liberdade.\nMinha memória, meu entendimento\ne toda a minha vontade."
      },
      {
        tipo: "verso",
        texto: "Tudo o que tenho e possuo,\nVós mo destes, Senhor.\nA Vós o torno, Senhor,\ntudo é Vosso, disponde de tudo."
      },
      {
        tipo: "verso",
        texto: "Dai-me apenas o Vosso amor\ne a Vossa graça;\ncom isso sou rico o bastante\ne nada mais peço, Senhor."
      }
    ]
  },

  {
    id: "ofertorio-03",
    titulo: "Eis Aqui, Senhor",
    secao: "ofertorio",
    secaoLabel: "Ofertório",
    letra: [
      {
        tipo: "refrão",
        texto: "Eis aqui, Senhor,\nEis aqui, Senhor,\num coração que Vos ama\ne que a Vós se entrega."
      },
      {
        tipo: "verso",
        texto: "Vinde transformar\ntudo o que somos,\nem oferenda viva\npara Vossa glória."
      },
      {
        tipo: "verso",
        texto: "Com pão e vinho\nnos apresentamos,\na Vós nos damos,\nSenhor, nosso Deus."
      }
    ]
  },

  // ─── SANTO ──────────────────────────────────────────────
  {
    id: "santo-01",
    titulo: "Santo, Santo, Santo",
    secao: "santo",
    secaoLabel: "Santo",
    letra: [
      {
        tipo: "texto",
        texto: "Santo, Santo, Santo,\nSenhor Deus do universo!\nOs céus e a terra estão repletos\nda Vossa glória.\nHossana nas alturas!"
      },
      {
        tipo: "texto",
        texto: "Bendito o que vem\nem nome do Senhor.\nHossana nas alturas!"
      }
    ]
  },

  {
    id: "santo-02",
    titulo: "Santo — Aclamação",
    secao: "santo",
    secaoLabel: "Santo",
    letra: [
      {
        tipo: "refrão",
        texto: "Santo, Santo, Santo é o Senhor!\nSanto, Santo, Santo é o Senhor!"
      },
      {
        tipo: "verso",
        texto: "Os céus e a terra estão repletos\nda glória de Deus.\nHossana, hossana,\nhossana nas alturas!"
      },
      {
        tipo: "verso",
        texto: "Bendito o que vem\nem nome do Senhor.\nHossana, hossana,\nhossana nas alturas!"
      }
    ]
  },

  {
    id: "santo-03",
    titulo: "Cordeiro de Deus",
    secao: "santo",
    secaoLabel: "Santo",
    letra: [
      {
        tipo: "texto",
        texto: "Cordeiro de Deus,\nque tirais o pecado do mundo,\ntende piedade de nós.\n\nCordeiro de Deus,\nque tirais o pecado do mundo,\ntende piedade de nós.\n\nCordeiro de Deus,\nque tirais o pecado do mundo,\ndai-nos a paz."
      }
    ]
  },

  // ─── COMUNHÃO ───────────────────────────────────────────
  {
    id: "comunhao-01",
    titulo: "Pão da Vida",
    secao: "comunhao",
    secaoLabel: "Comunhão",
    letra: [
      {
        tipo: "refrão",
        texto: "Pão da vida, Pão dos céus,\nque desces para nos nutrir.\nVivo em mim o Deus que eu creio,\nque me vem hoje aqui visitar."
      },
      {
        tipo: "verso",
        texto: "Eu sou o pão vivo descido do céu;\nquem comer deste pão viverá para sempre.\nE o pão que Eu darei\né a Minha carne para a vida do mundo."
      },
      {
        tipo: "verso",
        texto: "Quem come a Minha carne\ne bebe o Meu sangue\ntem a vida eterna;\ne Eu o ressuscitarei no último dia."
      },
      {
        tipo: "verso",
        texto: "Quem come a Minha carne\ne bebe o Meu sangue\npermanece em Mim\ne Eu nele."
      }
    ]
  },

  {
    id: "comunhao-02",
    titulo: "Eu Sou a Videira",
    secao: "comunhao",
    secaoLabel: "Comunhão",
    letra: [
      {
        tipo: "refrão",
        texto: "Eu sou a videira verdadeira,\nvós, os ramos.\nPermanecei em Mim\ne dareis muito fruto."
      },
      {
        tipo: "verso",
        texto: "Quem permanece em Mim\ne Eu nele,\nesse dá muito fruto;\nsem Mim nada podeis fazer."
      },
      {
        tipo: "verso",
        texto: "Se guardardes os meus mandamentos,\npermanecereis no Meu amor.\nEste é o Meu mandamento:\namai-vos uns aos outros."
      }
    ]
  },

  {
    id: "comunhao-03",
    titulo: "Fica Conosco, Senhor",
    secao: "comunhao",
    secaoLabel: "Comunhão",
    letra: [
      {
        tipo: "refrão",
        texto: "Fica conosco, Senhor,\npois já é tarde e o dia declinou.\nFica conosco, Senhor,\nSenhor Jesus!"
      },
      {
        tipo: "verso",
        texto: "O teu amor, Senhor,\né mais doce que o mel.\nNão nos deixes partir\nsem o teu perdão."
      },
      {
        tipo: "verso",
        texto: "Nossa vida, Senhor,\né caminho e esforço.\nSe Vós não sois nosso guia,\nperdemo-nos, Senhor."
      },
      {
        tipo: "verso",
        texto: "Neste pão e neste cálice\nvos reconhecemos.\nVinde, Senhor, ficar\nconnosco para sempre."
      }
    ]
  },

  {
    id: "comunhao-04",
    titulo: "Vinde a Mim",
    secao: "comunhao",
    secaoLabel: "Comunhão",
    letra: [
      {
        tipo: "refrão",
        texto: "Vinde a Mim, todos vós\nque estais cansados e oprimidos,\ne Eu vos darei repouso."
      },
      {
        tipo: "verso",
        texto: "Tomai sobre vós o Meu jugo\ne aprendei de Mim,\npois Eu sou manso e humilde de coração."
      },
      {
        tipo: "verso",
        texto: "O Meu jugo é suave\ne o Meu fardo é leve.\nVinde a Mim e encontrareis repouso\npara as vossas almas."
      }
    ]
  },

  {
    id: "comunhao-05",
    titulo: "Senhor, Não Sou Digno",
    secao: "comunhao",
    secaoLabel: "Comunhão",
    letra: [
      {
        tipo: "texto",
        texto: "Senhor, não sou digno\nde que entreis em minha morada,\nmas dizei uma só palavra\ne serei salvo."
      }
    ]
  },

  {
    id: "comunhao-06",
    titulo: "Aqui Estou, Senhor",
    secao: "comunhao",
    secaoLabel: "Comunhão",
    letra: [
      {
        tipo: "refrão",
        texto: "Aqui estou, Senhor,\naqui estou para fazer a Vossa vontade.\nAqui estou, Senhor,\nvosso servo sou."
      },
      {
        tipo: "verso",
        texto: "Sacrifícios e oblações\nnão quisestes.\nPreparastes-me, porém,\num corpo."
      },
      {
        tipo: "verso",
        texto: "Então disse:\n\"Eis que venho!\nEst escrito de Mim\nno livro: fazer a Tua vontade.\""
      }
    ]
  },

  // ─── FINAL ──────────────────────────────────────────────
  {
    id: "final-01",
    titulo: "Ide por Todo o Mundo",
    secao: "final",
    secaoLabel: "Final",
    letra: [
      {
        tipo: "refrão",
        texto: "Ide por todo o mundo\ne anunciai o Evangelho.\nIde por todo o mundo\ne anunciai o Evangelho!"
      },
      {
        tipo: "verso",
        texto: "Quem crer e for batizado\nserá salvo.\nQuem não crer\nserá condenado."
      },
      {
        tipo: "verso",
        texto: "Estes sinais acompanharão\nos que creem:\nem meu nome expulsarão demônios\ne falarão línguas novas."
      },
      {
        tipo: "verso",
        texto: "E Eu estou convosco\ntodos os dias,\naté ao fim dos tempos.\nAleluia!"
      }
    ]
  },

  {
    id: "final-02",
    titulo: "Louvai o Senhor",
    secao: "final",
    secaoLabel: "Final",
    letra: [
      {
        tipo: "refrão",
        texto: "Louvai o Senhor, louvai o Senhor!\nLouvai o Senhor, louvai o Senhor!\nAleluia, aleluia,\naleluia ao Senhor!"
      },
      {
        tipo: "verso",
        texto: "Louvai a Deus no Seu santuário,\nlouvai-O no firmamento da Sua força.\nLouvai-O pelos Seus poderosos feitos,\nlouvai-O pela Sua imensa grandeza."
      },
      {
        tipo: "verso",
        texto: "Louvai-O com sons de trombeta,\nlouvai-O com harpa e cítara.\nLouvai-O com tamborim e dança,\nlouvai-O com instrumentos de corda."
      },
      {
        tipo: "verso",
        texto: "Todo ser que respira\nlouve o Senhor.\nAleluia!"
      }
    ]
  },

  {
    id: "final-03",
    titulo: "A Missão",
    secao: "final",
    secaoLabel: "Final",
    letra: [
      {
        tipo: "refrão",
        texto: "Somos Teu povo, Senhor,\nenviai-nos em missão.\nLevamos ao mundo Teu amor,\nTua paz e Teu perdão."
      },
      {
        tipo: "verso",
        texto: "Fomos chamados à mesa do Senhor,\nalimentados pelo Pão da Vida.\nAgora saímos transformados\npara transformar o mundo."
      },
      {
        tipo: "verso",
        texto: "A Eucaristia nos envia\na amar e servir ao próximo.\nO que recebemos em partilha\ndemos a quem não tem."
      }
    ]
  },

  {
    id: "final-04",
    titulo: "Maria, Mãe da Igreja",
    secao: "final",
    secaoLabel: "Final",
    letra: [
      {
        tipo: "refrão",
        texto: "Maria, Mãe da Igreja,\norai por nós!\nMaria, Mãe da Igreja,\norai por nós!"
      },
      {
        tipo: "verso",
        texto: "Ave Maria, cheia de graça,\no Senhor é convosco.\nBendita sois entre as mulheres\ne bendito é o fruto do vosso ventre."
      },
      {
        tipo: "verso",
        texto: "Santa Maria, Mãe de Deus,\norai por nós, pecadores,\nagora e na hora da nossa morte.\nAmém."
      }
    ]
  },

  {
    id: "final-05",
    titulo: "Salve, Rainha",
    secao: "final",
    secaoLabel: "Final",
    letra: [
      {
        tipo: "texto",
        texto: "Salve, Rainha, Mãe de Misericórdia,\nvida, doçura e esperança nossa, salve!\nA vós bradamos, os degredados filhos de Eva;\na vós suspiramos, gemendo e chorando\nneste vale de lágrimas."
      },
      {
        tipo: "texto",
        texto: "Eia pois, advogada nossa,\nesses vossos olhos misericordiosos\na nós volvei.\nE depois deste desterro,\nmostrai-nos Jesus,\nfruto bendito do vosso ventre."
      },
      {
        tipo: "texto",
        texto: "Ó clemente, ó piedosa,\nó doce sempre Virgem Maria!"
      }
    ]
  }
];
