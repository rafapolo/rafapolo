graph = new Graph();

// ── Category nodes ──────────────────────────────────────────────────────────
var catData = graph.newNode({ label: "[DATA]" });
var catDesign = graph.newNode({ label: "[DESIGN]" });
var catTool = graph.newNode({ label: "[TOOL]" });
var catWork = graph.newNode({ label: "[WORK]" });

// ── 2026 ────────────────────────────────────────────────────────────────────
var nBasel = graph.newNode({
  label: "baseldosdados",
  id: "rodado",
});
var nBrasilume = graph.newNode({
  label: "brasilume",
  id: "brasilume",
});
var nDatat = graph.newNode({
  label: "datative",
  id: "datative",
});
var nHelvet = graph.newNode({
  label: "helvetiscan",
  id: "helvetiscan",
});
var nSwissV = graph.newNode({
  label: "swissviz",
  id: "swissviz",
});
var nTigrim = graph.newNode({
  label: "Pegadas Tigrinho",
  id: "pegadas-tigrinho",
});
var nMalaf = graph.newNode({
  label: "malafaia",
  id: "malafaia",
});
var nBrasil = graph.newNode({
  label: "brasiliano",
  id: "brasiliano",
});
var nPet = graph.newNode({
  label: "pet16704",
  id: "pet16704",
});
var nRios = graph.newNode({
  label: "rios-do-brasil",
  id: "rios-do-brasil",
});
var nTseBens = graph.newNode({
  label: "TSE-bens",
  id: "tse-bens",
});
var nVorcaros = graph.newNode({
  label: "vorcaros",
  id: "vorcaros",
});

var nUQT = graph.newNode({
  label: "tocador",
  id: "tocador",
});

var nAtlasMko = graph.newNode({
  label: "Atlas MakingOff",
  id: "atlas-makingoff",
});
var nEleicoes = graph.newNode({
  label: "Eleições 2026",
  id: "eleicoes-2026",
});
var nPulso = graph.newNode({
  label: "Pulso da Imprensa",
  id: "pulso-da-imprensa",
});
var nTemplos = graph.newNode({
  label: "Templos",
  id: "templos-religiosos",
});
// ── 2025 ────────────────────────────────────────────────────────────────────
var nViso = graph.newNode({
  label: "viso",
  id: "viso",
});
var nFincr = graph.newNode({
  label: "fincrime",
  id: "fincrime",
});
var nRAIS = graph.newNode({
  label: "RAIS",
  id: "rais",
});
var nFriba = graph.newNode({
  label: "Friba",
  id: "friba",
});

var nReligioes = graph.newNode({
  label: "religioes",
  id: "religioes",
});
var nBraSwiss = graph.newNode({
  label: "BraSwiss",
  id: "braswiss",
});
// ── 2019 ────────────────────────────────────────────────────────────────────
var nSubZKU = graph.newNode({
  label: "SubZKU",
  id: "subzku",
});

// ── 2018 ────────────────────────────────────────────────────────────────────
var nTrib = graph.newNode({
  label: "Tribuna",
  id: "tribuna",
});
var nRenda = graph.newNode({
  label: "Renda",
  id: "renda",
});
var nConn = graph.newNode({
  label: "Connectas",
  id: "connectas",
});

// ── 2016 ────────────────────────────────────────────────────────────────────
var nETI = graph.newNode({
  label: "Exposing the Invisible",
  id: "exposing-the-invisible",
});
var nHolistic = graph.newNode({
  label: "Holistic Security",
  id: "holistic-security",
});

// ── 2013 ────────────────────────────────────────────────────────────────────
var nSteg = graph.newNode({
  label: "Steganos",
  id: "steganos",
});
var nMostr = graph.newNode({
  label: "Mostre!me Cultura",
  id: "mostre-me-cultura",
});
var nAgua = graph.newNode({
  label: "Agenda Água",
  id: "agua-na-escola",
});

// ── 2012 ────────────────────────────────────────────────────────────────────
var nWebDoc = graph.newNode({
  label: "WebDoc Graffiti",
  id: "webdoc-graffiti",
});
var nPensar = graph.newNode({
  label: "Pensar Público",
  id: "pensar-publico",
});

var nEtaoin = graph.newNode({
  label: "Etaoin Shrdlu",
  id: "etaoin",
});
// ── 2011 ────────────────────────────────────────────────────────────────────
var nGrafica = graph.newNode({
  label: "Gráfica Utópica",
  id: "grafica-utopica",
});

var nVictor = graph.newNode({
  label: "Victor Haim",
  id: "victorhaim",
});
// ── 2010 ────────────────────────────────────────────────────────────────────
var nRazao = graph.newNode({
  label: "Razão e Ambiente",
  id: "razao-e-ambiente",
});

