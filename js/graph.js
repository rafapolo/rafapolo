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
var nBraViz = graph.newNode({
  label: "BraViz",
  id: "braviz",
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
var nSwissN = graph.newNode({
  label: "swiss network",
  id: "dependency-map",
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

// ── 2025 ────────────────────────────────────────────────────────────────────
var nViso = graph.newNode({
  label: "viso",
  id: "viso",
});
var nFincr = graph.newNode({
  label: "fincrime",
  id: "fincrime",
});
var nIBGE13 = graph.newNode({
  label: "IBGE13",
  id: "ibge13",
});
var nSumar = graph.newNode({
  label: "sumaria",
  id: "sumaria",
});
var nRAIS = graph.newNode({
  label: "RAIS",
  id: "rais",
});
var nRioI = graph.newNode({
  label: "Rio IBGE",
  id: "dataviz-hub",
});
var nFriba = graph.newNode({
  label: "Friba",
  id: "friba",
});
// ── 2020 ────────────────────────────────────────────────────────────────────
var nUQT = graph.newNode({
  label: "tocador",
  id: "tocador",
});

// ── 2019 ────────────────────────────────────────────────────────────────────
var nAres = graph.newNode({
  label: "Ares",
});
var nSubZKU = graph.newNode({
  label: "SubZKU",
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

// ── 2014 ────────────────────────────────────────────────────────────────────
var nSteg = graph.newNode({
  label: "Steganos",
  id: "steganos",
});

// ── 2013 ────────────────────────────────────────────────────────────────────
var nMostr = graph.newNode({
  label: "Mostre!me Cultura",
  id: "mostre-me-cultura",
});
var nAgua = graph.newNode({
  label: "Agenda Água",
  id: "agua-na-escola",
});
var nZanini = graph.newNode({
  label: "Studio Zanini",
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

// ── 2011 ────────────────────────────────────────────────────────────────────
var nGrafica = graph.newNode({
  label: "Gráfica Utópica",
  id: "grafica-utopica",
});

// ── 2010 ────────────────────────────────────────────────────────────────────
var nRazao = graph.newNode({
  label: "Razão e Ambiente",
  id: "razao-e-ambiente",
});

// ── 2009 ────────────────────────────────────────────────────────────────────
var nConsul = graph.newNode({
  label: "Consulta Natural",
  id: "consulta-natural",
});

// ── Edges ───────────────────────────────────────────────────────────────────
graph.newEdge(nBasel, catData);
graph.newEdge(nBasel, catTool);
graph.newEdge(nBraViz, catData);
graph.newEdge(nBraViz, catData);
graph.newEdge(nDatat, catData);
graph.newEdge(nDatat, catData);
graph.newEdge(nDatat, catTool);
graph.newEdge(nHelvet, catData);
graph.newEdge(nHelvet, catTool);
graph.newEdge(nSwissV, catData);
graph.newEdge(nSwissV, catData);
graph.newEdge(nSwissN, catData);
graph.newEdge(nSwissN, catData);
graph.newEdge(nTigrim, catData);
graph.newEdge(nTigrim, catData);
graph.newEdge(nMalaf, catData);
graph.newEdge(nBrasil, catData);
graph.newEdge(nPet, catData);
graph.newEdge(nRios, catData);
graph.newEdge(nTseBens, catData);
graph.newEdge(nVorcaros, catData);

graph.newEdge(nViso, catData);
graph.newEdge(nViso, catData);
graph.newEdge(nViso, catTool);
graph.newEdge(nFincr, catData);
graph.newEdge(nFincr, catData);
graph.newEdge(nIBGE13, catData);
graph.newEdge(nSumar, catTool);
graph.newEdge(nRAIS, catData);
graph.newEdge(nRAIS, catData);
graph.newEdge(nRioI, catData);
graph.newEdge(nRioI, catData);
graph.newEdge(nFriba, catData);
graph.newEdge(nFriba, catData);
graph.newEdge(nUQT, catDesign);

graph.newEdge(nAres, catData);
graph.newEdge(nAres, catTool);
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
graph.newEdge(nZanini, catDesign);
graph.newEdge(nZanini, catWork);

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
