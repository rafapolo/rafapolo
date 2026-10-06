graph = new Graph();

var projects = [
  ["rodado", "baseldosdados"],
  ["brasilume", "brasilume"],
  ["datative", "datative"],
  ["helvetiscan", "helvetiscan"],
  ["swissviz", "swissviz"],
  ["pegadas-tigrinho", "Pegadas Tigrinho"],
  ["malafaia", "malafaia"],
  ["brasiliano", "brasiliano"],
  ["pet16704", "pet16704"],
  ["rios-do-brasil", "rios-do-brasil"],
  ["tse-bens", "TSE-bens"],
  ["vorcaros", "vorcaros"],
  ["tocador", "tocador"],
  ["atlas-makingoff", "Atlas MakingOff"],
  ["eleicoes-2026", "Eleições 2026"],
  ["pulso-da-imprensa", "Pulso da Imprensa"],
  ["templos-religiosos", "Templos"],
  ["viso", "viso"],
  ["fincrime", "fincrime"],
  ["rais", "RAIS"],
  ["friba", "Friba"],
  ["religioes", "religioes"],
  ["braswiss", "BraSwiss"],
  ["subzku", "SubZKU"],
  ["tribuna", "Tribuna"],
  ["renda", "Renda"],
  ["connectas", "Connectas"],
  ["exposing-the-invisible", "Exposing the Invisible"],
  ["holistic-security", "Holistic Security"],
  ["steganos", "Steganos"],
  ["mostre-me-cultura", "Mostre!me Cultura"],
  ["agua-na-escola", "Agenda Água"],
  ["webdoc-graffiti", "WebDoc Graffiti"],
  ["pensar-publico", "Pensar Público"],
  ["etaoin", "Etaoin Shrdlu"],
  ["grafica-utopica", "Gráfica Utópica"],
  ["victorhaim", "Victor Haim"],
  ["razao-e-ambiente", "Razão e Ambiente"],
  ["atlantica", "Av. Atlântica 1101"],
  ["consulta-natural", "Consulta Natural"],
  ["baixogavea", "BaixoGávea"],
  ["erthos", "Erthos"],
  ["verafiko", "VERAΞFIKO"],
  ["speculari", "speculari"],
  ["rastros", "rastros"],
  ["processing", "processing"],
  ["fratura", "fratura"],
  ["damnatio-memoriae", "Damnatio Memoriae"],
];

var categories = {};
document.querySelectorAll(".filter-btn:not([data-filter='all'])").forEach(function (btn) {
  var tag = btn.dataset.filter;
  categories[tag] = graph.newNode({ label: "[" + tag.toUpperCase() + "]" });
});

projects.forEach(function (p) {
  var node = graph.newNode({ id: p[0], label: p[1] });
  var card = document.querySelector('.card[data-id="' + p[0] + '"]');
  if (!card) return;
  card.dataset.tags.split(" ").forEach(function (tag) {
    if (categories[tag]) graph.newEdge(node, categories[tag]);
  });
});
