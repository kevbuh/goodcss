// Remove existing styles
document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());

// Remove inline styles
document.querySelectorAll('*').forEach(el => el.style.cssText = '');

// Create new simplified styles
const style = document.createElement('style');
style.textContent = `
  * {
    all: revert;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, sans-serif !important;
    line-height: 1.6;
    max-width: 100%;
  }

  body {
    padding: 2rem 1rem !important;
    max-width: 768px;
    margin: 0 auto !important;
    color: #333;
    font-size: 1.1rem;
    background-color: #f9f9f9;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1.5em 0 0.8em;
    line-height: 1.3;
    color: #222;
  }

  p, li {
    margin: 0.8em 0;
    max-width: 75ch;
  }

  img, video {
    max-width: min(100%, 600px) !important;
    max-height: 400px !important;
    height: auto !important;
    display: block;
    margin: 1.5rem auto;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  a {
    color: #0066cc;
    text-decoration: underline;
  }

  table {
    border-collapse: collapse;
    margin: 2rem 0;
    width: 100%;
    overflow-x: auto;
    display: block;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  code, pre {
    font-family: Monaco, Consolas, monospace !important;
    background-color: #f4f4f4;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  iframe {
    max-width: 100% !important;
    max-height: 400px !important;
    margin: 1.5rem 0;
  }

  
`;

document.head.appendChild(style);
