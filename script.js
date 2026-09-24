// =====================================================================
// CineLista — projeto em HTML, CSS e JavaScript puro (sem frameworks)
// =====================================================================

// ---------- Dados dos filmes ----------
const GENEROS = ["Ação", "Comédia", "Drama", "Terror", "Ficção Científica", "Romance"];

const PALETA_GENERO = {
  "Ação": ["#7A2E2E", "#C74B4B"],
  "Comédia": ["#7A5A1E", "#E8B563"],
  "Drama": ["#2E3A5A", "#5B7BA6"],
  "Terror": ["#1E1E1E", "#4A1E1E"],
  "Ficção Científica": ["#1E3A3A", "#3FA6A6"],
  "Romance": ["#5A1E3A", "#B5568C"],
};

const TITULOS = [
  { id: 1, titulo: "Mad Max: Estrada da Fúria", genero: "Ação", ano: 2015, tipo: "Filme", nota: 9.2,
    sinopse: "Numa terra devastada, um sobrevivente solitário se junta a uma guerreira rebelde numa fuga através do deserto, driblando um exército obcecado por trazê-los de volta.", elenco: "Tom Hardy, Charlize Theron" },
  { id: 2, titulo: "John Wick: De Volta ao Jogo", genero: "Ação", ano: 2014, tipo: "Filme", nota: 8.8,
    sinopse: "Um assassino aposentado sai da inatividade para se vingar dos criminosos que invadiram sua casa e mataram o último presente de sua falecida esposa.", elenco: "Keanu Reeves, Michael Nyqvist" },
  { id: 3, titulo: "Duro de Matar", genero: "Ação", ano: 1988, tipo: "Filme", nota: 9.0,
    sinopse: "Um policial de folga fica preso sozinho num arranha-céu tomado por terroristas durante a festa de fim de ano da empresa da esposa.", elenco: "Bruce Willis, Alan Rickman" },
  { id: 4, titulo: "Gladiador", genero: "Ação", ano: 2000, tipo: "Filme", nota: 9.4,
    sinopse: "Um general romano traído é reduzido à escravidão e retorna como gladiador para vingar a morte da família e desafiar o imperador que o condenou.", elenco: "Russell Crowe, Joaquin Phoenix" },
  { id: 5, titulo: "Missão: Impossível – Efeito Fallout", genero: "Ação", ano: 2018, tipo: "Filme", nota: 9.1,
    sinopse: "Uma missão que dá errado obriga um agente e sua equipe a correr contra o tempo para impedir que material nuclear caia em mãos erradas.", elenco: "Tom Cruise, Henry Cavill" },

  { id: 6, titulo: "As Branquelas", genero: "Comédia", ano: 2004, tipo: "Filme", nota: 8.3,
    sinopse: "Dois agentes do FBI se disfarçam de socialites loiras para proteger as herdeiras de um sequestro, e o disfarce sai completamente do controle.", elenco: "Shawn Wayans, Marlon Wayans" },
  { id: 7, titulo: "Se Beber, Não Case!", genero: "Comédia", ano: 2009, tipo: "Filme", nota: 8.6,
    sinopse: "Depois de uma despedida de solteiro em Las Vegas, três amigos acordam sem lembrança da noite e sem o noivo, que precisa ser encontrado antes do casamento.", elenco: "Bradley Cooper, Ed Helms, Zach Galifianakis" },
  { id: 8, titulo: "Todo Mundo em Pânico", genero: "Comédia", ano: 2000, tipo: "Filme", nota: 7.9,
    sinopse: "Um grupo de adolescentes que escondeu um atropelamento é perseguido por um assassino mascarado, numa paródia escancarada dos clássicos de terror adolescente.", elenco: "Anna Faris, Marlon Wayans" },
  { id: 9, titulo: "O Máskara", genero: "Comédia", ano: 1994, tipo: "Filme", nota: 8.5,
    sinopse: "Um bancário tímido encontra uma máscara antiga que o transforma numa versão exagerada e destemida de si mesmo, mudando sua vida da noite para o dia.", elenco: "Jim Carrey, Cameron Diaz" },
  { id: 10, titulo: "Debi & Lóide: Dois Idiotas em Apuros", genero: "Comédia", ano: 1994, tipo: "Filme", nota: 8.0,
    sinopse: "Dois amigos desastrados atravessam o país para devolver uma maleta esquecida, sem perceber que ela é o alvo de sequestradores.", elenco: "Jim Carrey, Jeff Daniels" },

  { id: 11, titulo: "Um Sonho de Liberdade", genero: "Drama", ano: 1994, tipo: "Filme", nota: 9.7,
    sinopse: "Condenado por um crime que não cometeu, um homem constrói ao longo de duas décadas de prisão uma amizade e um plano que vão redefinir o que é liberdade.", elenco: "Tim Robbins, Morgan Freeman" },
  { id: 12, titulo: "À Procura da Felicidade", genero: "Drama", ano: 2006, tipo: "Filme", nota: 9.0,
    sinopse: "Um pai sem-teto tenta reconstruir a vida ao lado do filho pequeno enquanto disputa uma vaga não remunerada que pode mudar seu futuro.", elenco: "Will Smith, Jaden Smith" },
  { id: 13, titulo: "Clube da Luta", genero: "Drama", ano: 1999, tipo: "Filme", nota: 9.1,
    sinopse: "Um homem insone e insatisfeito com a própria vida cria, ao lado de um estranho carismático, um clube clandestino que rapidamente foge ao controle.", elenco: "Brad Pitt, Edward Norton" },
  { id: 14, titulo: "O Poderoso Chefão", genero: "Drama", ano: 1972, tipo: "Filme", nota: 9.8,
    sinopse: "A ascensão do filho mais novo de uma família da máfia italiana, que assume o comando do império criminoso do pai contra sua própria vontade inicial.", elenco: "Marlon Brando, Al Pacino" },
  { id: 15, titulo: "Forrest Gump", genero: "Drama", ano: 1994, tipo: "Filme", nota: 9.3,
    sinopse: "Um homem de bom coração e visão simples do mundo atravessa, sem perceber, alguns dos momentos mais marcantes da história americana.", elenco: "Tom Hanks, Robin Wright" },

  { id: 16, titulo: "O Exorcista", genero: "Terror", ano: 1973, tipo: "Filme", nota: 9.2,
    sinopse: "Uma mãe desesperada recorre a dois padres quando a filha começa a apresentar um comportamento cada vez mais perturbador e inexplicável.", elenco: "Ellen Burstyn, Linda Blair" },
  { id: 17, titulo: "Invocação do Mal", genero: "Terror", ano: 2013, tipo: "Filme", nota: 8.7,
    sinopse: "Um casal de investigadores paranormais é chamado para ajudar uma família aterrorizada por uma presença cada vez mais hostil em sua casa de fazenda.", elenco: "Patrick Wilson, Vera Farmiga" },
  { id: 18, titulo: "Hereditário", genero: "Terror", ano: 2018, tipo: "Filme", nota: 9.0,
    sinopse: "Após a morte da avó, uma família começa a desvendar segredos sombrios que estavam enterrados havia gerações.", elenco: "Toni Collette, Alex Wolff" },
  { id: 19, titulo: "O Iluminado", genero: "Terror", ano: 1980, tipo: "Filme", nota: 9.5,
    sinopse: "Um escritor aceita cuidar de um hotel isolado durante o inverno e aos poucos perde o controle da própria sanidade, colocando a família em perigo.", elenco: "Jack Nicholson, Shelley Duvall" },
  { id: 20, titulo: "Um Lugar Silencioso", genero: "Terror", ano: 2018, tipo: "Filme", nota: 8.9,
    sinopse: "Numa Terra dominada por criaturas que caçam pelo som, uma família aprende a viver em silêncio absoluto para sobreviver.", elenco: "Emily Blunt, John Krasinski" },

  { id: 21, titulo: "Interestelar", genero: "Ficção Científica", ano: 2014, tipo: "Filme", nota: 9.6,
    sinopse: "Um piloto e ex-engenheiro atravessa um buraco de minhoca em busca de um novo lar para a humanidade, enquanto o tempo passa de forma diferente para ele e sua família.", elenco: "Matthew McConaughey, Anne Hathaway" },
  { id: 22, titulo: "Matrix", genero: "Ficção Científica", ano: 1999, tipo: "Filme", nota: 9.4,
    sinopse: "Um programador descobre que a realidade que conhece é uma simulação e se junta a um grupo de rebeldes para libertar a humanidade das máquinas.", elenco: "Keanu Reeves, Laurence Fishburne" },
  { id: 23, titulo: "Blade Runner 2049", genero: "Ficção Científica", ano: 2017, tipo: "Filme", nota: 9.1,
    sinopse: "Um agente encarregado de caçar androides antigos descobre um segredo capaz de mergulhar o que resta da sociedade no caos.", elenco: "Ryan Gosling, Harrison Ford" },
  { id: 24, titulo: "A Origem", genero: "Ficção Científica", ano: 2010, tipo: "Filme", nota: 9.3,
    sinopse: "Um especialista em roubar segredos através dos sonhos recebe a missão inversa: plantar uma ideia na mente de um alvo.", elenco: "Leonardo DiCaprio, Joseph Gordon-Levitt" },
  { id: 25, titulo: "De Volta para o Futuro", genero: "Ficção Científica", ano: 1985, tipo: "Filme", nota: 9.5,
    sinopse: "Um adolescente é acidentalmente enviado trinta anos para o passado numa máquina do tempo e precisa garantir que seus próprios pais se apaixonem.", elenco: "Michael J. Fox, Christopher Lloyd" },

  { id: 26, titulo: "Titanic", genero: "Romance", ano: 1997, tipo: "Filme", nota: 9.0,
    sinopse: "A bordo do transatlântico mais famoso da história, um artista pobre e uma jovem da alta sociedade vivem um romance interrompido pela tragédia.", elenco: "Leonardo DiCaprio, Kate Winslet" },
  { id: 27, titulo: "Diário de uma Paixão", genero: "Romance", ano: 2004, tipo: "Filme", nota: 8.8,
    sinopse: "Um idoso lê para uma mulher com a memória perdida a história de um casal de jovens separados pela diferença de classe social e pela guerra.", elenco: "Ryan Gosling, Rachel McAdams" },
  { id: 28, titulo: "Simplesmente Acontece", genero: "Romance", ano: 2014, tipo: "Filme", nota: 8.2,
    sinopse: "Dois melhores amigos de infância passam anos desencontrando as próprias vidas amorosas sem admitir o que sentem um pelo outro.", elenco: "Lily Collins, Sam Claflin" },
  { id: 29, titulo: "Orgulho e Preconceito", genero: "Romance", ano: 2005, tipo: "Filme", nota: 9.1,
    sinopse: "Numa Inglaterra regida por convenções sociais rígidas, uma jovem de opiniões fortes entra em conflito e, aos poucos, se aproxima de um aristocrata orgulhoso.", elenco: "Keira Knightley, Matthew Macfadyen" },
  { id: 30, titulo: "Como Eu Era Antes de Você", genero: "Romance", ano: 2016, tipo: "Filme", nota: 8.5,
    sinopse: "A convivência entre uma cuidadora cheia de vida e um homem que perdeu a vontade de viver depois de um acidente transforma a vida dos dois.", elenco: "Emilia Clarke, Sam Claflin" },
];

