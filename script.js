// Tableau de correspondance Regex
const markdownToHtmlTable = {
  heading1: /^#\s+(.*)/,
  heading2: /^##\s+(.*)/,
  heading3: /^###\s+(.*)/,
  heading4: /^####\s+(.*)/,
  heading5: /^#####\s+(.*)/,
  heading6: /^######\s+(.*)/,

  bold: /(\*\*|__)(.*?)\1/g,
  italic: /(\*|_)([^*_]+?)\1/g,

  img: /!\[(.*?)\]\((.*?)\)/g,
  link: /\[(.*?)\]\((.*?)\)/g,

  quote: /^>\s+(.*)/i
};

// Définition des variables
const markdownInput = document.getElementById('markdown-input');
const rawHtml = document.getElementById('html-output');
const htmlPreview = document.getElementById('preview');

// Fonction de conversion 
const convertMarkdown = () => {

};
