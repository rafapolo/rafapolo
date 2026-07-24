"""
Clones Rafael_Polo_Lebenslauf.docx and replaces every German string with
the English equivalent, preserving all formatting, layout, and text boxes.
"""
import shutil, copy
from docx import Document
from docx.oxml.ns import qn

SRC = 'Rafael_Polo_Lebenslauf.docx'
OUT = 'Rafael_Polo_CV_EN.docx'
shutil.copy2(SRC, OUT)

doc = Document(OUT)


# ── helper ────────────────────────────────────────────────────────────────────

def set_para(para, new_text):
    """Replace paragraph text, keeping first run's formatting intact."""
    if not para.runs:
        return
    para.runs[0].text = new_text
    for run in para.runs[1:]:
        run.text = ''


def find_para(paragraphs, partial):
    """Return first paragraph whose text contains `partial`."""
    for p in paragraphs:
        if partial in p.text:
            return p
    return None


# ── gather all paragraphs (body + every text box) ────────────────────────────

body_paras = doc.paragraphs

txbx_paras = []
for tb in doc.element.body.findall('.//' + qn('w:txbxContent')):
    for p_el in tb.findall(qn('w:p')):
        # wrap in a Paragraph-like proxy to access .runs / .text
        from docx.text.paragraph import Paragraph
        txbx_paras.append(Paragraph(p_el, None))

all_paras = body_paras + txbx_paras


# ── main body replacements (by paragraph index) ──────────────────────────────

BODY = body_paras   # alias

# Title
set_para(BODY[0], 'Curriculum Vitae')

# Section headings
set_para(find_para(BODY, 'PROFIL'),              'PROFILE')
set_para(find_para(BODY, 'BERUFSERFAHRUNG'),     'PROFESSIONAL EXPERIENCE')
set_para(find_para(BODY, 'AUS- UND WEITER'),     'EDUCATION')
set_para(find_para(BODY, 'SPRACHEN'),            'LANGUAGES')
set_para(find_para(BODY, 'RELEVANTE PROJEKTE'),  'SELECTED PROJECTS')

# Profile text
set_para(find_para(BODY, 'Seit über 20 Jahren'),
    'Senior software engineer with 20+ years delivering data infrastructure, '
    'full-stack platforms, and AI-powered tools across Switzerland, Germany, '
    'Greece, Portugal, and Brazil. I own problems end-to-end — from pipeline '
    'design and architecture to production deployment and stakeholder '
    'communication. Recent focus: data engineering, ETL, SQL, and AI/LLM '
    'integrations for analytical and investigative use cases.')

# Tech skills (same order, English)
set_para(find_para(BODY, 'Git •'),
    'Git • Database Modeling & SQL • SaaS • Data Science & Visualization • '
    'Web Development • UX • Rapid Prototyping • AI Agents • System Analysis & '
    'UML • MVC Architecture • Web Crawlers & ETL Bots • REST APIs • Linux • '
    'VPS • SSH • DevOps • CI/CD • JavaScript Frameworks • Ruby • Python • '
    'Docker / Containerization • OWASP')

# ── Experience entries ────────────────────────────────────────────────────────

# Freelance 2025
set_para(find_para(BODY, '04/2025'),
    '04/2025 – present')
set_para(find_para(BODY, 'Selbstständiger Data- und Visualisierungsingenieur'),
    'Freelance Data & Visualization Engineer  •  Basel, CH')
set_para(find_para(BODY, 'Konzepte für gross'),
    'Large-scale cartography and data-mapping platform design')
set_para(find_para(BODY, 'Kartieren von Gebieten'),
    'Interactive network and geographic visualization tooling')
set_para(find_para(BODY, 'Innovatives System für Offline'),
    'Prototyping an innovative offline-first navigation system')

# Swisscom
set_para(find_para(BODY, 'DevOps Ingenieur • Swisscom'),
    'DevOps Engineer  •  Swisscom  •  Zurich, CH')