// ---------- Ícones (SVG inline, sem dependências externas) ----------
const ICONS = {
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`,
  star: (filled) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="${filled ? '#E8B563' : 'none'}" stroke="${filled ? '#E8B563' : '#4A4D56'}" stroke-width="1.5"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9"/></svg>`,
  starBig: (filled) => `<svg width="26" height="26" viewBox="0 0 24 24" fill="${filled ? '#E8B563' : 'none'}" stroke="${filled ? '#E8B563' : '#4A4D56'}" stroke-width="1.5"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9"/></svg>`,
  chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`,
  send: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>`,
  bookmark: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>`,
  messageCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
  logout: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>`,
  user: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  x: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
};

// ---------- Persistência (localStorage) ----------
// Observação: localStorage funciona quando este arquivo é aberto direto no navegador
// ou hospedado normalmente. Ele NÃO funciona dentro da pré-visualização de artifacts
// do Claude.ai — se for testar por aqui e os dados não persistirem, é por isso;
// ao abrir o index.html localmente no navegador, funciona normalmente.
function carregar(chave, padrao) {
  try {
    const raw = localStorage.getItem(chave);
    return raw ? JSON.parse(raw) : padrao;
  } catch {
    return padrao;
  }
}

function salvar(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // armazenamento indisponível: segue apenas com o estado em memória
  }
}

