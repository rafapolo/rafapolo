# Portfolio Projects — Curation Map

> Source of truth for updating `projects.html`, `works.html`, and `i18n.js`.
> LinkedIn bio: *Full-stack engineer · 20+ years · Basel · AI-enabled products · Python · Ruby · TypeScript · React · PostgreSQL · Docker · CI/CD · AWS · AI Agents*

---

## projects.html — Self-Initiated Projects

### ADD (new, not yet on site)

| Project | Year | Stack | i18n key | EN Description |
|---|---|---|---|---|
| **ASI-Evolve** | 2025 | Python, AI Agents, LLM | `proj.asievolve` | Autonomous agentic framework that closes the loop between knowledge, hypothesis, experiment, and analysis — enabling self-directed research across scientific and computational domains. |
| **baseldosdados** | 2025 | Node.js, DuckDB, BigQuery, Parquet, Rust | `proj.baseldosdados` | Complete mirror of Base dos Dados' 533 public tables (~675 GB Parquet/zstd) on Hetzner, with an interactive DuckDB shell and a natural-language-to-SQL ask interface. |
| **BraViz** | 2025 | Vite, Deck.gl, PMTiles, MapLibre | `proj.braviz` | Serverless, GPU-accelerated browser visualization of 8 million Brazilian establishments from IBGE's CNEFE dataset — no backend, no tile server. |
| **datative** | 2024 | Bun, Sigma.js, Graphology, DuckDB WASM, S3 | `proj.datative` | Investigative analysis platform for exploring connections between companies, partners, and public records — interactive force-directed graphs with SQL-like CNPJ queries over remote Parquet data. |
| **fincrime** | 2024 | JS, D3.js, DuckDB WASM | `proj.fincrime` | *Redes Obscuras* — interactive visualization of opaque corporate networks flagged for suspicious activity, built for financial crime investigation and money-laundering detection. |
| **viso** | 2024 | JS, D3.js, DuckDB WASM, Monaco Editor | `proj.viso` | Interactive network visualization and live SQL explorer for Brazilian federal parliamentary expense data — shareable URLs, offline support, multi-layer caching. |
| **polis** | 2024 | Python, Pandas, NetworkX, BigQuery, DuckDB | `proj.polis` | Digital humanities project mapping the ownership networks connecting Brazilian companies, deputies, and public expenditure — business-political entanglement as a graph. |
| **helvetiscan** | 2024 | Rust, Node.js | `proj.helvetiscan` | Full scanner and mapper of 2.5M+ Swiss .ch domains: HTTP, DNS, TLS, port, WHOIS, MX, CVE. Sector classification, sovereignty scoring, and risk benchmarking with interactive force-graph. |
| **swissviz** | 2024 | JS, Deck.gl, MapLibre, Mapbox Geocoding | `proj.swissviz` | Interactive map of Swiss companies from open data: CSV pipeline → Mapbox geocoding → gzip → GPU-rendered browser tiles with CartoDB basemap. |
| **uqt** | 2023 | Node.js, Vanilla JS, S3 | `proj.uqt` | Digital archive of 100 years of Brazilian Popular Music: 2,303 albums, 28,742 tracks, 816 artists — virtual-scrolling grid, lazy-loaded covers, MP3 streaming via S3 proxy. |
| **IBGE13** | 2023 | Python, Jupyter | `proj.ibge13` | Longitudinal analysis of 150 years of Brazilian census data (1872–2022) — housing, population, and social characteristics across 13 census periods. |
| **sumaria** | 2023 | Python, Ollama, LLM | `proj.sumaria` | Fetches YouTube transcripts and runs them through a local LLM to generate structured summaries with key themes and action points — fully offline. |
| **malafaia** | 2024 | Node.js, Deck.gl, Vite | `proj.malafaia` | Hexbin density map charting the geographic footprint of the Malafaia religious empire across Brazil — location data rendered in-browser with GPU acceleration. |
| **religioes** | 2023 | Python, Kepler.gl, Jupyter | `proj.religioes` | IBGE census religion distribution mapped by municipality — interactive Kepler.gl visualization of faith demographics across Brazil. |

---

### KEEP (already on site, no change needed)

| Project | Year | Status |
|---|---|---|
| Ares | 2019 | Keep — strong investigative journalism story (WhatsApp scraping during elections) |
| Tribuna | 2018 | Keep — TSE electoral data → queryable DB for journalists |
| Renda | 2018 | Keep — Crystal crypto framework; shows language breadth |
| Mostre!me Cultura | 2013 | Keep — Ministry of Culture project visualization |
| Copyfight Acervo MakingOff | 2013 | Keep — rare film torrent curation dataset |
| Consulta Natural | 2009 | Keep — early NLP / SPARQL / Google Talk agent; good historical arc |
| Graphs | 2010 | Keep — Twitter + Wikipedia semantic network viz |

---

### UPDATE (already on site, worth refreshing)

| Project | Change |
|---|---|
| **Steganos** (2014) | Update description to mention the 2022 Rust rewrite: 45–126× faster, zstd compression, optimized pixel layout. Keep 2014 as origin year, note Rust revision. Link: https://github.com/rafapolo/steganos |

---

### RETIRE (remove from site or move to hidden archive section)

