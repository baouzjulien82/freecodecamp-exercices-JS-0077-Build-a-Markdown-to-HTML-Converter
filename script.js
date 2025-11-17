// Tableau de correspondance Regex
const markdownToHtmlTable = {
  heading1: /^# (.*)$/gm,
  heading2: /^## (.*)$/gm,
  heading3: /^### (.*)$/gm,

  bold: /(\*\*|__)(.*?)\1/g,
  italic: /(\*|_)([^*_]+?)\1/g,

  img: /!\[(.*?)\]\((.*?)\)/g,
  link: /\[(.*?)\]\((.*?)\)/g,

  quote: /^> (.*)$/gm
};

// Définition des variables
const markdownInput = document.getElementById('markdown-input');
const rawHtml = document.getElementById('html-output');
const htmlPreview = document.getElementById('preview');

// Fonction de conversion 
const convertMarkdown = () => {
  let html = markdownInput.value;

  // Headings
  html = html.replace(markdownToHtmlTable.heading1, "<h1>$1</h1>");
  html = html.replace(markdownToHtmlTable.heading2, "<h2>$1</h2>");
  html = html.replace(markdownToHtmlTable.heading3, "<h3>$1</h3>");

  // Blockquotes
  html = html.replace(markdownToHtmlTable.quote, "<blockquote>$1</blockquote>");

  // Images
  html = html.replace(markdownToHtmlTable.img, "<img alt='$1' src='$2'>");

  // Links
  html = html.replace(markdownToHtmlTable.link, "<a href='$2'>$1</a>");

  // Bold & Italic
  html = html.replace(markdownToHtmlTable.bold, "<strong>$2</strong>");
  html = html.replace(markdownToHtmlTable.italic, "<em>$2</em>");

  // Mettre à jour l'affichage
  rawHtml.textContent = html;       // HTML brut
  htmlPreview.innerHTML = html;     // Rendu visuel

  // Retourner le HTML final pour les tests
  return html;
};

// AddEventListener sur l'input
markdownInput.addEventListener('input', convertMarkdown);