var nAtlantica = graph.newNode({
  label: "Av. Atlântica 1101",
  id: "atlantica",
});
// ── 2009 ────────────────────────────────────────────────────────────────────
var nConsul = graph.newNode({
  label: "Consulta Natural",
  id: "consulta-natural",
});

// ── Edges ───────────────────────────────────────────────────────────────────
graph.newEdge(nBasel, catData);
graph.newEdge(nBasel, catTool);
graph.newEdge(nBrasilume, catData);
graph.newEdge(nBrasilume, catData);
graph.newEdge(nDatat, catData);
graph.newEdge(nDatat, catData);
graph.newEdge(nDatat, catTool);
graph.newEdge(nHelvet, catData);
graph.newEdge(nHelvet, catTool);
graph.newEdge(nSwissV, catData);
graph.newEdge(nSwissV, catData);
graph.newEdge(nTigrim, catData);
graph.newEdge(nTigrim, catData);
graph.newEdge(nMalaf, catData);
graph.newEdge(nBrasil, catData);
graph.newEdge(nPet, catData);
graph.newEdge(nRios, catData);
graph.newEdge(nTseBens, catData);
graph.newEdge(nReligioes, catData);
graph.newEdge(nVorcaros, catData);

graph.newEdge(nViso, catData);
graph.newEdge(nViso, catData);
graph.newEdge(nViso, catTool);
graph.newEdge(nFincr, catData);
graph.newEdge(nFincr, catData);
graph.newEdge(nRAIS, catData);
graph.newEdge(nRAIS, catData);
graph.newEdge(nFriba, catData);
graph.newEdge(nFriba, catData);
graph.newEdge(nUQT, catDesign);


graph.newEdge(nSubZKU, catDesign);
graph.newEdge(nSubZKU, catWork);
graph.newEdge(nTrib, catData);
graph.newEdge(nTrib, catTool);
graph.newEdge(nRenda, catTool);
graph.newEdge(nConn, catData);
graph.newEdge(nConn, catWork);

graph.newEdge(nETI, catDesign);
graph.newEdge(nETI, catWork);
graph.newEdge(nETI, catData);

graph.newEdge(nHolistic, catDesign);
graph.newEdge(nHolistic, catWork);

graph.newEdge(nSteg, catTool);

graph.newEdge(nMostr, catData);
graph.newEdge(nAgua, catWork);
graph.newEdge(nAgua, catData);

graph.newEdge(nWebDoc, catDesign);
graph.newEdge(nWebDoc, catWork);
graph.newEdge(nWebDoc, catData);
graph.newEdge(nPensar, catDesign);
graph.newEdge(nPensar, catWork);

graph.newEdge(nGrafica, catDesign);
graph.newEdge(nGrafica, catWork);

graph.newEdge(nRazao, catDesign);
graph.newEdge(nRazao, catWork);

graph.newEdge(nConsul, catData);
graph.newEdge(nConsul, catTool);

// ── Added to match project list ─────────────────────────────────────────────
var n_erthos = graph.newNode({
  label: "Erthos",
  id: "erthos",
});
var n_verafiko = graph.newNode({
  label: "VERAΞFIKO",
  id: "verafiko",
});
var n_speculari = graph.newNode({
  label: "speculari",
  id: "speculari",
});
var n_rastros = graph.newNode({
  label: "rastros",
  id: "rastros",
});
var n_processing = graph.newNode({
  label: "processing",
  id: "processing",
});
var n_fratura = graph.newNode({
  label: "fratura",
  id: "fratura",
});
var n_damnatio = graph.newNode({
  label: "Damnatio Memoriae",
  id: "damnatio-memoriae",
});
graph.newEdge(n_erthos, catDesign);
graph.newEdge(n_verafiko, catTool);
graph.newEdge(n_speculari, catTool);
graph.newEdge(n_rastros, catTool);
graph.newEdge(n_processing, catTool);
graph.newEdge(n_fratura, catTool);
graph.newEdge(n_damnatio, catDesign);
graph.newEdge(nAtlasMko, catData);
graph.newEdge(nAtlasMko, catDesign);
graph.newEdge(nBraSwiss, catData);
graph.newEdge(nEtaoin, catDesign);
graph.newEdge(nEtaoin, catWork);
graph.newEdge(nVictor, catDesign);
graph.newEdge(nVictor, catWork);
graph.newEdge(nAtlantica, catDesign);
graph.newEdge(nAtlantica, catWork);
graph.newEdge(nEleicoes, catData);
graph.newEdge(nPulso, catData);
graph.newEdge(nPulso, catTool);
graph.newEdge(nTemplos, catData);