| Project | Year | Reason |
|---|---|---|
| WikiBot | 2012 | Low signal; link dead; superseded by more interesting work |
| Processing Sketches | 2010 | Superseded by BraViz, swissviz, and GPU-rendered viz work |
| BaixoGávea | 2009 | Torrent/image scraper; doesn't reflect current skills or narrative |
| Mostre!me Links | 2009 | URL shortener; dated concept, weak signal |
| Chat-RSA | 2008 | Superseded by Steganos (keep only if you want the historical 2008 bookmark) |
| Rastros | 2012 | Charming motion-detection project; optional — archive rather than delete if it has sentimental value |

---

## works.html — Professional / Client / Commissioned Work

### ADD

| Project | Year | Stack | i18n key | EN Description |
|---|---|---|---|---|
| **MO LIN** | 2024 | Node.js, Handlebars | `works.molin` | Website system for MO LIN Chinese Art School in Basel — DRY template engine reducing 39 HTML files to reusable components with consolidated CSS and data-driven navigation. |
| **Connectas / Grupo Bruto** | 2018 | Ruby, Rails, PostgreSQL | `works.connectas` | Investigative data platform mapping ownership networks connecting companies, campaign donors, relatives, and deputies using TSE electoral data — built for the Connectas journalism collective. |
| **COVID-19 Brasil** | 2020 | Ruby, ChartJS, JSON | `works.covid19` | Real-time dashboard aggregating and visualizing Brazilian COVID-19 case data by state and city throughout the pandemic. |
| **pt-2026** | 2025 | JS, HTML, CSV | `works.pt2026` | Interactive electoral visualization analyzing Portuguese vote distribution ahead of the 2026 election. *(Add only if the project is public/shareable.)* |

### KEEP (already on site — all 12 current entries are solid)

SubZKU · Exposing the Invisible · Av. Atlântica 1101 · Agenda Água na Escola · Studio Zanini · WebDoc Graffiti · Pensar Público · Etaoin Shrdlu · Gráfica Utópica · Victor Haim · Comuna · Razão e Ambiente

---

## Optional: New Tab `"data"` or `"tools"`

If the site gains a third nav entry, the following investigative/data-tool cluster would fit well as a distinct category — they're neither pure experiments nor client work:

- datative · viso · fincrime · polis · baseldosdados · helvetiscan

This would separate *research tools* from *creative experiments* (projects) and *commissioned work* (works), which maps well to the LinkedIn bio positioning around data engineering + investigative tooling.

---

## xyz/ — New data projects (from xn--2dk.xyz)

These live visualizations are hosted on the xyz domain and should be added to the portfolio grid.

| Project | Year | URL | Tags | Notes |
|---|---|---|---|---|
| **swiss network** | 2026 | https://xn--2dk.xyz/dataviz/swiss/ | data, dataviz | Cosmograph WebGL force-graph of .ch domain-nameserver relationships (already added) |
| **RAIS** | 2025 | https://xn--2dk.xyz/dataviz/rais/por_uf | dataviz, data | Biggest companies per state — bubble chart/treemap of Brazil's most-connected companies (already added) |
| **Rio IBGE** | 2025 | https://xn--2dk.xyz/dataviz/rio/ibge | dataviz, data | MapLibre point map of Rio de Janeiro establishments (already added) |
| **Friba** | 2025 | https://xn--2dk.xyz/dataviz/friba/pop_3d | dataviz, data | Nova Friburgo 3D population/economic analysis (already added) |
| **pt-2026** | 2026 | https://xn--2dk.xyz/dataviz/pt-2026/ | work, dataviz | Portuguese electoral viz (already added) |
| **Pegadas Tigrinho** | 2025 | https://tinyurl.com/pegadas-tigrim | data, dataviz | **ADD** — Corporate network investigation of Tigrinho gaming empire (owners, partners, companies) |
| **Swiss-BR** | 2025 | https://tinyurl.com/swiss-brazilian-network | data, dataviz | **ADD** — Network of Swiss companies with registered headquarters in Brazil |

---

## About — Springy Graph (meio.js / graph.js)

The "About" section in `index.html` renders a Springy.js force-directed graph from `graph.js`.
The graph includes **all 42 active portfolio projects** organized around 5 category nodes:

- `[DATA]` — data tools, datasets, investigative data infrastructure
- `[DATAVIZ]` — interactive visualizations, maps, charts
- `[DESIGN]` — web design, CMS, client UI projects
- `[TOOL]` — CLI tools, frameworks, reusable libraries
- `[WORK]` — commissioned/professional work

Every card in the grid has a corresponding node in the graph. Clicking a node opens the project URL.
The graph is initialized lazily via `initMeio()` in `meio.js`, called on first About-section reveal.

---

## Projects from /Volumes/EXTRA — Notable but not portfolio-ready

These exist in the archive and are part of the production history, but don't need a slot on the live site:

| Project | Notes |
|---|---|
| otherbrecht | Predecessor/source of Connectas work above — keep as archive |
| makingoff | Rare film seeder monitor — covered by Copyfight Acervo entry |
| renda (Crystal) | Already on portfolio as Renda 2018 |
| covid19 (Ruby) | Listed above for works.html |
| consulta-natural | Already on portfolio |
| steganos (Ruby) | Already on portfolio; Rust rewrite in update above |
| celohuobihack / moedax | Web3/crypto; doesn't align with current Basel/AI narrative |
| uqt (Ruby origin) | Superseded by the Node.js rewrite listed above |