let watchlist = carregar("cinelista_watchlist", [3, 7]);
let usuario = carregar("cinelista_usuario", null);
let comentarios = carregar("cinelista_comentarios", {});   // { [id]: [{autor, texto, quando}] }
let avaliacoes = carregar("cinelista_avaliacoes", {});      // { [id]: { [autor]: nota } }

// ---------- Estado de navegação (em memória) ----------
let state = {
  view: "home",       // home | busca | detalhe | watchlist
  query: "",
  generoFiltro: null,
  detalheId: null,
};

const app = document.getElementById("app");

// ---------- Helpers ----------
function porId(id) { return TITULOS.find((t) => t.id === id); }

function posterHTML(item, sizeClass) {
  const [c1, c2] = PALETA_GENERO[item.genero] || ["#333", "#555"];
  return `
    <div class="poster ${sizeClass}" style="background: linear-gradient(155deg, ${c1} 0%, ${c2} 100%);">
      <div class="poster-top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F2EFE9" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5M2 16h5M17 8h5M17 16h5"/></svg>
      </div>
      <div class="poster-title">${item.titulo}</div>
    </div>`;
}

function notaHTML(valor) {
  return `<span class="nota">${ICONS.star(true)} ${valor.toFixed(1)}</span>`;
}

function cardHTML(item) {
  const salvo = watchlist.includes(item.id);
  return `
    <div class="card" data-open="${item.id}">
      <div class="card-poster-wrap">
        ${posterHTML(item, "poster-normal")}
        <button class="watch-btn ${salvo ? "saved" : ""}" data-toggle="${item.id}" title="${salvo ? "Remover da watchlist" : "Adicionar à watchlist"}">
          ${salvo ? ICONS.check : ICONS.plus}
        </button>
      </div>
      <div>
        <div class="card-title">${item.titulo}</div>
        <div class="card-meta">
          <span>${item.genero} · ${item.ano}</span>
          ${notaHTML(item.nota)}
        </div>
      </div>
    </div>`;
}

