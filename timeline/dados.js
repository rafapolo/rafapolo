// Timeline: pessoas, projetos e instituições ligados ao trabalho de Rafael Polo.
// Fonte de cada fato em content/partners.md. Formato: N(id, rótulo, tipo, extra) e L(a, b, papel).
// Tipos: eu · projeto · pessoa · formacao · trabalho · coletivo · governo · cultura · fundacao
(function (g) {
  const nos = [], ligacoes = [];
  const N = (id, rotulo, tipo, extra = {}) => nos.push({ id, rotulo, tipo, ...extra });
  const L = (a, b, papel = '') => ligacoes.push({ a, b, papel });

  N('polo', 'Rafael Polo', 'eu', { nota: 'Engenheiro de software, dados e visualização. Rio · Berlim · Atenas · Lisboa · Basel.' });

  // ── projetos ──
  N('pensar', 'Pensar Público', 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: 'Exposição de mapeamentos dinâmicos da Praça Tiradentes, com duas instalações interativas; inaugurou o Centro Carioca de Design.', url: 'https://rafapolo.github.io/pensar-publico/' });
  N('razao', 'Razão e Ambiente', 'projeto', { ano: 2011, cidade: 'São Paulo', nota: 'Site e interface multitouch da exposição no MAM-SP; Rafael fez o site e a navegação das plantas sobre o Google Maps.', url: 'https://rafapolo.github.io/RazaoeAmbiente/' });
  N('webdoc', 'WebDoc Graffiti', 'projeto', { ano: 2012, cidade: 'São Paulo', nota: 'Webdocumentário interativo sobre o graffiti paulistano, premiado pelo MinC.', url: 'https://rafapolo.github.io/webdocgraffiti/' });
  N('traces', 'Traces / Rastros', 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: 'Software de captura de imagens pelo movimento, criado para o Pensar Público.', url: 'https://github.com/rafapolo/rastros' });
  N('faq', 'FAQ TV', 'projeto', { ano: 2011, nota: 'Site da TV digital FAQ: sistema por Rafael, design por Miguel Nóbrega.' });
  N('parallel', 'Parallel Versions', 'projeto', { ano: 2010, cidade: 'Amsterdã', nota: 'Ferramenta para comparar sequências de vídeo análogas lado a lado.' });
  N('zanini', 'Studio Zanini', 'projeto', { ano: 2013, nota: 'CMS feito do zero para o designer de produto Zanini de Zanine.' });
  N('etaoin', 'Etaoin Shrdlu', 'projeto', { ano: 2012, nota: 'CMS via FTP que gera o portfólio tipográfico de Pedro Moraes.', url: 'https://rafapolo.github.io/etaoin-shrdlu/' });
  N('victorhaim', 'Victor Haim', 'projeto', { ano: 2011, nota: 'Blog e portfólio do fotógrafo Victor Haim.', url: 'https://web.archive.org/web/20130501204517/http://victorhaim.com.br/' });
  N('subzku', 'SubZKU', 'projeto', { ano: 2019, cidade: 'Berlim', nota: 'Audioguia interativo: cinco anos de ZK/U em seis sets de som.', url: 'https://rafapolo.github.io/subzku/' });
  N('exst', 'EXST / SoundSystem', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Sites do projeto SoundSystem, de Franz Manata e Saulo Laudares (primeiro commit em fevereiro de 2011).' });
  N('connectas', 'Connectas / Grupo Bruto', 'projeto', { ano: 2018, nota: 'Plataforma de redes de propriedade entre empresas, doadores de campanha e deputados.', url: 'https://www.connectas.org/especiales/odebrecht/' });
  N('tribuna', 'Tribuna', 'projeto', { ano: 2018, nota: 'Todo o repositório eleitoral do TSE num banco relacional para jornalistas.', url: 'https://github.com/rafapolo/tribuna' });
  N('datative', 'datative', 'projeto', { ano: 2026, nota: 'Redes de CNPJ/CPF entre bases públicas federais.', url: 'https://rafapolo.github.io/datative/' });
  N('eti', 'Exposing the Invisible', 'projeto', { ano: 2016, cidade: 'Berlim', nota: 'A equipe de Rafael na Tactical Tech: recursos e ferramentas de investigação; Rafael fez 12 ferramentas e sites, entre eles o Little Spoon.', url: 'https://exposingtheinvisible.org/' });
  N('holistic', 'Holistic Security', 'projeto', { ano: 2016, cidade: 'Berlim', nota: 'Manual de segurança digital da Tactical Tech.', url: 'https://holistic-security.tacticaltech.org/' });
  N('myshadow', 'Me and My Shadow', 'projeto', { ano: 2015, cidade: 'Berlim', nota: 'Plataforma da Tactical Tech sobre rastros digitais.' });
  N('sic', 'Security in Context', 'projeto', { ano: 2015, cidade: 'Berlim', nota: 'Plataforma Rails da Tactical Tech.' });
  N('littlespoon', 'Little Spoon', 'projeto', { ano: 2015, cidade: 'Berlim', nota: 'Pipeline de dados feito para a equipe Exposing the Invisible, na Tactical Tech.' });
  N('stalker', 'Stalker', 'projeto', { ano: 2015, cidade: 'Berlim', nota: 'Ferramenta interna da Tactical Tech.' });
  N('deepgraphics', 'Deep Graphics', 'projeto', { ano: 2015, cidade: 'Berlim', nota: 'Laboratório de dataviz da Tactical Tech.' });
  N('agua', 'Agenda Água na Escola', 'projeto', { ano: 2013, cidade: 'Rio de Janeiro', nota: 'Plataforma em que alunos da rede pública registram a qualidade da água dos rios.', url: 'https://rafapolo.github.io/aguanaescola/' });
  N('grafica', 'Gráfica Utópica', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Site interativo da exposição do coletivo no MNBA.', url: 'https://rafapolo.github.io/GraficaUtopica/' });
  N('comuna', 'Comuna', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'CMS em colunas para o cowork Comuna.' });
  N('damnatio', 'Damnatio Memoriae', 'projeto', { ano: 2011, nota: 'Software-arte que risca rostos nas fotos locais.', url: 'https://www.memefest.org/friendly-competition/gallery/680/' });
  N('fratura', 'fratura / WikiBot', 'projeto', { ano: 2011, cidade: 'Rio de Janeiro', nota: 'Crawler da Wikipedia projetado no teto de uma exposição.', url: 'https://rafapolo.github.io/fratura/' });
  N('abotoados', 'Abotoados pela Manga', 'projeto', { ano: 2010, cidade: 'São Paulo', nota: 'Residência de arte e política de três semanas durante a 29ª Bienal.' });
  N('variation', 'Vênus-Terra / Variation', 'projeto', { ano: 2012, cidade: 'Rio de Janeiro', nota: 'Apresentação da obra "Variation".' });
  N('ccities', 'Connecting Cities Lab', 'projeto', { ano: 2015, cidade: 'Berlim', nota: 'Prototyping Lab sobre as mudanças invisíveis das cidades.' });
  N('moedax', 'Moedax', 'projeto', { ano: 2021, anoPos: 2021.5, cidade: 'Lisboa', nota: 'Pagamentos Web3: contratos inteligentes e ponte Web2/Web3 com CBDC.' });
  N('moedacasa', 'Moeda.Casa', 'projeto', { ano: 2020, cidade: 'Lisboa', nota: 'Pagamentos PIX ↔ cripto por QR; deu origem à Kripto Solutions, com bolsa ZOMG (Zcash).' });
  N('verafiko', 'VERAΞFIKO', 'projeto', { ano: 2022, nota: 'Hackathon Celo/Huobi: ponte de stablecoin entre PIX e cripto (projeto solo).', url: 'https://github.com/rafapolo/celohuobihack' });
  N('colmeia', 'Colmeia', 'projeto', { ano: 2026, nota: 'Organização local para as eleições de 2026: cada setor censitário é uma célula.' });
  N('codecreate', 'Code + Create', 'projeto', { ano: 2018, cidade: 'Atenas', nota: 'Aulas de HTML, CSS e jQuery para jovens gregos e refugiados.' });
  N('zeitbank', 'Zeitbank / ZeitLotto', 'projeto', { ano: 2014, cidade: 'Berlim', nota: 'Banco de tempo e loteria de habilidades no Gütermarkt do ZK/U: cada participante troca o que sabe fazer.' });
  N('tcc', 'TCC Rails', 'projeto', { ano: 2009, cidade: 'Rio de Janeiro', nota: '«Desenvolvimento ágil de sistemas para a Web 2.0 com Rails». Monografia de conclusão do bacharelado em Ciência da Computação, defendida em novembro de 2009.' });
  // demais cards do index.html
  N("eleicoes2026", "Eleições 2026", 'projeto', { ano: 2026, nota: "Pesquisas por seção eleitoral geolocalizadas, nos dois turnos, Lula × Flávio, com identidade partidária.", url: "https://xn--2dk.xyz/dataviz/eleicoes/?eleicao=presidente-2026" });
  N("cantography", "Cantography", 'projeto', { ano: 2026, nota: "As 795 mil empresas suíças sobre seus prédios, desde 1883.", url: "https://cantography.ch/" });
  N("erthos", "Erthos", 'projeto', { ano: 2026, nota: "Decifração da cifra do \"Soneto Alfanumérico\" (1974), poesia de computador brasileira.", url: "https://rafapolo.github.io/erthos?lang=en" });
  N("rodado", "Rodado", 'projeto', { ano: 2026, nota: "1.050 tabelas oficiais brasileiras consultáveis por agentes de IA via MCP.", url: "https://rodado.xyz/en" });
  N("brasilume", "brasilume", 'projeto', { ano: 2026, nota: "21 milhões de empresas brasileiras localizadas endereço por endereço.", url: "https://rafapolo.github.io/brasilume/" });
  N("helvetiscan", "helvetiscan", 'projeto', { ano: 2026, nota: "Varredura de 2,5 milhões de domínios .ch e suas vulnerabilidades.", url: "https://github.com/rafapolo/helvetiscan" });
  N("malafaia", "malafaia", 'projeto', { ano: 2026, nota: "Mapa atualizado de um império religioso, para jornalistas.", url: "https://xn--2dk.xyz/malafaia/" });
  N("brasiliano", "brasiliano", 'projeto', { ano: 2026, nota: "O acervo da Brasiliana Fotográfica, 13 mil itens, em 3D.", url: "https://xn--2dk.xyz/brasiliana/" });
  N("pet16704", "pet16704", 'projeto', { ano: 2026, nota: "3.437 documentos do STF sobre o caso Banco Master.", url: "https://rodado.xyz/plataformas/pet16704/" });
  N("rios", "rios-do-brasil", 'projeto', { ano: 2026, nota: "462 mil trechos de rios brasileiros coloridos pela tendência de vazão.", url: "https://rodado.xyz/plataformas/rios-do-brasil/" });
  N("tsebens", "TSE-bens", 'projeto', { ano: 2026, nota: "Crescimento do patrimônio dos deputados contra o salário oficial.", url: "https://rodado.xyz/plataformas/patrimonio/" });
  N("vorcaros", "vorcaros", 'projeto', { ano: 2026, nota: "Grafo de propriedade de 8.088 empresas conectadas.", url: "https://rafapolo.github.io/vorcaros/" });
  N("tocador", "Tocador", 'projeto', { ano: 2026, nota: "Player alternativo ao Spotify com mais de 7 mil artistas brasileiros.", url: "https://tocador.cc/" });
  N("atlasmakingoff", "Atlas MakingOff", 'projeto', { ano: 2026, nota: "33 mil filmes raros num mural de cinema com zoom e links magnet.", url: "https://rafapolo.github.io/atlas-makingoff/" });
  N("pulso", "Pulso da Imprensa", 'projeto', { ano: 2026, nota: "Ciclo de vida de 4.205 empresas de imprensa de Brasília desde 2000.", url: "https://rodado.xyz/plataformas/pulso-da-imprensa-em-brasilia/" });
  N("templos", "Templos", 'projeto', { ano: 2026, nota: "785 mil templos religiosos no Brasil, coloridos por denominação.", url: "https://xn--2dk.xyz/dataviz/religioes/igrejas/" });
  N("tigrinho", "Pegadas Tigrinho", 'projeto', { ano: 2025, nota: "Rede societária do golpe de apostas do Tigrinho.", url: "https://tinyurl.com/pegadas-tigrim" });
  N("viso", "VISO", 'projeto', { ano: 2025, nota: "Visualização Interativa de Sistemas Obscuros: gastos dos deputados federais.", url: "https://rafapolo.github.io/viso/" });
  N("fincrime", "fincrime", 'projeto', { ano: 2025, nota: "Redes societárias citadas em lavagem de dinheiro.", url: "https://rafapolo.github.io/fincrime/" });
  N("rais", "RAIS", 'projeto', { ano: 2025, nota: "40 anos de empregos formais no Brasil, explorados no navegador.", url: "https://rafapolo.github.io/rais/" });
  N("friba", "Friba", 'projeto', { ano: 2025, nota: "População de Nova Friburgo em 3D.", url: "https://xn--2dk.xyz/dataviz/friba/pop_3d" });
  N("religioes", "religioes", 'projeto', { ano: 2025, nota: "Mudança religiosa por município entre os Censos.", url: "https://xn--2dk.xyz/dataviz/religioes/" });
  N("braswiss", "BraSwiss", 'projeto', { ano: 2025, nota: "Rede de empresas suíças com sede no Brasil.", url: "https://tinyurl.com/swiss-brazilian-network" });
  N("speculari", "speculari", 'projeto', { ano: 2019, cidade: 'Atenas', nota: "Análise visual de arbitragem cripto entre corretoras.", url: "https://github.com/rafapolo/speculari" });
  N("renda", "Renda", 'projeto', { ano: 2018, cidade: 'Atenas', nota: "Framework para experimentos cripto-econômicos, em Crystal.", url: "http://github.com/rafapolo/renda" });
  N("steganos", "Steganos", 'projeto', { ano: 2017, anoPos: 2017.5, cidade: 'Atenas', nota: "Converte qualquer arquivo digital numa imagem (reescrito em Rust).", url: "https://github.com/rafapolo/steganos" });
  N("processing", "processing", 'projeto', { ano: 2012, nota: "Esboços de código criativo e visão computacional.", url: "https://github.com/rafapolo/processing" });
  N("atlantica", "Av. Atlântica 1101", 'projeto', { ano: 2010, nota: "Vitrine dia e noite de um duplex em Copacabana.", url: "https://rafapolo.github.io/apt-avenida-atlantica/" });
  N("mostre", "Mostre!me Cultura", 'projeto', { ano: 2009, nota: "Todos os dados do Ministério da Cultura em visualizações.", url: "https://github.com/rafapolo/mostre" });
  N("consulta", "Consulta Natural", 'projeto', { ano: 2009, nota: "Agente conversacional em linguagem natural sobre SPARQL e Google Talk.", url: "https://github.com/rafapolo/consulta-natural" });
  N("baixogavea", "BaixoGávea", 'projeto', { ano: 2009, nota: "Portal comunitário de discografias e links de torrent.", url: "https://web.archive.org/web/20110202000436/http://baixogavea.com/" });
  // projetos do Meio sem Rafael
  N('noz', 'Revista Noz', 'projeto', { meio: true, nota: 'Projeto do Meio (sem Rafael).' });
  N('temporaria', 'Editora Temporária', 'projeto', { ano: 2013, meio: true, nota: 'Estrutura temporária de edição de livros sobre a cidade (sem Rafael).' });
  N('performance', 'Festival Performance Arte Brasil', 'projeto', { meio: true, nota: 'Identidade visual e catálogo (sem Rafael).' });

  // ── pessoas ──
  const P = (id, nome, nota) => N(id, nome, 'pessoa', { nota });
  P('miguel', 'Miguel Nóbrega', 'Designer, sócio do Meio (nobrega.info).');
  P('vitor', 'Vitor Garcez', 'Designer, sócio do Meio (vitorgarcez.com).');
  P('clara', 'Clara Meliande', 'Designer, sócia do Meio.');
  P('felipe', 'Felipe Nogueira', 'Sócio do Meio (aparelho.tv).');
  P('alice', 'Alice Dalgalarrondo', 'Publicou o vídeo do Pensar Público.');
  P('andre', 'André Menezes', 'Diretor de arte e designer de interface.');
  P('lauro', 'Lauro Cavalcanti', 'Curador.');
  P('mcristina', 'Maria Cristina Cabral', 'Assistente de curadoria.');
  P('anaban', 'Ana Ban', 'Tradutora.');
  P('giovanni', 'Giovanni Francischelli', 'Diretor.');
  P('frota', 'Daniel Frota', 'Designer de interação e de tipos.');
  P('cartaxo', 'Henrique Cartaxo', 'Editor de vídeo.');
  P('livia', 'Lívia Perez de Paula', 'Fotógrafa.');
  P('crepker', 'Felipe Crepker Vieira', 'Fotógrafo.');
  P('ovalles', 'Fabio Fontes Ovalles', 'Ilustrador.');
  P('nina', 'Nina Paim', 'Designer (ninapaim.com).');
  P('zanine', 'Zanini de Zanine', 'Designer de produto (mobiliário).');
  P('pedromoraes', 'Pedro Moraes', 'Tipógrafo (ETAOIN SHRDLU) e sócio da Comuna.');
  P('haim', 'Victor Haim', 'Fotógrafo.');
  P('alexhead', 'Alex Head', 'Artista sonoro.');
  P('manata', 'Franz Manata', 'Artista (SoundSystem).');
  P('laudares', 'Saulo Laudares', 'Artista (SoundSystem).');
  P('belisario', 'Adriano Belisario', 'Jornalista de dados.');
  P('niko', 'Niko', 'Desenvolvedor, Tactical Tech.');
  P('allan', 'allan', 'Desenvolvedor, Tactical Tech.');
  P('christo', 'Christo', 'Tactical Tech.');
  P('kaustubh', 'Kaustubh Srikanth', 'Tactical Tech.');
  P('claire', 'Claire Tolan', 'Tactical Tech.');
  P('mikepierce', 'Mike Pierce', 'Desenvolvedor.');
  P('laurent', 'Laurent Dellere', 'Tactical Tech.');
  P('crito', 'crito', 'Desenvolvedor (cryptodrunks.net).');
  P('lucasteixeira', 'Lucas Teixeira', 'Coding Rights.');
  P('marina', 'Marina Polo', 'Doutora em Ciências da Comunicação (Universidade do Minho); pesquisadora de cultura, ideologia e internet.');
  P('marise', 'Marise', 'Colaboradora do Mostre!me Cultura.');
  P('igor', 'Igor', 'Comunicação aplicada, UX.');
  P('erthosalbino', 'Erthos Albino de Souza', 'Poeta e engenheiro; autor do Soneto Alfanumérico (revista Código, 1974).');
  P('jolandatodt', 'Jolanda Todt', 'Designer gráfica em Berlim.');
  P('sabrina', 'Sabrina Arêas', 'Coautora do TCC.');
  P('savio', 'Sávio Figueiredo', 'Professor, orientador do TCC.');
  P('carolina', 'Carolina Xavier', 'Professora, banca do TCC.');
  P('vinicius', 'Vinicius da Fonseca Vieira', 'Professor, banca do TCC.');
  P('mariani', 'Daniel Mariani', 'Colmeia.');
  P('cinco', 'Cinco Euzebio', 'Colmeia.');
  P('thiago', 'Thiago Moreira', 'Colmeia.');
  P('victorwu', 'Victor Wu', 'Colmeia.');

  // ── instituições ──
  const I = (id, nome, tipo, nota, extra = {}) => N(id, nome, tipo, { nota, ...extra });
  // formação
  I('index', 'Index Informática', 'formacao', 'Nova Friburgo.');
  I('bennett', 'Centro Universitário Metodista Bennett', 'formacao', 'Rio de Janeiro. Bacharelado em Ciência da Computação: conclusão em 12/12/2009, diploma expedido em 01/10/2010. TCC defendido em novembro de 2009.');
  I('mcury', 'M.Cury Computação', 'formacao', 'Rio de Janeiro.');
  I('feso', 'Fundação Educacional Serra dos Órgãos', 'formacao', 'Teresópolis.');
  I('ufrj', 'UFRJ (NCE · ECO)', 'formacao', 'Universidade Federal do Rio de Janeiro.');
  I('unirio', 'PPGI / UNIRIO', 'formacao', 'Universidade Federal do Estado do Rio de Janeiro.');
  I('capes', 'CAPES / MEC', 'governo', 'Ministério da Educação.');
  I('rietveld', 'Gerrit Rietveld Academie', 'formacao', 'Amsterdã.');
  I('novaims', 'NOVA IMS', 'formacao', 'Lisboa.');
  // trabalho
  I('swisscom', 'Swisscom', 'trabalho', 'Zurique.');
  I('edge', 'EDGE Empower', 'trabalho', 'Zug.');
  I('td', 'Trommsdorff + Drüner', 'trabalho', 'Berlim.', { periodo: [2013.92, 2014.08] });
  I('cortex', 'Cortex Intelligence', 'trabalho', 'Rio de Janeiro.');
  I('logical', 'Logical Systems', 'trabalho', 'Rio de Janeiro.');
  I('meuservidor', 'MeuServidor', 'trabalho', 'Hospedagem Linux/PHP, cofundada.');
  I('inpp', 'INPP', 'trabalho', 'Instituto Nacional de Pesquisas Públicas, Teresópolis.');
  I('tecnopop', 'Tecnopop', 'trabalho', 'Estúdio de design visual.');
  I('doctela', 'Doctela', 'trabalho', 'Produtora.');
  // ONGs, coletivos, jornalismo
  I('kripto', 'Kripto Solutions', 'coletivo', 'Equipe de pesquisa e desenvolvimento cripto formada em Lisboa em torno do Moeda.Casa.');
  I('minho', 'Universidade do Minho', 'formacao', 'Braga, Portugal.');
  I('rodadoxyz', 'rodado.xyz', 'trabalho', 'Selo dos projetos de dados de 2025–2026 do portfólio.', { url: 'https://rodado.xyz/' });
  I('meio', 'Meio', 'coletivo', 'Estúdio de design na Praça Tiradentes, Rio.');
  I('ttc', 'Tactical Tech', 'coletivo', 'Tactical Technology Collective, Berlim.');
  I('codingrights', 'Coding Rights', 'coletivo', 'ONG de direitos digitais.');
  I('connectasorg', 'Connectas', 'coletivo', 'Rede de jornalismo investigativo.');
  I('intercept', 'The Intercept Brasil', 'coletivo', 'Jornalismo investigativo; publicou a investigação da Connectas.');
  I('memefest', 'Memefest', 'coletivo', 'Festival internacional de comunicação e arte.');
  I('graficacol', 'coletivo Gráfica Utópica', 'coletivo', 'Coletivo de arte multimídia carioca.');
  I('fraturacol', 'coletivo Fratura', 'coletivo', '');
  I('comunacow', 'Comuna', 'coletivo', 'Cowork e espaço multiuso, Rio.');
  I('gfoss', 'GFOSS.eu', 'coletivo', 'Open Technologies Alliance, Atenas.');
  // governo
  I('minc', 'Ministério da Cultura', 'governo', '');
  I('inea', 'INEA', 'governo', 'Instituto Estadual do Ambiente, RJ.');
  I('sea', 'SEA-RJ', 'governo', 'Secretaria de Estado do Ambiente.');
  I('piabanha', 'Comitê Piabanha', 'governo', 'Comitê de bacia hidrográfica.');
  I('paraiba', 'Comitê Médio Paraíba do Sul', 'governo', 'Comitê de bacia hidrográfica.');
  I('irph', 'Instituto Rio Patrimônio da Humanidade', 'governo', 'Prefeitura do Rio.');
  // cultura
  I('mamsp', 'MAM-SP', 'cultura', 'Museu de Arte Moderna de São Paulo.');
  I('ccd', 'Centro Carioca de Design', 'cultura', 'Praça Tiradentes, Rio.');
  I('studiox', 'Studio-X Rio', 'cultura', '');
  I('mnba', 'MNBA', 'cultura', 'Museu Nacional de Belas Artes, Rio.');
  I('tac', 'Galeria TAC', 'cultura', 'Rio de Janeiro.');
  I('bienal', '29ª Bienal de São Paulo', 'cultura', '');
  I('hkw', 'Transmediale · HKW', 'cultura', 'Haus der Kulturen der Welt, Berlim.');
  I('ccnet', 'Connecting Cities Network', 'cultura', '');
  I('ccc', 'Chaos Computer Camp', 'cultura', '2015.');
  I('zku', 'ZK/U', 'cultura', 'Zentrum für Kunst und Urbanistik, Berlim.');
  // fundações
  I('tetrapak', 'Tetra Pak', 'fundacao', 'Patrocínio via Lei Rouanet.');
  I('celo', 'Celo Foundation', 'fundacao', '');
  I('zcash', 'Zcash Foundation', 'fundacao', '');

  // ── ligações: Rafael ──
  const minhas = ['pensar', 'razao', 'webdoc', 'traces', 'faq', 'parallel', 'zanini', 'etaoin', 'victorhaim', 'subzku', 'exst',
    'connectas', 'tribuna', 'datative', 'eti', 'holistic', 'myshadow', 'sic', 'littlespoon', 'stalker', 'deepgraphics',
    'agua', 'grafica', 'comuna', 'damnatio', 'fratura', 'abotoados', 'variation', 'ccities', 'moedax', 'moedacasa', 'verafiko', 'zeitbank', 'tcc', 'colmeia', 'codecreate'];
  for (const p of minhas) L('polo', p, 'autoria / desenvolvimento');
  for (const p of ['eleicoes2026', 'cantography', 'erthos', 'rodado', 'brasilume', 'helvetiscan', 'malafaia', 'brasiliano', 'pet16704', 'rios', 'tsebens', 'vorcaros', 'tocador', 'atlasmakingoff', 'pulso', 'templos', 'tigrinho', 'viso', 'fincrime', 'rais', 'friba', 'religioes', 'braswiss', 'speculari', 'renda', 'steganos', 'processing', 'atlantica', 'mostre', 'consulta', 'baixogavea']) L('polo', p, 'autoria / desenvolvimento');
  L('polo', 'index', 'curso de Visual Basic, 1998');
  L('polo', 'bennett', 'bacharelado em Ciência da Computação, 2003–2009 (início 2003 ou 2004, conforme o CV)');
  L('polo', 'mcury', 'Linux System Engineer, 2004');
  L('polo', 'feso', 'oficina de software livre, 2005');
  L('polo', 'ufrj', 'Java no NCE (2006–2010) · extensão em Cultura Digital na ECO em 2010');
  L('polo', 'unirio', 'mestrado em Sistemas de Informação, 2010–2012');
  L('polo', 'capes', 'bolsa de pós-graduação, 2010');
  L('polo', 'novaims', 'pós-graduação em Data Science for Finance, 2021');
  L('polo', 'swisscom', 'DevOps Engineer, 2024–2025');
  L('polo', 'edge', 'Senior Technical Lead, 2023–2024');
  L('polo', 'td', 'desenvolvedor em Berlim, dez 2013 – jan 2014');
  L('polo', 'cortex', 'desenvolvedor, 2007–2008');
  L('polo', 'logical', 'sysadmin e Java, 2007');
  L('polo', 'meuservidor', 'cofundador, 2002–2003');
  L('polo', 'inpp', 'desenvolvedor principal, 2004');
  L('polo', 'meio', 'cofundador, 2010–2012');
  L('polo', 'kripto', 'cofundador, 2020–2021');
  L('polo', 'ttc', 'arquiteto full-stack na equipe Exposing the Invisible, 2014–2016');
  L('polo', 'gfoss', 'professor, 2017–2018');
  L('polo', 'ccc', 'apresentação');

  // ── Meio ──
  for (const p of ['miguel', 'vitor', 'clara', 'felipe']) L(p, 'meio', 'sócio(a)');
  for (const p of ['pensar', 'razao', 'traces', 'faq', 'noz', 'temporaria', 'performance']) L('meio', p, 'projeto do estúdio');
  for (const p of ['miguel', 'vitor', 'clara']) L(p, 'pensar', 'equipe');
  L('alice', 'pensar', 'vídeo'); L('pensar', 'ccd', 'exposição'); L('pensar', 'studiox', 'exposição');
  L('traces', 'pensar', 'criado para a exposição');
  L('miguel', 'razao', 'conceito e design'); L('vitor', 'razao', 'conceito e design · pesquisa');
  L('andre', 'razao', 'interface touchscreen'); L('lauro', 'razao', 'curadoria e projeto expográfico');
  L('mcristina', 'razao', 'assistente de curadoria'); L('anaban', 'razao', 'tradução');
  L('tecnopop', 'razao', 'design visual'); L('razao', 'mamsp', 'exposição'); L('minc', 'razao', 'Lei Rouanet');
  L('tetrapak', 'razao', 'patrocínio');
  L('miguel', 'traces', 'equipe'); L('vitor', 'traces', 'equipe');
  L('miguel', 'faq', 'design');
  L('miguel', 'noz'); L('vitor', 'noz'); L('miguel', 'temporaria'); L('clara', 'temporaria');
  L('clara', 'performance'); L('irph', 'temporaria', 'edital Pró-Design');

  // ── WebDoc Graffiti ──
  L('doctela', 'webdoc', 'produção'); L('giovanni', 'webdoc', 'direção'); L('andre', 'webdoc', 'direção de arte');
  L('frota', 'webdoc', 'design de interação · desenho de tipo'); L('miguel', 'webdoc', 'design de interação');
  L('cartaxo', 'webdoc', 'edição de vídeo'); L('livia', 'webdoc', 'fotografia'); L('crepker', 'webdoc', 'fotografia');
  L('ovalles', 'webdoc', 'ilustração'); L('minc', 'webdoc', 'prêmio Cartografias Colaborativas');

  // ── clientes e parceiros ──
  L('nina', 'parallel', 'conceito'); L('parallel', 'rietveld', 'projeto acadêmico');
  L('zanine', 'zanini', 'cliente'); L('pedromoraes', 'etaoin', 'cliente'); L('pedromoraes', 'comunacow', 'sócio'); L('pedromoraes', 'comuna', 'cliente'); L('haim', 'victorhaim', 'cliente');
  L('alexhead', 'subzku', 'artista'); L('subzku', 'zku', 'encomenda');
  L('manata', 'exst', 'artista'); L('laudares', 'exst', 'artista');
  L('connectas', 'connectasorg', 'parceria'); L('connectas', 'intercept', 'trabalho para o Intercept, com Adriano Belisario'); L('belisario', 'intercept', 'parceiro no trabalho'); L('belisario', 'connectas', 'código (otherbrecht)');
  L('belisario', 'tribuna', 'código'); L('belisario', 'datative', 'código'); L('belisario', 'colmeia', 'código');
  
  L('agua', 'inea', 'cliente'); L('agua', 'sea', 'cliente'); L('agua', 'piabanha', 'parceria'); L('agua', 'paraiba', 'parceria');
  L('grafica', 'graficacol', 'cliente'); L('grafica', 'mnba', 'exposição');
  L('comuna', 'comunacow', 'cliente');
  L('damnatio', 'memefest', 'galeria e livro'); L('fratura', 'fraturacol', 'coletivo');
  L('abotoados', 'bienal', 'residência'); L('variation', 'tac', 'exposição');
  L('ccities', 'hkw', 'Prototyping Lab'); L('ccities', 'ccnet', 'rede');
  L('moedax', 'celo', 'bolsa'); L('moedax', 'zcash', 'bolsa');
  for (const p of ['mariani', 'cinco', 'thiago', 'victorwu']) L(p, 'colmeia', 'código');
  L('codecreate', 'gfoss', 'programa');

  L('consulta', 'unirio', 'projeto do mestrado');
  L('erthosalbino', 'erthos', 'autor do poema decifrado'); L('mostre', 'minc', 'dados públicos'); L('marina', 'mostre', 'equipe'); L('marise', 'mostre', 'equipe');

  // ── rodado.xyz: projetos recentes do índice ──
  for (const p of ['eleicoes2026', 'cantography', 'erthos', 'rodado', 'brasilume', 'datative', 'helvetiscan', 'malafaia', 'brasiliano',
    'pet16704', 'rios', 'tsebens', 'vorcaros', 'tocador', 'atlasmakingoff', 'pulso', 'templos', 'tigrinho', 'viso', 'fincrime',
    'rais', 'friba', 'religioes', 'braswiss']) L('rodadoxyz', p, 'projeto do portfólio');

  L('alexhead', 'zeitbank', 'coletivo'); L('jolandatodt', 'zeitbank', 'coletivo · tipografia'); L('zeitbank', 'zku', 'Gütermarkt');

  // ── TCC na Bennett ──
  L('tcc', 'bennett', 'monografia'); L('sabrina', 'tcc', 'coautoria'); L('savio', 'tcc', 'orientação');
  L('carolina', 'tcc', 'banca'); L('vinicius', 'tcc', 'banca');

  // ── Kripto Solutions ──
  for (const p of ['moedacasa', 'moedax']) L('kripto', p, 'projeto da equipe');
  for (const p of ['speculari', 'renda']) L('kripto', p, 'antecedente, feito em Atenas');
  for (const p of ['marina', 'igor']) L(p, 'kripto', 'equipe');
  L('marina', 'moedax', 'equipe (proposta de bolsa, 2021)');
  L('igor', 'edge', 'equipe');
  L('igor', 'moedax', 'UX'); L('miguel', 'moedax', 'UX e produto');
  L('marina', 'minho', 'doutorado'); L('moedacasa', 'zcash', 'bolsa ZOMG'); L('verafiko', 'celo', 'hackathon Celo/Huobi');

  // ── Tactical Tech ──
  for (const p of ['eti', 'holistic', 'myshadow', 'sic', 'littlespoon', 'stalker', 'deepgraphics']) L('ttc', p, 'projeto da organização');
  for (const p of ['niko', 'allan', 'christo', 'kaustubh', 'claire', 'laurent', 'crito']) L(p, 'ttc', 'equipe');
  for (const p of ['niko', 'allan', 'crito', 'claire', 'mikepierce', 'kaustubh']) L(p, 'myshadow', 'commits');
  L('laurent', 'sic', 'commits');
  for (const p of ['niko', 'allan', 'christo', 'crito']) L(p, 'littlespoon', 'commits');
  for (const p of ['niko', 'allan', 'christo', 'crito', 'kaustubh']) L(p, 'stalker', 'commits');
  L('lucasteixeira', 'deepgraphics', 'commits'); L('lucasteixeira', 'codingrights', 'vínculo');
  L('eti', 'ccc', 'apresentado'); L('littlespoon', 'eti', 'ferramenta da equipe');

  // onde Rafael morou: anos decimais, contíguos (fonte: CVs, proposta da Moedax)
  const lugares = [
    { nome: 'Rio de Janeiro', ini: 1998, fim: 2013.9, nota: 'Nova Friburgo, Teresópolis e Rio' },
    { nome: 'Berlim', ini: 2013.9, fim: 2017, nota: 'Trommsdorff + Drüner, Tactical Tech, ZK/U' },
    { nome: 'Atenas', ini: 2017, fim: 2020, nota: 'Code + Create, laboratórios para refugiados' },
    { nome: 'Lisboa', ini: 2020, fim: 2023.1, nota: 'Kripto Solutions, Moedax, NOVA IMS' },
    { nome: 'Zurique', ini: 2023.1, fim: 2025.25, nota: 'EDGE (Zug), Swisscom (Zurique)' },
    { nome: 'Basel', ini: 2025.25, fim: 2027, nota: 'freelance desde abril de 2025' },
  ];

  // nomes curtos para as barras da linha do tempo, quando o nome inteiro não cabe
  const curtos = {
    bennett: 'Bennett', feso: 'FESO', cortex: 'Cortex', td: 'T+D', capes: 'CAPES', unirio: 'UNIRIO', ufrj: 'UFRJ',
    mcury: 'M.Cury', logical: 'Logical', meuservidor: 'MeuServidor', gfoss: 'GFOSS', kripto: 'Kripto', edge: 'EDGE',
    novaims: 'NOVA', ttc: 'TTC', index: 'Index', inpp: 'INPP', intercept: 'Intercept', swisscom: 'Swisscom',
  };
  for (const n of nos) if (curtos[n.id]) n.curto = curtos[n.id];

  g.ONTO = { nos, ligacoes, lugares };
})(window);