set_para(find_para(BODY, 'Entwicklung neuer Systemfunktionen'),
    'Maintained and modernized 28 mission-critical internal services (Ruby on Rails)')
set_para(find_para(BODY, 'Bereitstellung mit Docker'),
    'Deployed and operated services with Docker and Kubernetes; strict SLA environment')

# EDGE
set_para(find_para(BODY, 'Senior Tech Lead • EDGE'),
    'Senior Tech Lead  •  EDGE Strategy  •  Zug, CH')
set_para(find_para(BODY, 'Einstellung und Führung'),
    'Contracted and coached 3 external developers and a UX designer')
set_para(find_para(BODY, 'Konzeption und Entwicklung neuer Systeme'),
    'Built TicketSystem, offline PayTool (−98% processing time) & EDGEv2 platform')
set_para(find_para(BODY, 'Infrastruktur-Upgrades und Cybersicherheit'),
    'Infrastructure upgrades, security hardening, CI/CD cut from 14 → 4 min')

# ExtraPolo
set_para(find_para(BODY, 'Selbstständiger IT-Ingenieur • ExtraPolo'),
    'Freelance Software Engineer & Consultant  •  ExtraPolo  •  Brazil · Germany · Greece · Portugal')
set_para(find_para(BODY, 'Anforderungsanalyse mit Kunden'),
    'The Intercept Brasil, Rio Environmental Secretariat, Connectas & 40+ clients')
set_para(find_para(BODY, '+40 Web-Projekte'),
    '40+ open-source projects · github.com/rafapolo')

# Tactical Tech
set_para(find_para(BODY, 'Full-Stack-Entwickler • Tactical'),
    'Full-Stack Developer  •  Tactical Technology Collective  •  Berlin, DE')
set_para(find_para(BODY, 'Datenvisualisierung für investigative'),
    '12 tools for Exposing the Invisible investigative journalism project')
set_para(find_para(BODY, 'Praxisorientierter Workshop'),
    'Security workshop at Chaos Computer Camp 2015 · Transmediale / Connecting Cities')

# T+D
set_para(find_para(BODY, 'Software-Ingenieur • Trommsdorf'),
    'Software Engineer  •  trommsdorff + drüner  •  Berlin, DE')
set_para(find_para(BODY, 'Python und Ruby Systems'),
    'Systems programming in Python and Ruby')
set_para(find_para(BODY, 'Datenbankoptimierung'),
    'Database query optimization with ActiveRecord / Rails')

# Cortex
set_para(find_para(BODY, 'Software-Ingenieur • Cortex'),
    'Software Engineer  •  Cortex Intelligence  •  Rio de Janeiro, BR')
set_para(find_para(BODY, 'Datenbankmodellierung'),
    'Database modeling and SaaS feature development in Java')
set_para(find_para(BODY, 'Entwicklung von Crawlern für ETL'),
    'Built web crawlers for data mining and ETL pipelines')

# ── Education ─────────────────────────────────────────────────────────────────

set_para(find_para(BODY, 'NOVA Information Management School, Lissabon'),
    'NOVA Information Management School, Lisbon, PT')

# ── Languages ─────────────────────────────────────────────────────────────────

set_para(find_para(BODY, 'Deutsch'),       'German\t\tB1 — telc certificate')
set_para(find_para(BODY, 'Englisch'),      'English\t\tFluent')
set_para(find_para(BODY, 'Spanisch'),      'Spanish\t\tFluent')
set_para(find_para(BODY, 'Griechisch'),    'Greek\t\tA2')
set_para(find_para(BODY, 'Portugiesisch'), 'Portuguese\tNative')

# ── Projects (replace with Swiss-focused) ─────────────────────────────────────

set_para(find_para(BODY, 'VISO – 2025'),          'helvetiscan – 2024')
set_para(find_para(BODY, 'Technologien: Javascript, D3.js, WASM'),
                                                   'Technologies: Rust, Node.js')