function gridHTML(itens) {
  return `<div class="grid">${itens.map(cardHTML).join("")}</div>`;
}

// ---------- Header ----------
function renderHeader() {
  document.getElementById("watchlist-count").textContent = watchlist.length > 0 ? `(${watchlist.length})` : "";

  const authArea = document.getElementById("auth-area");
  if (usuario) {
    authArea.innerHTML = `
      <div class="user-chip">
        <div class="avatar">${usuario.charAt(0).toUpperCase()}</div>
        <span>${usuario}</span>
        <button class="btn-icon" id="btn-logout" title="Sair">${ICONS.logout}</button>
      </div>`;
    document.getElementById("btn-logout").onclick = () => {
      usuario = null;
      salvar("cinelista_usuario", null);
      renderHeader();
    };
  } else {
    authArea.innerHTML = `<button class="btn-gold" id="btn-login">${ICONS.user} Entrar</button>`;
    document.getElementById("btn-login").onclick = abrirLoginModal;
  }
}

document.getElementById("logo").onclick = () => { state.view = "home"; render(); };
document.getElementById("btn-watchlist").onclick = () => { state.view = "watchlist"; render(); };

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    state.view = "busca";
    state.query = searchInput.value;
    render();
  }
});

// ---------- Modal de login ----------
function abrirLoginModal() {
  const root = document.getElementById("login-modal-root");
  root.innerHTML = `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-box">
        <button class="modal-close" id="modal-close">${ICONS.x}</button>
        <div class="modal-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8B563" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5M2 16h5M17 8h5M17 16h5"/></svg>
          Entrar no CineLista
        </div>
        <p class="modal-hint">Protótipo de estudo — o login aqui é só um nome de exibição, sem senha.</p>
        <label>Como você quer ser chamado?</label>
        <input type="text" id="modal-nome" placeholder="Seu nome" autofocus />
        <button class="modal-submit" id="modal-submit">Entrar</button>
      </div>
    </div>`;

  const input = document.getElementById("modal-nome");
  const submitBtn = document.getElementById("modal-submit");

  function atualizarBotao() {
    if (input.value.trim()) {
      submitBtn.classList.add("enabled");
    } else {
      submitBtn.classList.remove("enabled");
    }
  }

  function confirmar() {
    if (!input.value.trim()) return;
    usuario = input.value.trim();
    salvar("cinelista_usuario", usuario);
    fecharLoginModal();
    renderHeader();
    render(); // re-renderiza a tela atual para liberar avaliação/comentário
  }

  input.addEventListener("input", atualizarBotao);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") confirmar(); });
  submitBtn.addEventListener("click", confirmar);
  document.getElementById("modal-close").onclick = fecharLoginModal;
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") fecharLoginModal();
  });

  input.focus();
}

function fecharLoginModal() {
  document.getElementById("login-modal-root").innerHTML = "";
}

// ---------- Ações ----------
function toggleWatch(id) {
  if (watchlist.includes(id)) {
    watchlist = watchlist.filter((x) => x !== id);
  } else {
    watchlist.push(id);
  }
  salvar("cinelista_watchlist", watchlist);
  render();
}

