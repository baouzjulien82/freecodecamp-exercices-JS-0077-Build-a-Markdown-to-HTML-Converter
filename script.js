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
  for(let [key, value] of Object.entries(markdownToHtmlTable)) {
    if(markdownInput.value.match(value)) {
      switch(key) {
        case "heading1":
        rawHtml.textContent = markdownInput.value.replace(value, "<h1>$1</h1>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<h1>$1</h1>");
        break;
        case "heading2":
        rawHtml.textContent = markdownInput.value.replace(value, "<h2>$1</h2>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<h2>$1</h2>");
        break;
        case "heading3":
        rawHtml.textContent = markdownInput.value.replace(value, "<h3>$1</h3>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<h3>$1</h3>");
        break;
        case "heading4":
        rawHtml.textContent = markdownInput.value.replace(value, "<h4>$1</h4>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<h4>$1</h4>");
        break;
        case "heading5":
        rawHtml.textContent = markdownInput.value.replace(value, "<h5>$1</h5>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<h5>$1</h5>");
        break;
        case "heading6":
        rawHtml.textContent = markdownInput.value.replace(value, "<h6>$1</h6>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<h6>$1</h6>");
        break;
        case "bold":
        rawHtml.textContent = markdownInput.value.replace(value, "<strong>$2</strong>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<strong>$2</strong>");
        break;
        case "italic":
        rawHtml.textContent = markdownInput.value.replace(value, "<em>$2</em>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<em>$2</em>");
        break;
        case "img":
        rawHtml.textContent = markdownInput.value.replace(value, "<img alt='$1' src='$2'>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<img alt='$1' src='$2'>");
        break;
        case "link":
        rawHtml.textContent = markdownInput.value.replace(value, "<a href='$2'>$1</a>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<a href='$2'>$1</a>");
        break;
        case "quote":
        rawHtml.textContent = markdownInput.value.replace(value, "<blockquote>$1</blockquote>");
        htmlPreview.innerHTML = markdownInput.value.replace(value, "<blockquote>$1</blockquote>");
        break;
      };
    };
  };
};

// AddEventListener sur l'input
markdownInput.addEventListener('input', convertMarkdown);
