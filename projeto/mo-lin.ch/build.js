const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Configuration
const config = {
  templatesDir: './templates',
  dataDir: './data',
  outputDir: './',
  languages: ['de', 'zh']
};

// Helper functions
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

class SiteGenerator {
  constructor() {
    this.templates = {};
    this.partials = {};
    this.data = {};
  }

  // Load all templates and partials
  loadTemplates() {
    // Load main layout
    const layoutPath = path.join(config.templatesDir, 'layout.html');
    this.templates.layout = Handlebars.compile(fs.readFileSync(layoutPath, 'utf8'));

    // Load partials
    const partialsDir = path.join(config.templatesDir, 'partials');
    const partialFiles = fs.readdirSync(partialsDir);

    partialFiles.forEach(file => {
      if (path.extname(file) === '.html') {
        const partialName = path.basename(file, '.html');
        const partialPath = path.join(partialsDir, file);
        const partialContent = fs.readFileSync(partialPath, 'utf8');
        Handlebars.registerPartial(partialName, partialContent);
      }
    });

    // Load page templates
    const pagesDir = path.join(config.templatesDir, 'pages');
    const pageFiles = fs.readdirSync(pagesDir);

    pageFiles.forEach(file => {
      if (path.extname(file) === '.html') {
        const pageName = path.basename(file, '.html');
        const pagePath = path.join(pagesDir, file);
        const pageContent = fs.readFileSync(pagePath, 'utf8');
        Handlebars.registerPartial(`content`, pageContent);
      }
    });
  }

  // Load navigation and page data
  loadData() {
    // Load navigation data
    const navPath = path.join(config.dataDir, 'navigation.json');
    this.data.navigation = JSON.parse(fs.readFileSync(navPath, 'utf8'));

    // Load page data
    const pagesDataDir = path.join(config.dataDir, 'pages');
    const pageDataFiles = fs.readdirSync(pagesDataDir);

    this.data.pages = {};
    pageDataFiles.forEach(file => {
      if (path.extname(file) === '.json') {
        const pageName = path.basename(file, '.json');
        const pageDataPath = path.join(pagesDataDir, file);
        this.data.pages[pageName] = JSON.parse(fs.readFileSync(pageDataPath, 'utf8'));
      }
    });
  }

  // Generate pages for a specific language
  generatePage(pageName, language, outputPath) {
    const navData = this.data.navigation[language];
    const pageData = this.data.pages[pageName][language];

    // Determine asset path based on output location
    const depth = outputPath.split('/').length - 1;
    const assetPath = depth > 0 ? '../'.repeat(depth) + 'assets/' : 'assets/';

    // Combine all data
    const templateData = {
      ...navData,
      ...pageData,
      lang: language,
      homeUrl: language === 'de' ? 'index.html' : '../index.html',
      assetPath: assetPath
    };

    // Set active navigation states
    this.setActiveNavigation(templateData, outputPath);

    // Register the page content as a partial
    const pageTemplatePath = path.join(config.templatesDir, 'pages', `${pageName}.html`);
    const pageTemplate = fs.readFileSync(pageTemplatePath, 'utf8');
    const compiledPageTemplate = Handlebars.compile(pageTemplate);
    const renderedContent = compiledPageTemplate(templateData);

    Handlebars.registerPartial('content', renderedContent);

    // Render complete page
    const html = this.templates.layout(templateData);

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write file
    fs.writeFileSync(outputPath, html);
    console.log(`Generated: ${outputPath}`);
  }

  // Set active navigation states based on current page
  setActiveNavigation(data, currentPath) {
    // Reset all active states
    data.navigationItems.forEach(item => {
      item.active = false;
      if (item.subItems) {
        item.subItems.forEach(subItem => {
          subItem.active = false;
        });
      }
    });

    // Set active state based on current path
    const pathSegments = currentPath.split('/');
    const fileName = pathSegments[pathSegments.length - 1];

    data.navigationItems.forEach(item => {
      if (item.url.endsWith(fileName)) {
        item.active = true;
        item.isOpen = true;
      }

      if (item.subItems) {
        item.subItems.forEach(subItem => {
          if (subItem.url.endsWith(fileName)) {
            subItem.active = true;
            item.isOpen = true;
          }
        });
      }
    });
  }

  // Generate all pages
  generateSite() {
    console.log('🎨 Generating MO LIN website...');

    this.loadTemplates();
    this.loadData();

    // Generate German pages
    this.generatePage('home', 'de', 'index.html');

    // Generate Chinese pages
    this.generatePage('home', 'zh', 'zh/index.html');

    console.log('✅ Site generation complete!');
    console.log('\nGenerated files:');
    console.log('- index.html (German homepage)');
    console.log('- zh/index.html (Chinese homepage)');
    console.log('\n🚀 Template system is now ready for expanding to other pages!');
  }
}

// Run the generator
if (require.main === module) {
  const generator = new SiteGenerator();
  generator.generateSite();
}

module.exports = SiteGenerator;