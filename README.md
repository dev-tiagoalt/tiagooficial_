# Portfólio de Tiago Oliveira da Silva

Site estático (HTML, CSS e JavaScript puros). Não precisa instalar nada para rodar.

Endereço final: **https://dev-tiagoalt.github.io/**

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | Estrutura e textos principais (bio, contatos) |
| `data.js` | **Tecnologias, projetos, patrocinadores e parcerias.** É o que você mais vai editar |
| `style.css` | Cores, fontes e layout |
| `script.js` | Monta as listas e os efeitos. Normalmente não precisa mexer |
| `assets/` | Suas imagens (a foto já está aqui) |

## Publicar no GitHub Pages com o endereço dev-tiagoalt.github.io

1. Entre em https://github.com/new
2. Em **Repository name**, digite exatamente: `dev-tiagoalt.github.io`
3. Deixe como **Public** e clique em **Create repository**
4. Clique em **uploading an existing file** e arraste TODOS os arquivos desta pasta, incluindo a pasta `assets` (`index.html`, `style.css`, `script.js`, `data.js`, `robots.txt`, `sitemap.xml`, `README.md`, `assets/foto.jpg`). Depois clique em **Commit changes**
5. Vá em **Settings > Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`. Clique em **Save**
6. Espere 1 a 2 minutos e abra https://dev-tiagoalt.github.io/

Se o endereço der erro 404 logo depois de publicar, aguarde mais alguns minutos e atualize.

## Foto

Sua foto já está em `assets/foto.jpg` e aparece no topo do site. Para trocar, substitua esse arquivo mantendo o mesmo nome (vertical, de preferência 570 x 810 px ou maior).

## Editar serviços e perguntas frequentes

Em `data.js` ficam as listas `servicos` e `faq`. Cada serviço tem um campo `mensagem`, que é o texto que já vem escrito quando o cliente clica em "Pedir orçamento" e abre o WhatsApp. Revise as respostas do FAQ para que reflitam como você realmente trabalha.

## Fontes

Títulos: Bricolage Grotesque. Textos: Plus Jakarta Sans. Terminal: JetBrains Mono. Todas carregam do Google Fonts, no `<head>` do `index.html`.

## Adicionar um projeto

Abra `data.js`, vá em `projetos` e copie um bloco:

```js
{
  nome: "Nome do projeto",
  descricao: "Uma ou duas frases sobre o que ele faz.",
  tags: ["React", "Node.js"],
  demo: "https://link-do-site-no-ar.com",
  codigo: "https://github.com/dev-tiagoalt/nome-do-repo",
  caso: "",
  imagem: "assets/projeto1.png"
}
```

Apague os três projetos de exemplo (os que têm `exemplo: true`) quando tiver os seus.

## Adicionar um patrocinador

Em `data.js`, dentro de `patrocinadores`:

```js
{ nome: "Empresa X", logo: "assets/sponsors/empresa-x.png", link: "https://empresa-x.com", nivel: "ouro" }
```

Níveis aceitos: `ouro`, `prata`, `bronze`, `apoiador`. Cada nível aparece em tamanho diferente.

## Adicionar um parceiro

Em `data.js`, dentro de `parceiros`:

```js
{ nome: "Comunidade Y", logo: "assets/partners/y.png", link: "https://y.com", tipo: "Comunidade", descricao: "Mentorias e eventos de programação." }
```

Com 4 ou mais parceiros, os logos passam em carrossel contínuo.

## Formulário de contato

Como o GitHub Pages não tem servidor, o formulário abre o app de e-mail da pessoa com a mensagem pronta, endereçada a `tiago.oliveira.tech.dev@gmail.com`. Se quiser receber mensagens sem abrir o e-mail, crie uma conta grátis no Formspree ou no EmailJS e troque o trecho final de `script.js`.

## Trocar cores

No início de `style.css`, em `:root`, estão as cores: `--uv` (violeta), `--plasma` (ciano) e `--flare` (rosa).
# tiagooficial_
