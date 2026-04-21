graph = new Graph();

// ── Category nodes ──────────────────────────────────────────────────────────
var catData  = graph.newNode({label: '[DATA]'});
var catViz   = graph.newNode({label: '[DATAVIZ]'});
var catDesign= graph.newNode({label: '[DESIGN]'});
var catTool  = graph.newNode({label: '[TOOL]'});
var catWork  = graph.newNode({label: '[WORK]'});

// ── 2026 ────────────────────────────────────────────────────────────────────
var nBasel   = graph.newNode({label: 'baseldosdados',       site: 'https://github.com/rafapolo/baseldosdados'});
var nBraViz  = graph.newNode({label: 'BraViz',              site: 'https://github.com/rafapolo/BraViz'});
var nDatat   = graph.newNode({label: 'datative',            site: 'https://github.com/rafapolo/datative'});
var nHelvet  = graph.newNode({label: 'helvetiscan',         site: 'https://github.com/rafapolo/helvetiscan'});
var nSwissV  = graph.newNode({label: 'swissviz',            site: 'https://github.com/rafapolo/swissviz'});
var nSwissN  = graph.newNode({label: 'swiss network',       site: 'https://xn--2dk.xyz/dataviz/swiss/'});
var nTigrim  = graph.newNode({label: 'Pegadas Tigrinho',    site: 'https://tinyurl.com/pegadas-tigrim'});
var nMalaf   = graph.newNode({label: 'malafaia',            site: 'https://github.com/rafapolo/malafaia'});
var nPt26    = graph.newNode({label: 'pt-2026',             site: 'https://xn--2dk.xyz/dataviz/pt-2026/'});

// ── 2025 ────────────────────────────────────────────────────────────────────
var nViso    = graph.newNode({label: 'viso',                site: 'https://github.com/rafapolo/viso'});
var nFincr   = graph.newNode({label: 'fincrime',            site: 'https://github.com/rafapolo/fincrime'});
var nIBGE13  = graph.newNode({label: 'IBGE13',              site: 'https://github.com/rafapolo/IBGE13'});
var nPolis   = graph.newNode({label: 'polis',               site: 'https://github.com/rafapolo/polis'});
var nSumar   = graph.newNode({label: 'sumaria',             site: 'https://github.com/rafapolo/sumaria'});
var nRAIS    = graph.newNode({label: 'RAIS',                site: 'https://xn--2dk.xyz/dataviz/rais/'});
var nRioI    = graph.newNode({label: 'Rio IBGE',            site: 'https://xn--2dk.xyz/dataviz/rio/ibge'});
var nFriba   = graph.newNode({label: 'Friba',               site: 'https://xn--2dk.xyz/dataviz/friba/pop_3d'});
var nRelig   = graph.newNode({label: 'religiões',           site: 'https://github.com/rafapolo/religioes'});
var nMolin   = graph.newNode({label: 'MO LIN',              site: 'https://mo-lin.ch'});

// ── 2020 ────────────────────────────────────────────────────────────────────
var nUQT     = graph.newNode({label: 'uqt',                 site: 'https://github.com/rafapolo/uqt'});
var nCovid   = graph.newNode({label: 'COVID-19 Brasil',     site: 'https://github.com/rafapolo/covid19'});

// ── 2019 ────────────────────────────────────────────────────────────────────
var nAres    = graph.newNode({label: 'Ares',                site: 'https://github.com/rafapolo/ares'});
var nSubZKU  = graph.newNode({label: 'SubZKU',              site: 'https://extrapolo.com/projeto/subzku'});

// ── 2018 ────────────────────────────────────────────────────────────────────
var nTrib    = graph.newNode({label: 'Tribuna',             site: 'https://github.com/rafapolo/tribuna'});
var nRenda   = graph.newNode({label: 'Renda',               site: 'https://github.com/rafapolo/renda'});
var nConn    = graph.newNode({label: 'Connectas',           site: 'https://github.com/rafapolo/otherbrecht'});

// ── 2016 ────────────────────────────────────────────────────────────────────
var nETI     = graph.newNode({label: 'Exposing the Invisible', site: 'https://exposingtheinvisible.org/'});

// ── 2014 ────────────────────────────────────────────────────────────────────
var nAtlan   = graph.newNode({label: 'Av. Atlântica 1101',  site: 'http://extrapolo.com/projeto/apt-avenida-atlantica/web/'});
var nSteg    = graph.newNode({label: 'Steganos',            site: 'https://github.com/rafapolo/steganos'});

// ── 2013 ────────────────────────────────────────────────────────────────────
var nMostr   = graph.newNode({label: 'Mostre!me Cultura',   site: 'http://mostre.me/cultura'});
var nCopy    = graph.newNode({label: 'Copyfight Acervo',    site: 'http://mostre.me/acervo'});
var nAgua    = graph.newNode({label: 'Agenda Água',         site: 'https://github.com/rafapolo/aguanaescola'});
var nZanini  = graph.newNode({label: 'Studio Zanini',       site: 'https://web.archive.org/web/20180217031203/http://www.studiozanini.com.br/'});

