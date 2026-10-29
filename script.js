/* Portfólio de Tiago Oliveira da Silva
   Este arquivo monta as listas a partir de data.js. Normalmente você não precisa editá-lo. */
(() => {
  "use strict";

  const S = Object.assign(
    { whatsapp: "", servicos: [], skills: [], projetos: [], patrocinadores: [], parceiros: [], faq: [], apoio: {} },
    window.SITE || {}
  );
  const $ = (sel, root = document) => root.querySelector(sel);
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Cria elementos de forma segura (sem innerHTML com dados de fora) */
  function h(tag, props = {}, ...filhos) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v === true ? "" : v);
    }
    filhos.flat().forEach((c) => {
      if (c === null || c === undefined || c === false) return;
      n.append(c.nodeType ? c : document.createTextNode(c));
    });
    return n;
  }

  const iniciais = (nome = "") =>
    nome.trim().split(/\s+/).slice(0, 2).map((p) => p[0] || "").join("").toUpperCase() || "?";

  const zap = (mensagem) =>
    `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(mensagem)}`;

  /* ---------- Ano no rodapé ---------- */
  $("#ano").textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  const menuBtn = $(".menu-btn");
  const nav = $("#nav");
  function fecharMenu() {
    nav.classList.remove("aberto");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu");
  }
  menuBtn.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", String(aberto));
    menuBtn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) fecharMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharMenu(); });

  /* ---------- Console do hero (digitação) ---------- */
  const consoleEl = $("#console");
  const roteiro = [
    { classe: "cmd", texto: "$ claude" },
    { classe: "cmd", texto: "> Crie o site com formulário e painel." },
    { classe: "ok", texto: "✓ Layout feito para o celular" },
    { classe: "ok", texto: "✓ Banco de dados e login" },
    { classe: "ok", texto: "✓ Publicado no ar" }
  ];

  function linha(item) {
    const span = h("span", { class: item.classe });
    if (item.classe === "ok") span.append(h("b", { text: "✓" }), item.texto.slice(1));
    else span.textContent = item.texto;
    return span;
  }

  function rodarConsole() {
    consoleEl.textContent = "";
    if (reduzMovimento) {
      roteiro.forEach((it) => consoleEl.append(linha(it), "\n"));
      return;
    }
    const cursor = h("span", { class: "cursor", "aria-hidden": "true" });
    let i = 0;
    function proxima() {
      if (i >= roteiro.length) { consoleEl.append(cursor); return; }
      const item = roteiro[i++];
      const alvo = h("span", { class: item.classe });
      consoleEl.append(alvo, "\n", cursor);
      const rapido = item.classe === "ok";
      let c = 0;
      const t = setInterval(() => {
        c++;
        alvo.textContent = item.texto.slice(0, c);
        if (c >= item.texto.length) {
          clearInterval(t);
          alvo.replaceWith(linha(item));
          setTimeout(proxima, rapido ? 250 : 450);
        }
      }, rapido ? 14 : 28);
    }
    setTimeout(proxima, 1100);
  }
  rodarConsole();

  /* ---------- Serviços ---------- */
  const coresServico = ["#2ee6ff", "#7b61ff", "#ff5ca8", "#ffcf5c"];
  const servicosEl = $("#servicos-lista");
  S.servicos.forEach((s, i) => {
    servicosEl.append(
      h("article", { class: "card servico", style: `--c:${coresServico[i % coresServico.length]}` },
        h("h3", { text: s.titulo }),
        h("p", { text: s.texto }),
        h("a", { class: "link-mini principal", href: zap(s.mensagem || "Olá Tiago! Vi seu portfólio."), target: "_blank", rel: "noopener", text: "Pedir orçamento" })
      )
    );
  });

  /* ---------- Skills ---------- */
  const skillsEl = $("#skills-lista");
  S.skills.forEach((g) => {
    skillsEl.append(
      h("article", { class: "card skill" },
        h("h3", { text: g.grupo }),
        h("ul", { class: "chips" }, g.itens.map((t) => h("li", { class: "chip", text: t })))
      )
    );
  });

  /* ---------- Projetos + filtro ---------- */
  const paletas = [
    ["#2ee6ff", "#7b61ff"],
    ["#7b61ff", "#ff5ca8"],
    ["#ff5ca8", "#ffb35c"],
    ["#2ee6ff", "#34d399"]
  ];
  const projetosEl = $("#projetos-lista");
  const filtrosEl = $("#filtros");
  let filtroAtual = "Todos";

  function cartaoProjeto(p, i) {
    const [a, b] = paletas[i % paletas.length];
    const capa = h("div", { class: "capa", style: `--a:${a};--b:${b}` },
      p.imagem
        ? h("img", { src: p.imagem, alt: `Tela do projeto ${p.nome}`, loading: "lazy" })
        : h("span", { class: "capa-ini", "aria-hidden": "true", text: iniciais(p.nome) }),
      p.exemplo ? h("span", { class: "selo", text: "Projeto de exemplo" }) : null
    );

    const links = [];
    if (p.demo) links.push(h("a", { class: "link-mini principal", href: p.demo, target: "_blank", rel: "noopener", text: "Ver no ar" }));
    if (p.codigo) links.push(h("a", { class: "link-mini", href: p.codigo, target: "_blank", rel: "noopener", text: "Ver código" }));
    if (p.caso) links.push(h("a", { class: "link-mini", href: p.caso, target: "_blank", rel: "noopener", text: "Ler estudo de caso" }));

    return h("article", { class: "card projeto" },
      capa,
      h("div", { class: "projeto-corpo" },
        h("h3", { text: p.nome }),
        h("p", { text: p.descricao }),
        h("ul", { class: "chips" }, (p.tags || []).map((t) => h("li", { class: "chip", text: t }))),
        links.length ? h("div", { class: "projeto-links" }, links) : null
      )
    );
  }

  function desenharProjetos() {
    projetosEl.textContent = "";
    const lista = S.projetos.filter((p) => filtroAtual === "Todos" || (p.tags || []).includes(filtroAtual));
    if (!lista.length) {
      projetosEl.append(h("p", { class: "intro", text: "Nenhum projeto com essa tecnologia ainda." }));
      return;
    }
    lista.forEach((p, i) => projetosEl.append(cartaoProjeto(p, i)));
  }

  function desenharFiltros() {
    filtrosEl.textContent = "";
    const tags = ["Todos", ...new Set(S.projetos.flatMap((p) => p.tags || []))];
    if (tags.length <= 2) { filtrosEl.hidden = true; return; }
    tags.forEach((t) => {
      const b = h("button", { class: "filtro", type: "button", "aria-pressed": String(t === filtroAtual), text: t });
      b.addEventListener("click", () => {
        filtroAtual = t;
        desenharFiltros();
        desenharProjetos();
      });
      filtrosEl.append(b);
    });
  }
  desenharFiltros();
  desenharProjetos();

  /* ---------- Mural de patrocínio ---------- */
  const patroEl = $("#patrocinio-lista");
  const niveis = [
    ["ouro", "Ouro"],
    ["prata", "Prata"],
    ["bronze", "Bronze"],
    ["apoiador", "Apoiadores"]
  ];
  const apoio = S.apoio || {};
  const botaoApoio = () =>
    h("a", { class: "btn btn-primario", href: zap(apoio.mensagem || "Olá Tiago! Quero patrocinar o seu trabalho."), target: "_blank", rel: "noopener", text: apoio.texto || "Quero patrocinar" });

  function logoOuMono(item) {
    return item.logo
      ? h("img", { src: item.logo, alt: `Logo ${item.nome}`, loading: "lazy" })
      : h("span", { class: "mono", "aria-hidden": "true", text: iniciais(item.nome) });
  }

  if (!S.patrocinadores.length) {
    patroEl.append(
      h("div", { class: "vazio" },
        h("div", { class: "vazio-slots" },
          h("div", { class: "slot slot-ouro" }, h("strong", { text: "Seu logo pode estar aqui" }), "Destaque máximo, nível Ouro"),
          h("div", { class: "slot slot-prata" }, h("strong", { text: "Nível Prata" }), "Logo em tamanho médio"),
          h("div", { class: "slot slot-bronze" }, h("strong", { text: "Nível Bronze" }), "Logo compacto")
        ),
        h("p", { text: "O mural ainda está vazio. Patrocine meu trabalho e sua marca aparece aqui, com link para o seu site." }),
        botaoApoio()
      )
    );
  } else {
    niveis.forEach(([chave, rotulo]) => {
      const grupo = S.patrocinadores.filter((s) => (s.nivel || "apoiador") === chave);
      if (!grupo.length) return;
      patroEl.append(
        h("div", { class: `nivel nivel-${chave}` },
          h("h3", { text: rotulo }),
          h("ul", { class: "nivel-lista" },
            grupo.map((s) =>
              h("li", {},
                h("a", { class: "card patro", href: s.link || "#", target: s.link ? "_blank" : null, rel: s.link ? "noopener sponsored" : null, "aria-label": s.nome },
                  logoOuMono(s),
                  chave === "apoiador" ? null : h("strong", { text: s.nome })
                )
              )
            )
          )
        )
      );
    });
    patroEl.append(h("div", { style: "margin-top:2.2rem" }, botaoApoio()));
  }

  /* ---------- Mural de parcerias ---------- */
  const parcEl = $("#parcerias-lista");

  function cartaoParceiro(p, escondido) {
    const conteudo = [
      logoOuMono(p),
      h("span", {},
        h("small", { text: p.tipo || "Parceria" }),
        h("strong", { text: p.nome }),
        p.descricao ? h("span", { text: p.descricao }) : null
      )
    ];
    return h(p.link ? "a" : "div", {
      class: "card parceiro",
      href: p.link || null,
      target: p.link ? "_blank" : null,
      rel: p.link ? "noopener" : null,
      "aria-hidden": escondido ? "true" : null,
      tabindex: escondido && p.link ? "-1" : null
    }, conteudo);
  }

  if (!S.parceiros.length) {
    parcEl.append(
      h("div", { class: "vazio-parc" },
        h("strong", { text: "Vamos construir juntos" }),
        h("p", { text: "Empresas, comunidades e devs que quiserem criar algo em parceria podem ter o logo aqui, com um resumo do que fazemos juntos." }),
        h("a", { class: "btn btn-fantasma", href: zap("Olá Tiago! Quero propor uma parceria."), target: "_blank", rel: "noopener", text: "Propor uma parceria" })
      )
    );
  } else if (S.parceiros.length >= 4) {
    const trilha = h("div", { class: "marquee-trilha" },
      S.parceiros.map((p) => cartaoParceiro(p, false)),
      S.parceiros.map((p) => cartaoParceiro(p, true))
    );
    parcEl.append(h("div", { class: "marquee" }, trilha));
  } else {
    parcEl.append(h("div", { class: "parc-grid" }, S.parceiros.map((p) => cartaoParceiro(p, false))));
  }

  /* ---------- FAQ ---------- */
  const faqEl = $("#faq-lista");
  S.faq.forEach((item) => {
    faqEl.append(
      h("details", {},
        h("summary", { text: item.p }),
        h("p", { text: item.r })
      )
    );
  });

  /* ---------- Luz que segue o cursor nos cartões ---------- */
  document.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    const c = e.target.closest ? e.target.closest(".card") : null;
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", `${e.clientX - r.left}px`);
    c.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  /* ---------- Destaque do menu conforme a seção ---------- */
  const links = [...document.querySelectorAll(".nav a[href^='#']")];
  const secoes = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((itens) => {
      itens.forEach((it) => {
        if (!it.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        const ativo = links.find((a) => a.getAttribute("href") === `#${it.target.id}`);
        if (ativo) ativo.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secoes.forEach((s) => obs.observe(s));
  }

  /* ---------- Botão fixo do WhatsApp (celular) ----------
     Some quando o botão do hero ou a seção de contato já estão na tela. */
  const barra = $("#barra-zap");
  const vigias = [$(".hero-acoes"), $("#contato")].filter(Boolean);
  if (barra && "IntersectionObserver" in window) {
    const visiveis = new Set();
    const obsBarra = new IntersectionObserver((itens) => {
      itens.forEach((it) => (it.isIntersecting ? visiveis.add(it.target) : visiveis.delete(it.target)));
      barra.classList.toggle("oculta", visiveis.size > 0);
    });
    vigias.forEach((v) => obsBarra.observe(v));
  }

  /* ---------- Formulário: abre o e-mail com a mensagem pronta ---------- */
  const form = $("#form");
  const status = $("#form-status");
  const EMAIL = "tiago.oliveira.tech.dev@gmail.com";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const campos = [form.nome, form.email, form.msg];
    let primeiroInvalido = null;
    campos.forEach((c) => {
      const ok = c.value.trim() !== "" && (c.type !== "email" || /^\S+@\S+\.\S+$/.test(c.value.trim()));
      c.setAttribute("aria-invalid", String(!ok));
      if (!ok && !primeiroInvalido) primeiroInvalido = c;
    });
    if (primeiroInvalido) {
      status.className = "form-status erro";
      status.textContent = "Preencha nome, e-mail válido e mensagem para continuar.";
      primeiroInvalido.focus();
      return;
    }
    const assunto = `Contato pelo portfólio: ${form.nome.value.trim()}`;
    const corpo = `${form.msg.value.trim()}\n\nNome: ${form.nome.value.trim()}\nE-mail: ${form.email.value.trim()}`;
    status.className = "form-status";
    status.textContent = "Abrindo seu app de e-mail com a mensagem pronta. Só falta enviar.";
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
  });
})();
