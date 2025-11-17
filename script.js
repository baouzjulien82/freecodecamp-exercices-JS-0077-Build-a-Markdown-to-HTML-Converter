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
}

const convertMarkdown = () => {

};
