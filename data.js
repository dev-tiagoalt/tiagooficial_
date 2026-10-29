/*
  ARQUIVO DE DADOS: é aqui que você edita o que aparece nas listas do site.
  Não precisa mexer em HTML, CSS ou JavaScript para:
    - trocar serviços, tecnologias e perguntas frequentes
    - adicionar/remover projetos
    - adicionar patrocinadores e parceiros
  Salvou, fez commit no GitHub e o site atualiza sozinho.
*/

window.SITE = {
  /* Número do WhatsApp com 55 + DDD, sem espaços ou símbolos */
  whatsapp: "5585991483472",

  /* ---------- SERVIÇOS ----------
     Cada serviço vira um cartão com botão que abre o WhatsApp
     já com a mensagem escrita (campo "mensagem"). */
  servicos: [
    {
      titulo: "Site ou landing page que vende",
      texto: "Página rápida no celular, com botão de WhatsApp e estrutura pensada para transformar visita em contato.",
      mensagem: "Olá Tiago! Quero um site ou landing page para o meu negócio."
    },
    {
      titulo: "Sistema web sob medida",
      texto: "Painéis, cadastros, pedidos e relatórios para organizar seu negócio sem planilhas espalhadas.",
      mensagem: "Olá Tiago! Quero um sistema web sob medida."
    },
    {
      titulo: "Integrações e APIs",
      texto: "Conecto seu sistema a pagamentos, WhatsApp, e-mail e outras ferramentas que você já usa.",
      mensagem: "Olá Tiago! Preciso de uma integração ou API."
    },
    {
      titulo: "App com inteligência artificial",
      texto: "Assistentes e automações com o Claude para atender clientes e poupar tempo da sua equipe.",
      mensagem: "Olá Tiago! Quero um app ou automação com inteligência artificial."
    }
  ],

  /* ---------- TECNOLOGIAS ---------- */
  skills: [
    { grupo: "Front-end", itens: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
    { grupo: "Back-end", itens: ["Node.js", "Express", "APIs REST", "Autenticação JWT"] },
    { grupo: "Banco de dados", itens: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"] },
    { grupo: "Infra e ferramentas", itens: ["Git e GitHub", "Docker", "GitHub Pages", "Vercel"] },
    { grupo: "IA no desenvolvimento", itens: ["Claude", "Claude Code", "Engenharia de prompt", "API da Anthropic"] }
  ],

  /* ---------- PROJETOS ----------
     Os três abaixo são EXEMPLOS (exemplo: true). Troque pelos seus.
     Campos: nome, descricao, tags (lista), demo (site no ar),
             codigo (GitHub), caso (estudo de caso), imagem (print, ex.: "assets/projeto1.png")
     Campo vazio ("") = o botão não aparece.
     Remova "exemplo: true" quando o projeto for real. */
  projetos: [
    {
      nome: "Painel de pedidos",
      descricao: "Aplicação fullstack com login, painel administrativo e API REST para controlar pedidos e clientes.",
      tags: ["React", "Node.js", "PostgreSQL"],
      demo: "",
      codigo: "https://github.com/dev-tiagoalt",
      caso: "",
      imagem: "",
      exemplo: true
    },
    {
      nome: "API com autenticação",
      descricao: "API com cadastro, login por token, controle de permissões e documentação das rotas.",
      tags: ["Node.js", "Express", "JWT"],
      demo: "",
      codigo: "https://github.com/dev-tiagoalt",
      caso: "",
      imagem: "",
      exemplo: true
    },
    {
      nome: "App com assistente de IA",
      descricao: "Interface de chat que conversa com o Claude pela API e guarda o histórico de cada usuário.",
      tags: ["Next.js", "Claude", "TypeScript"],
      demo: "",
      codigo: "https://github.com/dev-tiagoalt",
      caso: "",
      imagem: "",
      exemplo: true
    }
  ],

  /* ---------- MURAL DE PATROCÍNIO ----------
     Lista vazia = o site mostra o convite "Seu logo pode estar aqui".
     Modelo:
       { nome: "Empresa X", logo: "assets/sponsors/empresa-x.png",
         link: "https://empresa-x.com", nivel: "ouro" }
     nivel: "ouro", "prata", "bronze" ou "apoiador".
     Sem logo? Deixe logo: "" e o site cria um monograma com as iniciais. */
  patrocinadores: [],

  apoio: {
    texto: "Quero patrocinar",
    mensagem: "Olá Tiago! Quero patrocinar o seu trabalho."
  },

  /* ---------- MURAL DE PARCERIAS ----------
     Modelo:
       { nome: "Comunidade Y", logo: "assets/partners/y.png",
         link: "https://y.com", tipo: "Comunidade",
         descricao: "Mentorias e eventos de programação." }
     Com 4 ou mais parceiros, os logos passam em carrossel contínuo. */
  parceiros: [],

  /* ---------- PERGUNTAS FREQUENTES ----------
     Revise as respostas para que reflitam como você realmente trabalha. */
  faq: [
    {
      p: "Quanto custa um site ou sistema?",
      r: "Depende do que você precisa. Depois de uma conversa rápida pelo WhatsApp, envio um orçamento com valor e prazo, sem compromisso."
    },
    {
      p: "Em quanto tempo fica pronto?",
      r: "Uma landing page costuma ser bem mais rápida que um sistema completo. O prazo exato vai na proposta, antes de começar."
    },
    {
      p: "Você atende de qualquer cidade?",
      r: "Sim. Trabalho de forma remota e atendo clientes de Cascavel e de todo o Brasil."
    },
    {
      p: "Preciso ter domínio e hospedagem?",
      r: "Não precisa chegar com isso pronto. Eu oriento a escolha e deixo o projeto publicado."
    },
    {
      p: "Vai funcionar bem no celular?",
      r: "Sim. Desenvolvo pensando primeiro no celular, que é de onde vem boa parte dos acessos."
    },
    {
      p: "Você usa inteligência artificial?",
      r: "Uso o Claude como apoio para planejar, programar e revisar. Isso acelera a entrega, e eu continuo responsável por cada decisão e pelo resultado final."
    }
  ]
};
