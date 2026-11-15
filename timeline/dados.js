// Timeline: pessoas, projetos e instituições ligados ao trabalho de Rafael Polo.
// Fonte de cada fato em content/partners.md. Formato: N(id, rótulo, tipo, extra) e L(a, b, papel).
// Tipos: eu · projeto · pessoa · formacao · trabalho · coletivo · governo · cultura · fundacao
(function (g) {
  const nos = [], ligacoes = [];
  const N = (id, rotulo, tipo, extra = {}) => nos.push({ id, rotulo, tipo, ...extra });
  const L = (a, b, papel = '') => ligacoes.push({ a, b, papel });

  N('polo', 'Rafael Polo', 'eu', { nota: 'Software, data and visualization engineer. Rio · Berlin · Athens · Lisbon · Basel.' });

  // ── projetos ──
  N('pensar', 'Pensar Público', 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: 'Exhibition of dynamic mappings of Praça Tiradentes, with two interactive installations; it opened the Centro Carioca de Design.', url: 'https://rafapolo.github.io/pensar-publico/' });
  N('razao', 'Razão e Ambiente', 'projeto', { ano: 2011, cidade: 'São Paulo', nota: 'Website and multitouch interface for the exhibition at MAM-SP; Rafael built the site and the floor-plan navigation over Google Maps.', url: 'https://rafapolo.github.io/RazaoeAmbiente/' });
  N('webdoc', 'WebDoc Graffiti', 'projeto', { ano: 2012, cidade: 'São Paulo', nota: 'Interactive web documentary on São Paulo graffiti, awarded by Brazil’s Ministry of Culture.', url: 'https://rafapolo.github.io/webdocgraffiti/' });
  N('traces', 'Traces / Rastros', 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: 'Software that captures images through movement, made for Pensar Público.', url: 'https://github.com/rafapolo/rastros' });
  N('faq', 'FAQ TV', 'projeto', { ano: 2011, nota: 'Website for the digital TV channel FAQ: system by Rafael, design by Miguel Nóbrega.' });
  N('parallel', 'Parallel Versions', 'projeto', { ano: 2010, cidade: 'Amsterdam', nota: 'Tool for comparing analogous video sequences side by side.' });
  N('zanini', 'Studio Zanini', 'projeto', { ano: 2013, nota: 'CMS built from scratch for product designer Zanini de Zanine.' });
  N('etaoin', 'Etaoin Shrdlu', 'projeto', { ano: 2012, nota: 'FTP-driven CMS that generates Pedro Moraes’s type portfolio.', url: 'https://rafapolo.github.io/etaoin-shrdlu/' });
  N('victorhaim', 'Victor Haim', 'projeto', { ano: 2011, nota: 'Blog and portfolio of photographer Victor Haim.', url: 'https://web.archive.org/web/20130501204517/http://victorhaim.com.br/' });
  N('subzku', 'SubZKU', 'projeto', { ano: 2019, cidade: 'Berlin', nota: 'Interactive audio guide: five years of ZK/U in six sound sets.', url: 'https://rafapolo.github.io/subzku/' });
  N('exst', 'EXST / SoundSystem', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Websites for the SoundSystem project by Franz Manata and Saulo Laudares (first commit in February 2011).' });
  N('connectas', 'Connectas / Grupo Bruto', 'projeto', { ano: 2018, nota: 'Platform mapping ownership networks between companies, campaign donors and congressmembers.', url: 'https://www.connectas.org/especiales/odebrecht/' });
  N('tribuna', 'Tribuna', 'projeto', { ano: 2018, nota: 'Brazil’s entire electoral court (TSE) repository in a relational database for journalists.', url: 'https://github.com/rafapolo/tribuna' });
  N('datative', 'datative', 'projeto', { ano: 2026, nota: 'Company and taxpayer ID (CNPJ/CPF) networks across federal public databases.', url: 'https://rafapolo.github.io/datative/' });
  N('eti', 'Exposing the Invisible', 'projeto', { ano: 2016, cidade: 'Berlin', nota: 'Rafael’s team at Tactical Tech: investigation resources and tools; Rafael built 12 tools and sites, Little Spoon among them.', url: 'https://exposingtheinvisible.org/' });
  N('holistic', 'Holistic Security', 'projeto', { ano: 2016, cidade: 'Berlin', nota: 'Tactical Tech’s digital security manual.', url: 'https://holistic-security.tacticaltech.org/' });
  N('myshadow', 'Me and My Shadow', 'projeto', { ano: 2015, cidade: 'Berlin', nota: 'Tactical Tech platform about digital traces.' });
  N('sic', 'Security in Context', 'projeto', { ano: 2015, cidade: 'Berlin', nota: 'Tactical Tech Rails platform.' });
  N('littlespoon', 'Little Spoon', 'projeto', { ano: 2015, cidade: 'Berlin', nota: 'Data pipeline built for the Exposing the Invisible team at Tactical Tech.' });
  N('stalker', 'Stalker', 'projeto', { ano: 2015, cidade: 'Berlin', nota: 'Tactical Tech internal tool.' });
  N('deepgraphics', 'Deep Graphics', 'projeto', { ano: 2015, cidade: 'Berlin', nota: 'Tactical Tech dataviz lab.' });
  N('agua', 'Agenda Água na Escola', 'projeto', { ano: 2013, cidade: 'Rio de Janeiro', nota: 'Platform where public-school students record the water quality of rivers.', url: 'https://rafapolo.github.io/aguanaescola/' });
  N('grafica', 'Gráfica Utópica', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Interactive website for the collective’s exhibition at MNBA.', url: 'https://rafapolo.github.io/GraficaUtopica/' });
  N('comuna', 'Comuna', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Column-based CMS for the Comuna coworking space.' });
  N('damnatio', 'Damnatio Memoriae', 'projeto', { ano: 2011, nota: 'Software art that scratches out faces in local photos.', url: 'https://www.memefest.org/friendly-competition/gallery/680/' });
  N('fratura', 'fratura / WikiBot', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Wikipedia crawler projected on the ceiling of an exhibition.', url: 'https://rafapolo.github.io/fratura/' });
  N('abotoados', 'Abotoados pela Manga', 'projeto', { ano: 2010, cidade: 'São Paulo', nota: 'Three-week art and politics residency during the 29th Biennial.' });
  N('variation', 'Vênus-Terra / Variation', 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: 'Presentation of the work "Variation".' });
  N('ccities', 'Connecting Cities Lab', 'projeto', { ano: 2015, cidade: 'Berlin', nota: 'Prototyping Lab on the invisible changes of cities.' });
  N('moedax', 'Moedax', 'projeto', { ano: 2021, anoPos: 2021.5, cidade: 'Lisbon', nota: 'Web3 payments: smart contracts and a Web2/Web3 bridge with CBDC.' });
  N('moedacasa', 'Moeda.Casa', 'projeto', { ano: 2020, cidade: 'Lisbon', nota: 'PIX ↔ crypto payments by QR code; it gave rise to Kripto Solutions, with a ZOMG grant (Zcash).' });
  N('verafiko', 'VERAΞFIKO', 'projeto', { ano: 2022, nota: 'Celo/Huobi hackathon: stablecoin bridge between PIX and crypto (solo project).', url: 'https://github.com/rafapolo/celohuobihack' });
  N('colmeia', 'Colmeia', 'projeto', { ano: 2026, nota: 'Local organizing for the 2026 elections: each census tract is a cell.' });
  N('codecreate', 'Code + Create', 'projeto', { ano: 2018, cidade: 'Athens', nota: 'HTML, CSS and jQuery classes for young Greeks and refugees.' });
  N('zeitbank', 'Zeitbank / ZeitLotto', 'projeto', { ano: 2014, cidade: 'Berlin', nota: 'Time bank and skills lottery at the ZK/U Gütermarkt: each participant trades what they know how to do. Shown at Gütermarkt #2, 28 September 2014.', url: 'https://www.zku-berlin.org/de/timeline/guetermarkt-2/' });
  N('tcc', 'TCC Rails', 'projeto', { ano: 2009, cidade: 'Rio de Janeiro', nota: '«Agile development of Web 2.0 systems with Rails». Bachelor’s thesis in Computer Science, defended in November 2009.' });
  // demais cards do index.html
  N("eleicoes2026", "Elections 2026", 'projeto', { ano: 2026, nota: "Polls by geolocated polling station, in both rounds, Lula × Flávio, with party identity.", url: "https://xn--2dk.xyz/dataviz/eleicoes/?eleicao=presidente-2026" });
  N("cantography", "Cantography", 'projeto', { ano: 2026, nota: "795 thousand Swiss companies placed on their buildings, since 1883. Started as swissviz in April 2026.", url: "https://cantography.ch/" });
  N("erthos", "Erthos", 'projeto', { ano: 2026, nota: "Decoding the cipher of the \"Soneto Alfanumérico\" (1974), Brazilian computer poetry.", url: "https://rafapolo.github.io/erthos?lang=en" });
  N("rodado", "Rodado", 'projeto', { ano: 2026, nota: "1,050 official Brazilian tables queryable by AI agents via MCP.", url: "https://rodado.xyz/en" });
  N("brasilume", "brasilume", 'projeto', { ano: 2026, nota: "21 million Brazilian companies located address by address.", url: "https://rafapolo.github.io/brasilume/" });
  N("helvetiscan", "helvetiscan", 'projeto', { ano: 2026, nota: "Scan of 2.5 million .ch domains and their vulnerabilities.", url: "https://github.com/rafapolo/helvetiscan" });
  N("malafaia", "malafaia", 'projeto', { ano: 2026, nota: "Up-to-date map of a religious empire, for journalists.", url: "https://xn--2dk.xyz/malafaia/" });
  N("brasiliano", "brasiliano", 'projeto', { ano: 2026, nota: "The Brasiliana Fotográfica collection, 13 thousand items, in 3D.", url: "https://xn--2dk.xyz/brasiliana/" });
  N("pet16704", "pet16704", 'projeto', { ano: 2026, nota: "3,437 Supreme Court (STF) documents on the Banco Master case.", url: "https://rodado.xyz/plataformas/pet16704/" });
  N("rios", "rios-do-brasil", 'projeto', { ano: 2026, nota: "462 thousand Brazilian river segments colored by flow trend.", url: "https://rodado.xyz/plataformas/rios-do-brasil/" });
  N("tsebens", "TSE-bens", 'projeto', { ano: 2026, nota: "Growth of congressmembers’ declared assets against their official salary.", url: "https://rodado.xyz/plataformas/patrimonio/" });
  N("vorcaros", "vorcaros", 'projeto', { ano: 2026, nota: "Ownership graph of 8,088 connected companies.", url: "https://rafapolo.github.io/vorcaros/" });
  N("tocador", "Tocador", 'projeto', { ano: 2026, nota: "Alternative to Spotify with more than 7 thousand Brazilian artists.", url: "https://tocador.cc/" });
  N("atlasmakingoff", "Atlas MakingOff", 'projeto', { ano: 2026, nota: "33 thousand rare films on a zoomable cinema wall with magnet links.", url: "https://rafapolo.github.io/atlas-makingoff/" });
  N("pulso", "Pulso da Imprensa", 'projeto', { ano: 2026, nota: "Life cycle of 4,205 press companies in Brasília since 2000.", url: "https://rodado.xyz/plataformas/pulso-da-imprensa-em-brasilia/" });
  N("templos", "Temples", 'projeto', { ano: 2026, nota: "785 thousand places of worship in Brazil, colored by denomination.", url: "https://xn--2dk.xyz/dataviz/religioes/igrejas/" });
  N("tigrinho", "Pegadas Tigrinho", 'projeto', { ano: 2025, nota: "Corporate network behind the Tigrinho betting scam.", url: "https://tinyurl.com/pegadas-tigrim" });
  N("viso", "VISO", 'projeto', { ano: 2025, nota: "Interactive Visualization of Obscure Systems: federal congressmembers’ expenses.", url: "https://rafapolo.github.io/viso/" });
  N("fincrime", "fincrime", 'projeto', { ano: 2025, nota: "Corporate networks cited in money laundering cases.", url: "https://rafapolo.github.io/fincrime/" });
  N("rais", "RAIS", 'projeto', { ano: 2025, nota: "40 years of formal jobs in Brazil, explored in the browser.", url: "https://rafapolo.github.io/rais/" });
  N("friba", "Friba", 'projeto', { ano: 2025, nota: "Population of Nova Friburgo in 3D.", url: "https://xn--2dk.xyz/dataviz/friba/pop_3d" });
  N("religioes", "religioes", 'projeto', { ano: 2025, nota: "Religious change by municipality across censuses.", url: "https://xn--2dk.xyz/dataviz/religioes/" });
  N("braswiss", "BraSwiss", 'projeto', { ano: 2025, nota: "Network of Swiss companies based in Brazil.", url: "https://tinyurl.com/swiss-brazilian-network" });
  N("speculari", "speculari", 'projeto', { ano: 2019, cidade: 'Athens', nota: "Visual analysis of crypto arbitrage across exchanges.", url: "https://github.com/rafapolo/speculari" });
  N("renda", "Renda", 'projeto', { ano: 2018, cidade: 'Athens', nota: "Framework for crypto-economic experiments, in Crystal.", url: "http://github.com/rafapolo/renda" });
  N("steganos", "Steganos", 'projeto', { ano: 2017, anoPos: 2017.5, cidade: 'Athens', nota: "Turns any digital file into an image (rewritten in Rust).", url: "https://github.com/rafapolo/steganos" });
  N("processing", "processing", 'projeto', { ano: 2012, nota: "Creative coding and computer vision sketches.", url: "https://github.com/rafapolo/processing" });
  N("atlantica", "Av. Atlântica 1101", 'projeto', { ano: 2010, nota: "Day-and-night showcase of a duplex in Copacabana.", url: "https://rafapolo.github.io/apt-avenida-atlantica/" });
  N("mostre", "Mostre!me Cultura", 'projeto', { ano: 2009, nota: "All of the Ministry of Culture’s data in visualizations.", url: "https://github.com/rafapolo/mostre" });
  N("consulta", "Consulta Natural", 'projeto', { ano: 2009, nota: "Natural-language conversational agent over SPARQL and Google Talk.", url: "https://github.com/rafapolo/consulta-natural" });
  N("baixogavea", "BaixoGávea", 'projeto', { ano: 2009, nota: "Community portal of discographies and torrent links.", url: "https://web.archive.org/web/20110202000436/http://baixogavea.com/" });
  N("chao", "Chão", 'projeto', { ano: 2026, nota: "Brazil’s countryside municipality by municipality: crops and livestock from 1974 to 2025, land, money, climate and who lives off it.", url: "https://rafapolo.github.io/chao/" });
  N("geoglifos", "Amazon Geoglyphs", 'projeto', { ano: 2026, nota: "Open map of pre-Columbian earthworks in the southwestern Amazon, with data from Nature 2026 and Science 2023.", url: "https://xn--2dk.xyz/dataviz/geoglifos-amazonia/" });
  N("ibge13", "IBGE13", 'projeto', { ano: 2025, nota: "Brazil’s 13 censuses (1872–2022) and six decades of housing data.", url: "https://rafapolo.github.io/IBGE13/" });
  N("areyousyrious", "AreYouSyrious archive", 'projeto', { ano: 2022, nota: "Offline archive of AreYouSyrious, a daily digest on refugees and migrants in Europe (2016–2025): posts, 16 thousand images and an interactive timeline.", url: "https://rafapolo.github.io/AreYouSyrious/" });
  N("makenochoice", "make-no-choice", 'projeto', { ano: 2017, cidade: 'Athens', nota: "Composes a movie from the scenes in which a given quote is spoken: subtitles, torrents and ffmpeg cuts.", url: "https://github.com/rafapolo/make-no-choice" });
  N("zeitmarkt", "zeitmarkt", 'projeto', { ano: 2014, cidade: 'Berlin', nota: "Social platform for the other side of the coins: the timebank platform behind Zeitbank, by Alex Head, Rafael Polo and Jolanda Todt.", url: "https://github.com/rafapolo/zeitmarkt" });
  N("makingoff", "MakingOff", 'projeto', { ano: 2014, nota: "System to refine and monitor the sharing of the MakingOff collection: 13 thousand rare films, torrents optimized into magnet links.", url: "https://github.com/rafapolo/makingoff" });
  N("pologp", "PoloGraphPlan", 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: "Java Swing planner implementing the Graphplan algorithm: it builds the planning graph and extracts the steps from the initial to the goal state.", url: "https://github.com/rafapolo/PoloGraphPlan" });
  N("grafos2010", "Graphs 2010", 'projeto', { ano: 2010, nota: "WikiGraph, TwitterGraph and TorrentsPeersGraph: the words of a wiki page, who follows whom, and which countries seed a torrent, each drawn as a graph.", url: "https://github.com/rafapolo/WikiGraph" });
  N("chatrsa", "Chat-RSA", 'projeto', { ano: 2008, cidade: 'Rio de Janeiro', nota: "Chat box with automatic RSA encryption and decryption of messages.", url: "https://code.google.com/archive/p/chat-rsa/" });
  // projetos do Meio sem Rafael
  N('noz', 'Revista Noz', 'projeto', { meio: true, nota: 'A Meio project (without Rafael).' });
  N('temporaria', 'Editora Temporária', 'projeto', { ano: 2013, meio: true, nota: 'Temporary publishing structure for books about the city (without Rafael).' });
  N('performance', 'Festival Performance Arte Brasil', 'projeto', { meio: true, nota: 'Visual identity and catalogue (without Rafael).' });

  // ── pessoas ──
  const P = (id, nome, nota) => N(id, nome, 'pessoa', { nota });
  P('miguel', 'Miguel Nóbrega', 'Designer, partner at Meio (nobrega.info).');
  P('vitor', 'Vitor Garcez', 'Designer, partner at Meio (vitorgarcez.com).');
  P('clara', 'Clara Meliande', 'Designer, partner at Meio.');
  P('felipe', 'Felipe Nogueira', 'Partner at Meio (aparelho.tv).');
  P('alice', 'Alice Dalgalarrondo', 'Published the Pensar Público video.');
  P('andre', 'André Menezes', 'Art director and interface designer.');
  P('lauro', 'Lauro Cavalcanti', 'Curator.');
  P('mcristina', 'Maria Cristina Cabral', 'Curatorial assistant.');
  P('anaban', 'Ana Ban', 'Translator.');
  P('giovanni', 'Giovanni Francischelli', 'Director.');
  P('frota', 'Daniel Frota', 'Interaction and type designer.');
  P('cartaxo', 'Henrique Cartaxo', 'Video editor.');
  P('livia', 'Lívia Perez de Paula', 'Photographer.');
  P('crepker', 'Felipe Crepker Vieira', 'Photographer.');
  P('ovalles', 'Fabio Fontes Ovalles', 'Illustrator.');
  P('nina', 'Nina Paim', 'Designer (ninapaim.com).');
  P('zanine', 'Zanini de Zanine', 'Product designer (furniture).');
  P('pedromoraes', 'Pedro Moraes', 'Typographer (ETAOIN SHRDLU) and partner at Comuna.');
  P('haim', 'Victor Haim', 'Photographer.');
  P('alexhead', 'Alex Head', 'Sound artist.');
  P('manata', 'Franz Manata', 'Artist (SoundSystem).');
  P('laudares', 'Saulo Laudares', 'Artist (SoundSystem).');
  P('belisario', 'Adriano Belisario', 'Data journalist.');
  P('niko', 'Niko', 'Developer, Tactical Tech.');
  P('allan', 'allan', 'Developer, Tactical Tech.');
  P('christo', 'Christo', 'Tactical Tech.');
  P('kaustubh', 'Kaustubh Srikanth', 'Tactical Tech.');
  P('claire', 'Claire Tolan', 'Tactical Tech.');
  P('mikepierce', 'Mike Pierce', 'Developer.');
  P('laurent', 'Laurent Dellere', 'Tactical Tech.');
  P('crito', 'crito', 'Developer (cryptodrunks.net).');
  P('lucasteixeira', 'Lucas Teixeira', 'Coding Rights.');
  P('marina', 'Marina Polo', 'PhD in Communication Sciences (University of Minho); researcher on culture, ideology and the internet.');
  P('marise', 'Marise', 'Contributor to Mostre!me Cultura.');
  P('igor', 'Igor', 'Applied communication, UX.');
  P('helio', 'Helio', 'Colleague at EDGE Empower.');
  P('abner', 'Abner', 'Colleague at EDGE Empower.');
  P('erthosalbino', 'Erthos Albino de Souza', 'Poet and engineer; author of the Soneto Alfanumérico (Código magazine, 1974).');
  P('jolandatodt', 'Jolanda Todt', 'Artist and graphic designer in Berlin (jolandatodt.de).');
  P('liabergaue', 'Lia Bergaue', 'Member of the Schuldkröten Syndikat in Berlin.');
  P('sabrina', 'Sabrina Arêas', 'Co-author of the bachelor’s thesis.');
  P('savio', 'Sávio Figueiredo', 'Professor, thesis advisor.');
  P('carolina', 'Carolina Xavier', 'Professor, thesis committee.');
  P('vinicius', 'Vinicius da Fonseca Vieira', 'Professor, thesis committee.');
  P('mariani', 'Daniel Mariani', 'Colmeia.');
  P('cinco', 'Cinco Euzebio', 'Colmeia.');
  P('thiago', 'Thiago Moreira', 'Colmeia.');
  P('victorwu', 'Victor Wu', 'Colmeia.');

  // ── instituições ──
  const I = (id, nome, tipo, nota, extra = {}) => N(id, nome, tipo, { nota, ...extra });
  // formação
  I('bennett', 'Centro Universitário Metodista Bennett', 'formacao', 'Rio de Janeiro. Bachelor’s in Computer Science: completed 12/12/2009, diploma issued 01/10/2010. Thesis defended in November 2009.');
  I('mcury', 'M.Cury Computação', 'formacao', 'Rio de Janeiro.');
  I('feso', 'Fundação Educacional Serra dos Órgãos', 'formacao', 'Teresópolis.');
  I('ufrj', 'UFRJ · NCE', 'formacao', 'Federal University of Rio de Janeiro, Núcleo de Computação Eletrônica.', { periodo: [2006, 2006.5] });
  I('ufrjeco', 'UFRJ · ECO', 'formacao', 'Federal University of Rio de Janeiro, Escola de Comunicação.');
  I('unirio', 'PPGI / UNIRIO', 'formacao', 'Federal University of the State of Rio de Janeiro.');
  I('capes', 'CAPES / MEC', 'governo', 'Ministry of Education.');
  I('rietveld', 'Gerrit Rietveld Academie', 'formacao', 'Amsterdam.');
  I('novaims', 'NOVA IMS', 'formacao', 'Lisbon.');
  // trabalho
  I('swisscom', 'Swisscom', 'trabalho', 'Zurich.', { periodo: [2024.17, 2025.17] });
  I('edge', 'EDGE Empower', 'trabalho', 'Zug.', { periodo: [2023.08, 2024.08] });
  I('td', 'Trommsdorff + Drüner', 'trabalho', 'Berlin.', { periodo: [2013.92, 2014.08] });
  I('cortex', 'Cortex Intelligence', 'trabalho', 'Rio de Janeiro.');
  I('meuservidor', 'MeuServidor', 'trabalho', 'Linux/PHP hosting, co-founded.');
  I('inpp', 'INPP', 'trabalho', 'National Institute of Public Research, Teresópolis.');
  I('tecnopop', 'Tecnopop', 'trabalho', 'Visual design studio.');
  I('doctela', 'Doctela', 'trabalho', 'Production company.');
  // ONGs, coletivos, jornalismo
  I('kripto', 'Kripto Solutions', 'coletivo', 'Crypto R&D team formed in Lisbon around Moeda.Casa.');
  I('minho', 'University of Minho', 'formacao', 'Braga, Portugal.');
  I('rodadoxyz', 'rodado.xyz', 'trabalho', 'Label for the portfolio’s 2025–2026 data projects.', { url: 'https://rodado.xyz/' });
  I('meio', 'Meio', 'coletivo', 'Design studio on Praça Tiradentes, Rio.');
  I('ttc', 'Tactical Tech', 'coletivo', 'Tactical Technology Collective, Berlin.');
  I('codingrights', 'Coding Rights', 'coletivo', 'Digital rights NGO.');
  I('connectasorg', 'Connectas', 'coletivo', 'Investigative journalism network.');
  I('intercept', 'The Intercept Brasil', 'coletivo', 'Investigative journalism; published the Connectas investigation.');
  I('memefest', 'Memefest', 'coletivo', 'International communication and art festival.');
  I('graficacol', 'Gráfica Utópica collective', 'coletivo', 'Rio multimedia art collective.');
  I('fraturacol', 'Fratura collective', 'coletivo', '');
  I('comunacow', 'Comuna', 'coletivo', 'Coworking and multi-use space, Rio.');
  I('gfoss', 'GFOSS.eu + Khora', 'coletivo', 'Open Technologies Alliance, Athens.');
  // governo
  I('minc', 'Ministry of Culture', 'governo', '');
  I('inea', 'INEA', 'governo', 'Rio de Janeiro State Environmental Institute.');
  I('sea', 'SEA-RJ', 'governo', 'Rio de Janeiro State Department of the Environment.');
  I('piabanha', 'Comitê Piabanha', 'governo', 'River basin committee.');
  I('paraiba', 'Comitê Médio Paraíba do Sul', 'governo', 'River basin committee.');
  I('irph', 'Instituto Rio Patrimônio da Humanidade', 'governo', 'Rio City Hall.');
  // cultura
  I('mamsp', 'MAM-SP', 'cultura', 'Museum of Modern Art of São Paulo.');
  I('ccd', 'Centro Carioca de Design', 'cultura', 'Praça Tiradentes, Rio.');
  I('studiox', 'Studio-X Rio', 'cultura', '');
  I('mnba', 'MNBA', 'cultura', 'National Museum of Fine Arts, Rio.');
  I('tac', 'Galeria TAC', 'cultura', 'Rio de Janeiro.');
  I('bienal', '29th São Paulo Biennial', 'cultura', '');
  I('hkw', 'Transmediale · HKW', 'cultura', 'Haus der Kulturen der Welt, Berlin.');
  I('ccnet', 'Connecting Cities Network', 'cultura', '');
  I('ccc', 'Chaos Computer Camp', 'cultura', '2015.');
  I('zku', 'ZK/U', 'cultura', 'Zentrum für Kunst und Urbanistik, Berlin.');
  I('schuldkroeten', 'Schuldkröten Syndikat', 'coletivo', 'Working group of artists, activists, designers and urban researchers on debt in contemporary society, born at the ZK/U Gütermarkt; it ran the Zeitbank research. Jolanda Todt’s CV lists her Wunschkabinett alongside it at ZK/U.', { url: 'https://web.archive.org/web/20161016160155/http://alexhead.com/selected-works/zeitbank-zku/', periodo: [2014.5, 2015] });
  // fundações
  I('tetrapak', 'Tetra Pak', 'fundacao', 'Sponsorship via the Rouanet Law.');
  I('celo', 'Celo Foundation', 'fundacao', '');
  I('zcash', 'Zcash Foundation', 'fundacao', '');

  // ── ligações: Rafael ──
  const minhas = ['pensar', 'razao', 'webdoc', 'traces', 'faq', 'parallel', 'zanini', 'etaoin', 'victorhaim', 'subzku', 'exst',
    'connectas', 'tribuna', 'datative', 'eti', 'holistic', 'myshadow', 'sic', 'littlespoon', 'stalker', 'deepgraphics',
    'agua', 'grafica', 'comuna', 'damnatio', 'fratura', 'abotoados', 'variation', 'ccities', 'moedax', 'moedacasa', 'verafiko', 'zeitbank', 'tcc', 'colmeia', 'codecreate'];
  for (const p of minhas) L('polo', p, 'author / developer');
  for (const p of ['eleicoes2026', 'cantography', 'erthos', 'rodado', 'brasilume', 'helvetiscan', 'malafaia', 'brasiliano', 'pet16704', 'rios', 'tsebens', 'vorcaros', 'tocador', 'atlasmakingoff', 'pulso', 'templos', 'tigrinho', 'viso', 'fincrime', 'rais', 'friba', 'religioes', 'braswiss', 'speculari', 'renda', 'steganos', 'processing', 'atlantica', 'mostre', 'consulta', 'baixogavea', 'chao', 'geoglifos', 'ibge13', 'areyousyrious', 'makenochoice', 'zeitmarkt', 'makingoff', 'pologp', 'grafos2010', 'chatrsa']) L('polo', p, 'author / developer');
  L('polo', 'bennett', 'bachelor’s in Computer Science, 2006–2009');
  L('polo', 'mcury', 'Linux System Engineer, 2004');
  L('polo', 'feso', 'started a BSc in Computer Science, 2003–2005 · free software workshop');
  L('polo', 'ufrj', 'Java course at NCE, first half of 2006'); L('polo', 'ufrjeco', 'Digital Culture extension course, 2010');
  L('polo', 'unirio', 'master’s in Information Systems, 2010–2012');
  L('polo', 'capes', 'graduate scholarship, 2010');
  L('polo', 'novaims', 'postgraduate degree in Data Science for Finance, 2021');
  L('polo', 'swisscom', 'DevOps Engineer, Mar 2024 – Mar 2025');
  L('polo', 'edge', 'Senior Technical Lead, Feb 2023 – Feb 2024');
  L('polo', 'td', 'developer in Berlin, Dec 2013 – Jan 2014');
  L('polo', 'cortex', 'developer, 2007–2008');
  L('polo', 'meuservidor', 'co-founder, 2002–2003');
  L('polo', 'inpp', 'lead developer, 2004');
  L('polo', 'meio', 'co-founder, 2010–2012');
  L('polo', 'kripto', 'co-founder, 2020–2021');
  L('polo', 'ttc', 'full-stack architect on the Exposing the Invisible team, 2014–2016');
  L('polo', 'gfoss', 'teacher, 2017–2018');
  L('polo', 'ccc', 'presentation');

  // ── Meio ──
  for (const p of ['miguel', 'vitor', 'clara', 'felipe']) L(p, 'meio', 'partner');
  for (const p of ['pensar', 'razao', 'traces', 'faq', 'noz', 'temporaria', 'performance']) L('meio', p, 'studio project');
  for (const p of ['miguel', 'vitor', 'clara']) L(p, 'pensar', 'team');
  L('alice', 'pensar', 'video'); L('pensar', 'ccd', 'exhibition'); L('pensar', 'studiox', 'exhibition');
  L('traces', 'pensar', 'made for the exhibition');
  L('miguel', 'razao', 'concept and design'); L('vitor', 'razao', 'concept and design · research');
  L('andre', 'razao', 'touchscreen interface'); L('lauro', 'razao', 'curation and exhibition design');
  L('mcristina', 'razao', 'curatorial assistant'); L('anaban', 'razao', 'translation');
  L('tecnopop', 'razao', 'visual design'); L('razao', 'mamsp', 'exhibition'); L('minc', 'razao', 'Rouanet Law');
  L('tetrapak', 'razao', 'sponsorship');
  L('miguel', 'traces', 'team'); L('vitor', 'traces', 'team');
  L('miguel', 'faq', 'design');
  L('miguel', 'noz'); L('vitor', 'noz'); L('miguel', 'temporaria'); L('clara', 'temporaria');
  L('clara', 'performance'); L('irph', 'temporaria', 'Pró-Design grant');

  // ── WebDoc Graffiti ──
  L('doctela', 'webdoc', 'production'); L('giovanni', 'webdoc', 'direction'); L('andre', 'webdoc', 'art direction');
  L('frota', 'webdoc', 'interaction design · type design'); L('miguel', 'webdoc', 'interaction design');
  L('cartaxo', 'webdoc', 'video editing'); L('livia', 'webdoc', 'photography'); L('crepker', 'webdoc', 'photography');
  L('ovalles', 'webdoc', 'illustration'); L('minc', 'webdoc', 'Collaborative Cartographies award');

  // ── clientes e parceiros ──
  L('nina', 'parallel', 'concept'); L('parallel', 'rietveld', 'academic project');
  L('zanine', 'zanini', 'client'); L('pedromoraes', 'etaoin', 'client'); L('pedromoraes', 'comunacow', 'partner'); L('pedromoraes', 'comuna', 'client'); L('haim', 'victorhaim', 'client');
  L('alexhead', 'subzku', 'artist'); L('subzku', 'zku', 'commission');
  L('manata', 'exst', 'artist'); L('laudares', 'exst', 'artist');
  L('connectas', 'connectasorg', 'partnership'); L('connectas', 'intercept', 'work for The Intercept, with Adriano Belisario'); L('belisario', 'intercept', 'work partner'); L('belisario', 'connectas', 'code (otherbrecht)');
  L('belisario', 'tribuna', 'code'); L('belisario', 'datative', 'code'); L('belisario', 'colmeia', 'code');
  
  L('agua', 'inea', 'client'); L('agua', 'sea', 'client'); L('agua', 'piabanha', 'partnership'); L('agua', 'paraiba', 'partnership');
  L('grafica', 'graficacol', 'client'); L('grafica', 'mnba', 'exhibition');
  L('comuna', 'comunacow', 'client');
  L('damnatio', 'memefest', 'gallery and book'); L('fratura', 'fraturacol', 'collective');
  L('abotoados', 'bienal', 'residency'); L('variation', 'tac', 'exhibition');
  L('ccities', 'hkw', 'Prototyping Lab'); L('ccities', 'ccnet', 'network');
  L('moedax', 'celo', 'grant'); L('moedax', 'zcash', 'grant');
  for (const p of ['mariani', 'cinco', 'thiago', 'victorwu']) L(p, 'colmeia', 'code');
  L('codecreate', 'gfoss', 'program');

  L('consulta', 'unirio', 'master’s project');
  L('pologp', 'unirio', 'academic project · Planning Systems course');
  L('makingoff', 'atlasmakingoff', '12 years later'); L('chatrsa', 'steganos', 'earlier encryption project'); L('chatrsa', 'bennett', 'academic project');
  L('areyousyrious', 'codecreate', 'same refugee crisis');
  for (const p of ['viso', 'fincrime', 'vorcaros']) L('grafos2010', p, 'origin of the network graphs');
  L('erthosalbino', 'erthos', 'author of the decoded poem'); L('mostre', 'minc', 'public data'); L('marina', 'mostre', 'team'); L('marise', 'mostre', 'team');

  // ── rodado.xyz: projetos recentes do índice ──
  for (const p of ['eleicoes2026', 'cantography', 'erthos', 'rodado', 'brasilume', 'datative', 'helvetiscan', 'malafaia', 'brasiliano',
    'pet16704', 'rios', 'tsebens', 'vorcaros', 'tocador', 'atlasmakingoff', 'pulso', 'templos', 'tigrinho', 'viso', 'fincrime',
    'rais', 'friba', 'religioes', 'braswiss', 'chao', 'geoglifos']) L('rodadoxyz', p, 'portfolio project');

  L('alexhead', 'zeitbank', 'collective'); L('jolandatodt', 'zeitbank', 'collective · typography'); L('zeitbank', 'zku', 'Gütermarkt');
  L('zeitmarkt', 'zeitbank', 'platform code'); L('alexhead', 'zeitmarkt', 'collective'); L('jolandatodt', 'zeitmarkt', 'collective'); L('zeitmarkt', 'zku', 'Gütermarkt');
  L('polo', 'schuldkroeten', 'member, second half of 2014');
  for (const p of ['jolandatodt', 'alexhead', 'liabergaue']) L(p, 'schuldkroeten', 'member'); L('schuldkroeten', 'zku', 'born at the Gütermarkt');
  L('schuldkroeten', 'zeitbank', 'research project'); L('liabergaue', 'zeitbank', 'collective');

  // ── TCC na Bennett ──
  L('tcc', 'bennett', 'thesis'); L('sabrina', 'tcc', 'co-author'); L('savio', 'tcc', 'advisor');
  L('carolina', 'tcc', 'committee'); L('vinicius', 'tcc', 'committee');

  // ── Kripto Solutions ──
  for (const p of ['moedacasa', 'moedax']) L('kripto', p, 'team project');
  for (const p of ['speculari', 'renda']) L('kripto', p, 'predecessor, made in Athens');
  for (const p of ['marina', 'igor']) L(p, 'kripto', 'team');
  L('marina', 'moedax', 'team (grant proposal, 2021)');
  for (const p of ['igor', 'helio', 'abner']) L(p, 'edge', 'team');
  L('igor', 'moedax', 'UX'); L('miguel', 'moedax', 'UX and product');
  L('marina', 'minho', 'PhD'); L('moedacasa', 'zcash', 'ZOMG grant'); L('verafiko', 'celo', 'Celo/Huobi hackathon');

  // ── Tactical Tech ──
  for (const p of ['eti', 'holistic', 'myshadow', 'sic', 'littlespoon', 'stalker', 'deepgraphics']) L('ttc', p, 'organization project');
  for (const p of ['niko', 'allan', 'christo', 'kaustubh', 'claire', 'laurent', 'crito']) L(p, 'ttc', 'team');
  for (const p of ['niko', 'allan', 'crito', 'claire', 'mikepierce', 'kaustubh']) L(p, 'myshadow', 'commits');
  L('laurent', 'sic', 'commits');
  for (const p of ['niko', 'allan', 'christo', 'crito']) L(p, 'littlespoon', 'commits');
  for (const p of ['niko', 'allan', 'christo', 'crito', 'kaustubh']) L(p, 'stalker', 'commits');
  L('lucasteixeira', 'deepgraphics', 'commits'); L('lucasteixeira', 'codingrights', 'affiliation');
  L('eti', 'ccc', 'presented'); L('littlespoon', 'eti', 'team tool');

  // onde Rafael morou: anos decimais, contíguos (fonte: CVs, proposta da Moedax)
  const lugares = [
    { nome: 'Rio de Janeiro', ini: 2002, fim: 2013.9, nota: 'Nova Friburgo, Teresópolis and Rio' },
    { nome: 'Berlin', ini: 2013.9, fim: 2017, nota: 'Trommsdorff + Drüner, Tactical Tech, ZK/U' },
    { nome: 'Athens', ini: 2017, fim: 2020, nota: 'Code + Create, labs for refugees' },
    { nome: 'Lisbon', ini: 2020, fim: 2023.1, nota: 'Kripto Solutions, Moedax, NOVA IMS' },
    { nome: 'Zurich', ini: 2023.1, fim: 2025.25, nota: 'EDGE (Zug), Swisscom (Zurich)' },
    { nome: 'Basel', ini: 2025.25, fim: 2027, nota: 'freelance since April 2025' },
  ];

  // nomes curtos para as barras da linha do tempo, quando o nome inteiro não cabe
  const curtos = {
    bennett: 'Bennett', feso: 'FESO', cortex: 'Cortex', td: 'T+D', capes: 'CAPES', unirio: 'UNIRIO', ufrj: 'NCE', ufrjeco: 'ECO',
    mcury: 'M.Cury', meuservidor: 'MeuServidor', gfoss: 'GFOSS + Khora', kripto: 'Kripto', edge: 'EDGE',
    novaims: 'NOVA', ttc: 'TTC', inpp: 'INPP', intercept: 'Intercept', swisscom: 'Swisscom',
  };
  for (const n of nos) if (curtos[n.id]) n.curto = curtos[n.id];

  g.ONTO = { nos, ligacoes, lugares };
})(window);