function avaliar(id, nota) {
  if (!usuario) return abrirLoginModal();
  if (!avaliacoes[id]) avaliacoes[id] = {};
  avaliacoes[id][usuario] = nota;
  salvar("cinelista_avaliacoes", avaliacoes);
  renderDetalhe(porId(id));
}

function publicarComentario(id, texto) {
  if (!usuario) return abrirLoginModal();
  if (!texto.trim()) return;
  if (!comentarios[id]) comentarios[id] = [];
  comentarios[id].unshift({ autor: usuario, texto: texto.trim(), quando: "agora" });
  salvar("cinelista_comentarios", comentarios);
  renderDetalhe(porId(id));
}

// ---------- Views ----------
function render() {
  renderHeader();
  if (state.view === "home") return renderHome();
  if (state.view === "busca") return renderBusca();
  if (state.view === "detalhe") return renderDetalhe(porId(state.detalheId));
  if (state.view === "watchlist") return renderWatchlist();
}

function renderHome() {
  const destaque = porId(14); // O Poderoso Chefão
  const resultados = state.generoFiltro ? TITULOS.filter((t) => t.genero === state.generoFiltro) : TITULOS;

  app.innerHTML = `
    <div class="page">
      <div class="hero" data-open="${destaque.id}">
        ${posterHTML(destaque, "poster-hero")}
        <div>
          <div class="hero-eyebrow">EM DESTAQUE ESTA SEMANA</div>
          <h1 class="hero-title">${destaque.titulo}</h1>
          <p class="hero-sinopse">${destaque.sinopse}</p>
          <div class="hero-meta">
            ${notaHTML(destaque.nota)}
            <span>${destaque.genero} · ${destaque.ano} · ${destaque.tipo}</span>
          </div>
        </div>
      </div>

      <div class="chips">
        <button class="chip ${!state.generoFiltro ? "active" : ""}" data-genero="">Todos</button>
        ${GENEROS.map((g) => `<button class="chip ${state.generoFiltro === g ? "active" : ""}" data-genero="${g}">${g}</button>`).join("")}
      </div>

      <h2 class="section-title">${state.generoFiltro || "Populares agora"}</h2>
      ${gridHTML(resultados)}
    </div>`;

  bindGridEvents();
  document.querySelectorAll("[data-genero]").forEach((el) => {
    el.onclick = () => { state.generoFiltro = el.dataset.genero || null; renderHome(); };
  });
}

function renderBusca() {
  const resultados = TITULOS.filter((t) => t.titulo.toLowerCase().includes(state.query.toLowerCase()));
  app.innerHTML = `
    <div class="page">
      <h1 style="font-family:'Fraunces',serif;font-size:26px;margin-bottom:6px;">Resultados para "${state.query}"</h1>
      <p style="color:var(--text-muted);font-size:14px;margin-bottom:32px;">${resultados.length} título(s) encontrado(s)</p>
      ${resultados.length === 0 ? `<div style="color:var(--text-muted);">Nada encontrado. Tente outro termo.</div>` : gridHTML(resultados)}
    </div>`;
  bindGridEvents();
}

function renderWatchlist() {
  const itens = TITULOS.filter((t) => watchlist.includes(t.id));
  app.innerHTML = `
    <div class="page">
      <h1 style="font-family:'Fraunces',serif;font-size:32px;margin-bottom:8px;">Sua watchlist</h1>
      <p style="color:var(--text-muted);font-size:15px;margin-bottom:36px;">
        ${itens.length === 0 ? "Ainda não há nada por aqui." : `${itens.length} título(s) salvo(s).`}
      </p>
      ${itens.length === 0
        ? `<div class="empty-box">${ICONS.bookmark}<div style="margin-top:12px;">Toque no ícone de "+" em qualquer título para adicioná-lo aqui.</div></div>`
        : gridHTML(itens)}
    </div>`;
  bindGridEvents();
}