set_para(find_para(BODY, 'VISO — Interaktives'),
    'helvetiscan — Full scanner and mapper of 2.5M+ Swiss .ch domains: '
    'HTTP, DNS, TLS, WHOIS, CVE. Sector classification, sovereignty scoring, '
    'risk benchmarking, interactive force-graph.')
set_para(find_para(BODY, 'https://github.com/rafapolo/viso'),
    'https://github.com/rafapolo/helvetiscan')

set_para(find_para(BODY, 'ミ.xyz – 2025'),        'swissviz – 2024')
set_para(find_para(BODY, 'Technologien: Javascript, D3.js, Altair'),
                                                   'Technologies: JavaScript, Deck.gl, MapLibre')
set_para(find_para(BODY, 'Interaktive Web-Plattform'),
    'swissviz — Interactive GPU-rendered map of Swiss companies from open data: '
    'CSV pipeline → Mapbox geocoding → gzip → browser tiles with CartoDB basemap.')
set_para(find_para(BODY, 'https://ミ.xyz'),       'https://xn--2dk.xyz/dataviz/swiss/')

set_para(find_para(BODY, 'Steganos – 2022'),       'VISO – 2025')
set_para(find_para(BODY, 'Technologien: Ruby'),    'Technologies: JavaScript, D3.js, DuckDB WASM')
set_para(find_para(BODY, 'Algorithmus zur Kodierung'),
    'VISO — Interactive network graph + live SQL explorer for Brazilian '
    'parliamentary expenses. Shareable URLs, offline support, multi-layer caching.')
set_para(find_para(BODY, 'https://github.com/rafapolo/steganos'),
    'https://github.com/rafapolo/viso')

set_para(find_para(BODY, 'Rastros – 2021'),        'datative – 2024')
set_para(find_para(BODY, 'Technologien: Processing.org'),
                                                   'Technologies: Bun, Sigma.js, DuckDB WASM')
set_para(find_para(BODY, 'Open-Source-Software zur Echtzeit'),
    'datative — Investigative analysis platform for exploring connections '
    'between companies, partners, and public records — force-directed graphs '
    'with SQL queries over remote Parquet data.')
set_para(find_para(BODY, 'https://github.com/rafapolo/rastros'),
    'https://github.com/rafapolo/datative')


# ── Text boxes ────────────────────────────────────────────────────────────────

def txbx_replace(all_tb_paras, partial, new_text):
    p = find_para(all_tb_paras, partial)
    if p:
        set_para(p, new_text)

txbx_replace(txbx_paras, 'Adresse',         'Address')
txbx_replace(txbx_paras, 'E-Mail',          'Email')
txbx_replace(txbx_paras, 'Geburtsdatum',    'Date of birth')
txbx_replace(txbx_paras, 'Nationalität',    'Nationality')
txbx_replace(txbx_paras, 'Portugiesisch und Brasilianer', 'Portuguese / Brazilian')
txbx_replace(txbx_paras, 'Bewilligung B',   'Swiss B-permit')
txbx_replace(txbx_paras, 'Über mich',       'About')
txbx_replace(txbx_paras, 'Ich reise gern',
    'Lived and worked in 5 countries: Brazil, Germany, Greece, Portugal, '
    'Switzerland. Passionate cyclist — once rode from Berlin to Athens.')
txbx_replace(txbx_paras, 'Freiwilligenarbeit', 'Volunteer')
txbx_replace(txbx_paras, 'Drei Jahre lang',
    'Three years teaching computer science to refugees in Athens (2017); '
    'helped build a computer lab.')
txbx_replace(txbx_paras, 'Stipendium',      'Fellowship')
txbx_replace(txbx_paras, 'In Lissabon (2021)',
    'In Lisbon (2021) I received a foundation grant to develop a '
    'feasibility study for a blockchain exchange platform.')
txbx_replace(txbx_paras, 'Weitere Originalprojekte',
    'Further projects, exhibitions, awards, and fellowships:')


doc.save(OUT)
print(f'✓  {OUT} saved')