// ── 2012 ────────────────────────────────────────────────────────────────────
var nWebDoc  = graph.newNode({label: 'WebDoc Graffiti',     site: 'https://web.archive.org/web/20180311091348/http://www.webdocgraffiti.com.br:80/'});
var nPensar  = graph.newNode({label: 'Pensar Público',      site: 'http://extrapolo.com/projeto/pensarpublico'});
var nEtaoin  = graph.newNode({label: 'Etaoin Shrdlu',       site: 'http://extrapolo.com/projeto/etaoin/'});

// ── 2011 ────────────────────────────────────────────────────────────────────
var nGrafica = graph.newNode({label: 'Gráfica Utópica',     site: 'http://extrapolo.com/projeto/graficautopica.net/'});
var nVictor  = graph.newNode({label: 'Victor Haim',         site: 'https://extrapolo.com/projeto/victorhaim.com.br'});
var nComuna  = graph.newNode({label: 'Comuna',              site: 'https://web.archive.org/web/20160323025927/http://comuna.cc/'});

// ── 2010 ────────────────────────────────────────────────────────────────────
var nRazao   = graph.newNode({label: 'Razão e Ambiente',    site: 'https://web.archive.org/web/20160401044158/http://razaoeambiente.com.br/'});
var nGraphs  = graph.newNode({label: 'Graphs',              site: 'http://extrapolo.com/labs/graphs'});

// ── 2009 ────────────────────────────────────────────────────────────────────
var nConsul  = graph.newNode({label: 'Consulta Natural',    site: 'https://github.com/rafapolo/consulta-natural/wiki'});

// ── Edges ───────────────────────────────────────────────────────────────────
graph.newEdge(nBasel,  catData);  graph.newEdge(nBasel,  catTool);
graph.newEdge(nBraViz, catViz);   graph.newEdge(nBraViz, catData);
graph.newEdge(nDatat,  catData);  graph.newEdge(nDatat,  catViz);   graph.newEdge(nDatat, catTool);
graph.newEdge(nHelvet, catData);  graph.newEdge(nHelvet, catTool);
graph.newEdge(nSwissV, catViz);   graph.newEdge(nSwissV, catData);
graph.newEdge(nSwissN, catViz);   graph.newEdge(nSwissN, catData);
graph.newEdge(nTigrim, catViz);   graph.newEdge(nTigrim, catData);
graph.newEdge(nMalaf,  catViz);
graph.newEdge(nPt26,   catViz);   graph.newEdge(nPt26,   catWork);

graph.newEdge(nViso,   catData);  graph.newEdge(nViso,   catViz);   graph.newEdge(nViso,  catTool);
graph.newEdge(nFincr,  catData);  graph.newEdge(nFincr,  catViz);
graph.newEdge(nIBGE13, catData);
graph.newEdge(nPolis,  catData);  graph.newEdge(nPolis,  catViz);
graph.newEdge(nSumar,  catTool);
graph.newEdge(nRAIS,   catViz);   graph.newEdge(nRAIS,   catData);
graph.newEdge(nRioI,   catViz);   graph.newEdge(nRioI,   catData);
graph.newEdge(nFriba,  catViz);   graph.newEdge(nFriba,  catData);
graph.newEdge(nRelig,  catViz);
graph.newEdge(nMolin,  catDesign);graph.newEdge(nMolin,  catWork);

graph.newEdge(nUQT,    catDesign);
graph.newEdge(nCovid,  catViz);   graph.newEdge(nCovid,  catData);  graph.newEdge(nCovid, catWork);

graph.newEdge(nAres,   catData);  graph.newEdge(nAres,   catTool);
graph.newEdge(nSubZKU, catDesign);graph.newEdge(nSubZKU, catWork);

graph.newEdge(nTrib,   catData);  graph.newEdge(nTrib,   catTool);
graph.newEdge(nRenda,  catTool);
graph.newEdge(nConn,   catData);  graph.newEdge(nConn,   catWork);

graph.newEdge(nETI,    catDesign);graph.newEdge(nETI,    catWork);  graph.newEdge(nETI, catData);

graph.newEdge(nAtlan,  catDesign);graph.newEdge(nAtlan,  catWork);
graph.newEdge(nSteg,   catTool);

graph.newEdge(nMostr,  catViz);
graph.newEdge(nCopy,   catData);
graph.newEdge(nAgua,   catWork);  graph.newEdge(nAgua,   catData);
graph.newEdge(nZanini, catDesign);graph.newEdge(nZanini, catWork);

graph.newEdge(nWebDoc, catDesign);graph.newEdge(nWebDoc, catWork);  graph.newEdge(nWebDoc, catViz);
graph.newEdge(nPensar, catDesign);graph.newEdge(nPensar, catWork);
graph.newEdge(nEtaoin, catDesign);graph.newEdge(nEtaoin, catWork);

graph.newEdge(nGrafica,catDesign);graph.newEdge(nGrafica,catWork);
graph.newEdge(nVictor, catDesign);graph.newEdge(nVictor, catWork);
graph.newEdge(nComuna, catDesign);graph.newEdge(nComuna, catWork);

graph.newEdge(nRazao,  catDesign);graph.newEdge(nRazao,  catWork);
graph.newEdge(nGraphs, catViz);

graph.newEdge(nConsul, catData);  graph.newEdge(nConsul, catTool);
