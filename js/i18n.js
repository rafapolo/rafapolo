var TRANSLATIONS = {
  en: {
    "since": "Since 1985",
    "nav.about": "About",
    "nav.works": "Works",
    "nav.data": "Data",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.fullcv": "Full CV as PDF",

    bio: "Rafael Polo is a Software Developer &amp; Consultant working on interdisciplinary projects &amp; teams for more than two decades. From crawlers that turned governmental public data into visualizations for researchers &amp; journalists in Brazil, to building full web platforms &amp; tools with hacktivists in Berlin. From experimental user-interfaces made with artists in Rio de Janeiro, to teaching web design &amp; programming in self-organized Athenian schools. Solid across servers, databases &amp; frontend — always building for real cases &amp; real people.",

    "works.title": "SELECTED WEB WORKS",
    "works.pt2026":
      "Interactive electoral visualization analyzing Portuguese vote distribution ahead of the 2026 elections.",
    "works.molin":
      "Website system for MO LIN Chinese Art School in Basel — DRY Handlebars template engine reducing 39 HTML files to reusable components with consolidated CSS and data-driven navigation.",
    "works.covid19":
      "Real-time dashboard aggregating and visualizing Brazilian COVID-19 case data by state and city throughout the pandemic.",
    "works.connectas":
      "Investigative data platform mapping ownership networks connecting companies, campaign donors, relatives, and deputies using TSE electoral data — built for the Connectas journalism collective.",
    "works.subzku":
      "Interactive Audio Guide: a multi layered sonic response to five years of making at ZK/U",
    "works.eti":
      "Through a series of short films, video interviews, guides and resources, <i>Tactical Tech Collective</i> looks at different techniques, tools and methods along with the individual practices of those working at the new frontiers of investigation, empowering people to uncover hidden information, expose corruption and bring the truth to light.",
    "works.atlantica":
      "Rich interactive interface which background, pictures and videos are defined based on Rio de Janeiro time zone to promote the flat at Avenida Atlântica 1101 in Copacabana.",
    "works.agua":
      "Platform developed to the Municipal Secretary of Environment of Rio de Janeiro to follow water metrics through participation of municipal school's students across all State.",
    "works.zanini":
      "From-scratch responsible Content Management System developed to the Product Designer Zanini de Zanine, prestigious Design awarded in Brazil and abroad for creating furnitures.",
    "works.webdoc":
      "Award-winning collaborative Webdocumentary Platform integrating Google Maps API and Popcorn.js about São Paulo street-art Graffiti.",
    "works.pensar":
      "Website, 3-floor exhibition &amp; Interactive Systems to inaugurate the Centro Carioca de Design at Rio de Janeiro.",
    "works.etaoin":
      "FTP-Based CMS which generates all typographic portfolio of Pedro Moraes artworks.",
    "works.grafica":
      "Interactive Website to present the namesake collective exhibition at Belas-Artes Museum of Rio de Janeiro.",
    "works.victor":
      "Innovative and inspiring Content Management System platform to present and manipulate photographer Victor Haim blog &amp; portfolio.",
    "works.comuna":
      "Column-based CMS developed to the cowork and multifunction space Comuna at Rio de Janeiro.",
    "works.razao":
      "Website &amp; Interactive System for Modern Art Museum of São Paulo (MAM/SP) Razão e Ambiente exhibition.",

    "data.title": "DATA TOOLS &amp; INVESTIGATIONS",
    "data.asievolve":
      "Autonomous agentic framework that closes the loop between knowledge, hypothesis, experiment, and analysis — enabling self-directed research across scientific and computational domains.",
    "data.baseldosdados":
      "Complete mirror of Base dos Dados' 533 public tables (~675 GB Parquet/zstd) on Hetzner, with an interactive DuckDB shell and a natural-language-to-SQL ask interface.",
    "data.braviz":
      "Serverless, GPU-accelerated browser visualization of 8 million Brazilian establishments from IBGE's CNEFE dataset — no backend, no tile server.",
    "data.datative":
      "Investigative analysis platform for exploring connections between companies, partners, and public records — interactive force-directed graphs with SQL-like CNPJ queries over remote Parquet data.",
    "data.fincrime":
      "<i>Redes Obscuras</i> — interactive visualization of opaque corporate networks flagged for suspicious activity, built for financial crime investigation and money-laundering detection.",
    "data.viso":
      "Interactive network visualization and live SQL explorer for Brazilian federal parliamentary expense data — shareable URLs, offline support, multi-layer caching.",
    "data.polis":
      "Digital humanities project mapping the ownership networks connecting Brazilian companies, deputies, and public expenditure — business-political entanglement as a graph.",
    "data.helvetiscan":
      "Full scanner and mapper of 2.5M+ Swiss .ch domains: HTTP, DNS, TLS, port, WHOIS, MX, CVE — sector classification, sovereignty scoring, and risk benchmarking with interactive force-graph.",
    "data.swissviz":
      "Interactive map of Swiss companies from open data: CSV pipeline → Mapbox geocoding → gzip → GPU-rendered browser tiles with CartoDB basemap.",
    "data.tigrim":
      "Corporate network investigation of the Tigrinho gaming empire — mapping companies, partners, and ownership chains of Brazil's most controversial online gambling operator.",
    "data.swissnet":
      "Cosmograph WebGL force-graph of all Swiss .ch domain-nameserver relationships — 25,000+ nodes exploring connectivity, concentration, and digital sovereignty patterns.",
    "data.rais":
      "Interactive visualization of Brazil's 500 most-connected companies by legal entity type — bubble chart and treemap exploring corporate concentration across private, public, and judicial sectors.",
    "data.rioibge":
      "MapLibre-powered illuminated point map of Rio de Janeiro's economic establishments — visualizing density and spatial distribution of business activity across the city.",
    "data.friba":
      "Multi-dimensional analysis of Nova Friburgo: 3D population density, residential heatmaps, garment industry distribution, and business registration patterns during COVID-19.",
    "data.ibge13":
      "Longitudinal analysis of 150 years of Brazilian census data (1872–2022) — housing, population, and social characteristics across 13 census periods.",

    "projects.title": "SELECTED SELF-INITIATED PROJECTS",
    "proj.malafaia":
      "Hexbin density map charting the geographic footprint of the Malafaia religious empire across Brazil — location data rendered in-browser with GPU acceleration.",
    "proj.religioes":
      "IBGE census religion distribution mapped by municipality — interactive Kepler.gl visualization of faith demographics across Brazil.",
    "proj.uqt":
      "Digital archive of 100 years of Brazilian Popular Music: 2,303 albums, 28,742 tracks, 816 artists — virtual-scrolling grid, lazy-loaded covers, MP3 streaming via S3 proxy.",
    "proj.sumaria":
      "Fetches YouTube transcripts and runs them through a local LLM to generate structured summaries with key themes and action points — fully offline.",
    "proj.ares":
      "Tool developed for investigative journalists to collect and analyze hundreds of WhatsApp groups data during Brazilian elections. (scrapping the unscrappable)",
    "proj.tribuna":
      "This software project corrects, integrates, structures and optimizes all Brazilian Electoral Supreme Court's Electoral Data Repository into a single query-able relational database to facilitate investigation by journalists, hackers and activists.",
    "proj.renda":
      "Framework for cryptocurrency experiments: conceptualizes and operates Wallets, Markets, Ticks, Orders, Brokers, Arbitrage and Strategies in Crystal language.",
    "proj.steganos":
      "Creative conceptual-algorithm to encode &amp; decode any digital file into an image, and vice-versa. Rewritten in Rust in 2022: 45–126× faster with zstd compression.",
    "proj.mostremecultura":
      "Experimental Culture &amp; Communication system, exposing with many filters all Brazilian Ministry of Culture financed projects of the last 10 years.",
    "proj.copyfight":
      "Data-mined dataset of thousands of rare and curated movies and documentary torrents since the invention of the Cinema.",
    "proj.graphs":
      "A serie of dynamic scripts which generates different data-visualization use-cases, from twitter follower-following circle to wikipedia semantic networks.",
    "proj.consulta":
      "Implementation of the 'Natural Language Query System for RDF Repositories' from Nokia Research Center Cambridge, 2007, applied to a Google Talk chat agent. Ask him.",

    "cv.education": "EDUCATION",
    "cv.languages": "LANGUAGES",
    "cv.experience": "PROFESSIONAL EXPERIENCE",
    "cv.fellowships": "FELLOWSHIPS AND AWARDS",
    "cv.exhibitions": "EXHIBITIONS",
    "cv.certifications": "CERTIFICATIONS",
    "cv.skills": "TECH SKILLS",

    "cv.languages.text":
      "Portuguese (native), English (full professional), Spanish (full professional), German (elementary) and Greek (elementary).",

    "cv.degree.postgrad": "Postgraduate in Data Science for Finance",
    "cv.degree.master": "Master in Information Systems",
    "cv.degree.master.area":
      "Research Area: Knowledge Representation and Reasoning",
    "cv.degree.extension": "Extension in Digital Culture",
    "cv.degree.bachelor": "Bachelor in Computer Science",
    "cv.degree.java": "Java Software Development",
    "cv.degree.linux": "Linux System Engineer",

    "cv.role.swisscom":
      "DevOps Engineer — modernization of mission-critical internal platforms &amp; CI/CD pipelines for high-availability Telecom infrastructure",
    "cv.role.edge":
      "Senior Technical Lead — built a PayTool cutting processing time by 98%; improved CI/CD pipeline from 14 to 4 minutes; managed 3 developers and a UX designer",
    "cv.role.extrapolo":
      "Software Engineer &amp; Consultant — civic tech &amp; data journalism, culture &amp; arts, open source. 40+ projects across data investigations, web platforms, interactive installations and CMS systems",
    "cv.role.codecreate":
      "Web Programming Teacher — web programming to refugee and Greek youth through the Code + Create initiative (HTML, CSS, jQuery)",
    "cv.role.ttc":
      "Full-Stack Web Architect and Developer under Exposing the Invisible team",
    "cv.role.td": "Developer for innovation + marketing consultants team",
    "cv.role.meio":
      "Co-founder of Meio Cowork space with Architects and Designers",
    "cv.role.cortex":
      "Developer in the Competitive Intelligence and Data Mining R&amp;D team",
    "cv.role.logical": "SysAdmin and Java developer of its applications",
    "cv.role.inpp":
      'Main developer of the Company "Planning" Software in Delphi',
    "cv.role.meuservidor":
      "Co-founder of a Web Hosting Server based on Linux &amp; PHP",

    "cv.fellow.webdoc": "Collaborative Cartographies Initiatives",
    "cv.fellow.webdoc.by": "By Brazilian Federal Ministry of Culture",
    "cv.fellow.damnatio": "Gallery &amp; Book Publication",
    "cv.fellow.damnatio.by":
      "By Memefest: International Festival of Social Responsive Communication &amp; Art",
    "cv.fellow.capes.by": "By Brazilian Federal Ministry of Education",

    "cv.exhib.connecting.desc":
      "Connecting Cities Network wants to develop an awareness on the changes which are hardly visible to the eyes and are underlying our nowadays cities.",
    "cv.exhib.pensar.desc": "Exhibition on dynamic and real-time city mapping",
    "cv.exhib.venus.desc": 'Presentation of the "Variation" artwork',
    "cv.exhib.abotoados.desc":
      "3-week art-and-politic residency during 29º São Paulo Bienal of Art",

    "cv.cert.nfadp": "Swiss Federal Act on Data Protection (nFADP)",
    "cv.cert.genai.nlp":
      "Gen AI Foundational Models for NLP &amp; Language Understanding",
    "cv.cert.genai.arch":
      "Generative AI and LLMs: Architecture and Data Preparation",
    "cv.cert.aiagents": "Fundamentals of AI Agents Using RAG and LangChain",

    "cv.skills.text":
      "API Design &amp; REST Architecture</br>\n    Full-Stack Development: Python · Ruby on Rails · TypeScript · React</br>\n    Data Engineering, ETL, Relational Databases &amp; SQL</br>\n    DevOps: Docker · CI/CD Pipelines · AWS · Linux · SSH · Git</br>\n    AI/LLM Integrations &amp; AI Agents (RAG, LangChain)</br>\n    Data Crawling, Scraping &amp; Mining</br>\n    System Architecture: MVC, OOP, UML Modeling</br>\n    Web Design: HTML, CSS, JavaScript &amp; APIs",
  },

  pt: {
    "since": "Desde 1985",
    "nav.about": "Sobre",
    "nav.works": "Trabalhos",
    "nav.data": "Dados",
    "nav.projects": "Projetos",
    "nav.cv": "Currículo",
    "nav.fullcv": "Currículo em PDF",

    bio: "Rafael Polo é Desenvolvedor &amp; Consultor de Software trabalhando em projetos e equipes interdisciplinares há mais de duas décadas. De crawlers que transformaram dados públicos governamentais em visualizações para pesquisadores &amp; jornalistas no Brasil, a construir plataformas e ferramentas web completas com hacktivistas em Berlim. De interfaces experimentais criadas com artistas no Rio de Janeiro, ao ensino de web design &amp; programação em escolas autônomas atenienses. Sólido em servidores, bancos de dados &amp; frontend — sempre construindo para casos reais &amp; pessoas reais.",

    "works.title": "TRABALHOS WEB SELECIONADOS",
    "works.pt2026":
      "Visualização eleitoral interativa analisando a distribuição de votos portugueses nas eleições de 2026.",
    "works.molin":
      "Sistema de site para a Escola de Arte Chinesa MO LIN em Basel — motor de templates Handlebars DRY que reduz 39 arquivos HTML a componentes reutilizáveis com CSS consolidado e navegação orientada a dados.",
    "works.covid19":
      "Dashboard em tempo real agregando e visualizando dados de casos de COVID-19 no Brasil por estado e cidade durante toda a pandemia.",
    "works.connectas":
      "Plataforma de dados investigativos mapeando redes de propriedade que conectam empresas, doadores de campanha, parentes e deputados usando dados eleitorais do TSE — desenvolvida para o coletivo jornalístico Connectas.",
    "works.subzku":
      "Guia de Áudio Interativo: uma resposta sonora em múltiplas camadas a cinco anos de criação no ZK/U",
    "works.eti":
      "Através de uma série de curtas-metragens, entrevistas em vídeo, guias e recursos, o <i>Tactical Tech Collective</i> examina diferentes técnicas, ferramentas e métodos, juntamente com as práticas individuais daqueles que trabalham nas novas fronteiras da investigação, capacitando pessoas a descobrir informações ocultas, expor a corrupção e trazer a verdade à tona.",
    "works.atlantica":
      "Interface interativa rica cujo plano de fundo, imagens e vídeos são definidos com base no fuso horário do Rio de Janeiro para promover o apartamento na Avenida Atlântica 1101 em Copacabana.",
    "works.agua":
      "Plataforma desenvolvida para a Secretaria Municipal de Meio Ambiente do Rio de Janeiro para acompanhar métricas de água através da participação de alunos de escolas municipais em todo o Estado.",
    "works.zanini":
      "Sistema de Gerenciamento de Conteúdo responsivo desenvolvido do zero para o Designer de Produto Zanini de Zanine, prestígio do Design premiado no Brasil e no exterior por criar móveis.",
    "works.webdoc":
      "Plataforma de Webdocumentário colaborativa premiada, integrando a API do Google Maps e Popcorn.js sobre a arte de rua Graffiti de São Paulo.",
    "works.pensar":
      "Website, exposição de 3 andares &amp; Sistemas Interativos para inaugurar o Centro Carioca de Design no Rio de Janeiro.",
    "works.etaoin":
      "CMS baseado em FTP que gera todo o portfólio tipográfico das obras de Pedro Moraes.",
    "works.grafica":
      "Website interativa para apresentar a exposição coletiva homônima no Museu de Belas-Artes do Rio de Janeiro.",
    "works.victor":
      "Plataforma inovadora e inspiradora de Sistema de Gerenciamento de Conteúdo para apresentar e manipular o blog e portfólio do fotógrafo Victor Haim.",
    "works.comuna":
      "CMS baseado em colunas desenvolvido para o espaço de cowork e multifunções Comuna no Rio de Janeiro.",
    "works.razao":
      "Website &amp; Sistema Interativo para a exposição Razão e Ambiente no Museu de Arte Moderna de São Paulo (MAM/SP).",

    "data.title": "FERRAMENTAS DE DADOS &amp; INVESTIGAÇÕES",
    "data.asievolve":
      "Framework agêntico autônomo que fecha o ciclo entre conhecimento, hipótese, experimento e análise — habilitando pesquisa autodirigida em domínios científicos e computacionais.",
    "data.baseldosdados":
      "Espelho completo das 533 tabelas públicas da Base dos Dados (~675 GB Parquet/zstd) na Hetzner, com um shell DuckDB interativo e uma interface de linguagem natural para SQL.",
    "data.braviz":
      "Visualização sem backend, acelerada por GPU, de 8 milhões de estabelecimentos brasileiros do CNEFE do IBGE — sem servidor de tiles.",
    "data.datative":
      "Plataforma de análise investigativa para explorar conexões entre empresas, sócios e registros públicos — grafos de força interativos com consultas CNPJ sobre dados Parquet remotos.",
    "data.fincrime":
      "<i>Redes Obscuras</i> — visualização interativa de redes corporativas opacas sinalizadas por atividades suspeitas, desenvolvida para investigação de crimes financeiros e lavagem de dinheiro.",
    "data.viso":
      "Visualização de rede interativa e explorador SQL ao vivo para dados de despesas parlamentares federais brasileiras — URLs compartilháveis, suporte offline, cache multicamadas.",
    "data.polis":
      "Projeto de humanidades digitais mapeando as redes de propriedade que conectam empresas brasileiras, deputados e gastos públicos — entrelaçamento político-empresarial como grafo.",
    "data.helvetiscan":
      "Scanner e mapeador completo de 2,5 milhões de domínios .ch suíços: HTTP, DNS, TLS, porta, WHOIS, MX, CVE — classificação setorial, pontuação de soberania e benchmarking de risco com grafo de força interativo.",
    "data.swissviz":
      "Mapa interativo de empresas suíças a partir de dados abertos: pipeline CSV → geocodificação Mapbox → gzip → tiles renderizados por GPU no navegador com mapa-base CartoDB.",
    "data.tigrim":
      "Investigação de rede corporativa do Império Tigrinho — mapeando empresas, sócios e cadeias de propriedade do mais controverso operador de jogos online do Brasil.",
    "data.swissnet":
      "Grafo de força WebGL com Cosmograph de todas as relações domínio-nameserver .ch suíços — 25.000+ nós explorando padrões de conectividade, concentração e soberania digital.",
    "data.rais":
      "Visualização interativa das 500 empresas brasileiras com mais conexões por tipo jurídico — gráfico de bolhas e treemap explorando a concentração corporativa nos setores privado, público e judicial.",
    "data.rioibge":
      "Mapa de pontos iluminados com MapLibre dos estabelecimentos econômicos do Rio de Janeiro — visualizando densidade e distribuição espacial da atividade empresarial na cidade.",
    "data.friba":
      "Análise multidimensional de Nova Friburgo: densidade populacional 3D, mapas de calor residenciais, distribuição da indústria do vestuário e padrões de registro de empresas durante a COVID-19.",
    "data.ibge13":
      "Análise longitudinal de 150 anos de dados censitários brasileiros (1872–2022) — habitação, população e características sociais ao longo de 13 períodos censitários.",

    "projects.title": "PROJETOS PRÓPRIOS SELECIONADOS",
    "proj.malafaia":
      "Mapa de densidade hexbin do footprint geográfico do Império Malafaia no Brasil — dados de localização renderizados no navegador com aceleração por GPU.",
    "proj.religioes":
      "Distribuição da religião pelo censo do IBGE mapeada por município — visualização interativa Kepler.gl da demografia religiosa em todo o Brasil.",
    "proj.uqt":
      "Arquivo digital de 100 anos de Música Popular Brasileira: 2.303 álbuns, 28.742 faixas, 816 artistas — grade com rolagem virtual, capas carregadas preguiçosamente, streaming de MP3 via proxy S3.",
    "proj.sumaria":
      "Busca transcrições do YouTube e as processa por um LLM local para gerar resumos estruturados com temas-chave e pontos de ação — totalmente offline.",
    "proj.ares":
      "Ferramenta desenvolvida para jornalistas investigativos coletar e analisar dados de centenas de grupos de WhatsApp durante as eleições brasileiras. (raspando o inraspável)",
    "proj.tribuna":
      "Este projeto de software corrige, integra, estrutura e otimiza todo o Repositório de Dados Eleitorais do Tribunal Superior Eleitoral Brasileiro em um único banco de dados relacional consultável para facilitar a investigação por jornalistas, hackers e ativistas.",
    "proj.renda":
      "Framework para experimentos com criptomoedas: conceitualiza e opera Carteiras, Mercados, Ticks, Ordens, Corretoras, Arbitragem e Estratégias na linguagem Crystal.",
    "proj.steganos":
      "Algoritmo conceitual-criativo para codificar &amp; decodificar qualquer arquivo digital em uma imagem, e vice-versa. Reescrito em Rust em 2022: 45–126× mais rápido com compressão zstd.",
    "proj.mostremecultura":
      "Sistema experimental de Cultura &amp; Comunicação, expondo com muitos filtros todos os projetos financiados pelo Ministério da Cultura Brasileiro nos últimos 10 anos.",
    "proj.copyfight":
      "Dataset obtido por mineração de dados com milhares de filmes raros e curados e torrents de documentários desde a invenção do Cinema.",
    "proj.graphs":
      "Uma série de scripts dinâmicos que geram diferentes casos de uso de visualização de dados, desde círculos de seguidores no Twitter até redes semânticas da Wikipedia.",
    "proj.consulta":
      "Implementação do 'Sistema de Consulta em Linguagem Natural para Repositórios RDF' do Nokia Research Center Cambridge, 2007, aplicado a um agente de chat do Google Talk. Pergunte a ele.",

    "cv.education": "EDUCAÇÃO",
    "cv.languages": "IDIOMAS",
    "cv.experience": "EXPERIÊNCIA PROFISSIONAL",
    "cv.fellowships": "BOLSAS E PRÊMIOS",
    "cv.exhibitions": "EXPOSIÇÕES",
    "cv.certifications": "CERTIFICAÇÕES",
    "cv.skills": "HABILIDADES TÉCNICAS",

    "cv.languages.text":
      "Português (nativo), inglês (proficiência plena), espanhol (proficiência plena), alemão (elementar) e grego (elementar).",

    "cv.degree.postgrad": "Pós-graduação em Ciência de Dados para Finanças",
    "cv.degree.master": "Mestrado em Sistemas de Informação",
    "cv.degree.master.area":
      "Área de Pesquisa: Representação e Raciocínio do Conhecimento",
    "cv.degree.extension": "Extensão em Cultura Digital",
    "cv.degree.bachelor": "Bacharelado em Ciência da Computação",
    "cv.degree.java": "Desenvolvimento de Software Java",
    "cv.degree.linux": "Engenheiro de Sistemas Linux",

    "cv.role.swisscom":
      "Engenheiro DevOps — modernização de plataformas internas críticas &amp; pipelines de CI/CD para infraestrutura de telecomunicações de alta disponibilidade",
    "cv.role.edge":
      "Senior Technical Lead — construiu uma PayTool reduzindo o tempo de processamento em 98%; melhorou CI/CD de 14 para 4 minutos; gerenciou 3 desenvolvedores e uma designer UX",
    "cv.role.extrapolo":
      "Engenheiro de Software &amp; Consultor — civic tech &amp; jornalismo de dados, cultura &amp; artes, código aberto. 40+ projetos em investigações de dados, plataformas web, instalações interativas e sistemas CMS",
    "cv.role.codecreate":
      "Professor de Programação Web — ensinou programação web a refugiados e jovens gregos através da iniciativa Code + Create (HTML, CSS, jQuery)",
    "cv.role.ttc":
      "Arquiteto e Desenvolvedor Web Full-Stack na equipe Exposing the Invisible",
    "cv.role.td":
      "Desenvolvedor para equipe de consultores de inovação e marketing",
    "cv.role.meio":
      "Co-fundador do espaço de Cowork Meio com Arquitetos e Designers",
    "cv.role.cortex":
      "Desenvolvedor na equipe de P&amp;D de Inteligência Competitiva e Mineração de Dados",
    "cv.role.logical": "SysAdmin e desenvolvedor Java de suas aplicações",
    "cv.role.inpp":
      'Desenvolvedor principal do Software "Planning" da empresa em Delphi',
    "cv.role.meuservidor":
      "Co-fundador de um Servidor de Hospedagem Web baseado em Linux &amp; PHP",

    "cv.fellow.webdoc": "Iniciativas de Cartografias Colaborativas",
    "cv.fellow.webdoc.by": "Ministério Federal da Cultura do Brasil",
    "cv.fellow.damnatio": "Galeria &amp; Publicação de Livro",
    "cv.fellow.damnatio.by":
      "Por Memefest: Festival Internacional de Comunicação &amp; Arte Social Responsiva",
    "cv.fellow.capes.by": "Ministério Federal da Educação do Brasil",

    "cv.exhib.connecting.desc":
      "A Rede Connecting Cities quer desenvolver uma consciência sobre as mudanças que são quase invisíveis aos olhos e que estão subjacentes às nossas cidades contemporâneas.",
    "cv.exhib.pensar.desc":
      "Exposição sobre mapeamento dinâmico e em tempo real da cidade",
    "cv.exhib.venus.desc": 'Apresentação da obra de arte "Variation"',
    "cv.exhib.abotoados.desc":
      "Residência de 3 semanas de arte e política durante a 29ª Bienal de Arte de São Paulo",

    "cv.cert.nfadp": "Lei Federal Suíça sobre Proteção de Dados (nFADP)",
    "cv.cert.genai.nlp":
      "Modelos Fundamentais de IA Generativa para NLP &amp; Compreensão de Linguagem",
    "cv.cert.genai.arch":
      "IA Generativa e LLMs: Arquitetura e Preparação de Dados",
    "cv.cert.aiagents": "Fundamentos de Agentes de IA com RAG e LangChain",

    "cv.skills.text":
      "Design de APIs &amp; Arquitetura REST</br>\n    Desenvolvimento Full-Stack: Python · Ruby on Rails · TypeScript · React</br>\n    Engenharia de Dados, ETL, Bancos de Dados Relacionais &amp; SQL</br>\n    DevOps: Docker · Pipelines de CI/CD · AWS · Linux · SSH · Git</br>\n    Integrações de IA/LLM &amp; Agentes de IA (RAG, LangChain)</br>\n    Crawling, Scraping &amp; Mineração de Dados</br>\n    Arquitetura de Sistemas: MVC, OOP, Modelagem UML</br>\n    Web Design: HTML, CSS, JavaScript &amp; APIs",
  },
};

function applyLang(lang) {
  var t = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  $("[data-i18n]").each(function () {
    var key = $(this).attr("data-i18n");
    if (t[key] !== undefined) {
      $(this).html(t[key]);
    }
  });
  $(".lang-btn").removeClass("active");
  $('.lang-btn[data-target="' + lang + '"]').addClass("active");
}

$(document).ready(function () {
  var lang = localStorage.getItem("lang") || "en";
  applyLang(lang);

  $(".lang-btn").on("click", function () {
    var selected = $(this).attr("data-target");
    localStorage.setItem("lang", selected);
    applyLang(selected);
  });
});