function renderDetalhe(item) {
  state.view = "detalhe";
  state.detalheId = item.id;

  const salvo = watchlist.includes(item.id);
  const relacionados = TITULOS.filter((t) => t.genero === item.genero && t.id !== item.id).slice(0, 4);

  const comentariosDoFilme = comentarios[item.id] || [];
  const avaliacoesDoFilme = avaliacoes[item.id] || {};
  const valoresAvaliacoes = Object.values(avaliacoesDoFilme);
  const media = valoresAvaliacoes.length ? valoresAvaliacoes.reduce((a, b) => a + b, 0) / valoresAvaliacoes.length : 0;
  const minhaNota = usuario ? (avaliacoesDoFilme[usuario] || 0) : 0;

  app.innerHTML = `
    <div class="page">
      <button class="back-link" id="btn-voltar">${ICONS.chevronLeft} Voltar</button>

      <div class="detail-grid">
        ${posterHTML(item, "poster-large")}
        <div>
          <div class="detail-tipo">${item.tipo} · ${item.ano}</div>
          <h1 class="detail-title">${item.titulo}</h1>
          <div class="detail-meta">
            ${notaHTML(item.nota)}
            <span class="genre-pill">${item.genero}</span>
          </div>
          <p class="detail-sinopse">${item.sinopse}</p>
          <p class="detail-elenco">Elenco: ${item.elenco}</p>
          <button class="btn-watch-large ${salvo ? "saved" : ""}" id="btn-watch-detalhe">
            ${salvo ? ICONS.check + " Na sua watchlist" : ICONS.plus + " Adicionar à watchlist"}
          </button>
        </div>
      </div>

      <div class="comunidade">
        <h2 class="section-title">Avaliação da comunidade</h2>
        <div class="avaliacao-row">
          <div>
            <div class="avaliacao-label">${valoresAvaliacoes.length > 0 ? `Média de ${valoresAvaliacoes.length} avaliação(ões)` : "Ainda sem avaliações de usuários"}</div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div class="stars">${[1,2,3,4,5].map((n) => ICONS.star(Math.round(media) >= n)).join("")}</div>
              ${valoresAvaliacoes.length > 0 ? `<span>${media.toFixed(1)}/5</span>` : ""}
            </div>
          </div>
          <div class="avaliacao-divider"></div>
          <div>
            <div class="avaliacao-label">${usuario ? "Sua avaliação" : "Faça login para avaliar"}</div>
            <div class="stars interactive" id="stars-usuario">
              ${[1,2,3,4,5].map((n) => `<span data-nota="${n}">${ICONS.starBig(minhaNota >= n)}</span>`).join("")}
            </div>
          </div>
        </div>

        <div class="comment-form">
          <input type="text" id="comment-input" placeholder="${usuario ? "Escreva um comentário..." : "Faça login para comentar"}" ${usuario ? "" : "disabled"} />
          <button id="comment-submit">${ICONS.send} Enviar</button>
        </div>

        <div class="comment-list">
          ${comentariosDoFilme.length === 0
            ? `<div class="empty-msg">${ICONS.messageCircle} Nenhum comentário ainda. Seja o primeiro.</div>`
            : comentariosDoFilme.map((c) => `
              <div class="comment-item">
                <div class="comment-head">
                  <div class="avatar" style="width:26px;height:26px;font-size:12px;">${c.autor.charAt(0).toUpperCase()}</div>
                  <span style="font-weight:500;">${c.autor}</span>
                  <span class="comment-time">${c.quando}</span>
                </div>
                <p class="comment-text">${c.texto}</p>
              </div>`).join("")}
        </div>
      </div>

      ${relacionados.length > 0 ? `
        <div style="margin-top:64px;">
          <h2 class="section-title">Se você gostou disso</h2>
          ${gridHTML(relacionados)}
        </div>` : ""}
    </div>`;

  document.getElementById("btn-voltar").onclick = () => { state.view = "home"; render(); };
  document.getElementById("btn-watch-detalhe").onclick = () => toggleWatch(item.id);

  document.querySelectorAll("#stars-usuario [data-nota]").forEach((el) => {
    el.onclick = () => avaliar(item.id, Number(el.dataset.nota));
  });

  const commentInput = document.getElementById("comment-input");
  const commentSubmit = document.getElementById("comment-submit");
  commentSubmit.onclick = () => { publicarComentario(item.id, commentInput.value); };
  commentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") publicarComentario(item.id, commentInput.value);
  });

  bindGridEvents();
}

// liga cliques de abrir detalhe / alternar watchlist em qualquer grid renderizado
function bindGridEvents() {
  document.querySelectorAll("[data-open]").forEach((el) => {
    el.addEventListener("click", (e) => {
      // evita abrir o detalhe quando o clique foi no botão de watchlist
      if (e.target.closest("[data-toggle]")) return;
      const id = Number(el.dataset.open);
      renderDetalhe(porId(id));
    });
  });
  document.querySelectorAll("[data-toggle]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWatch(Number(el.dataset.toggle));
    });
  });
}

// ---------- Inicialização ----------
render();
