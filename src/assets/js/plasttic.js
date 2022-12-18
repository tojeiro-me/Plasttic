/**
 * plasttic.js
 *
 * Project/Page scripts
 * This are scripts that are specific to the project
 *
 * Note: create other Javascript files if needed
 * in the build process they will be concatenated
 * and minified into one file scripts.min.js
 */

/**
 * Copy HTML Boilerplate to clipboard
 * Use: copy code to clipboard on button click
 */
document.getElementById('copy-code-btn').addEventListener('click', () => {
  const codeText = document.getElementsByTagName('code')[0].innerText.trim();
  navigator.clipboard.writeText(codeText);
  document.getElementById('copy-code-btn').innerText = 'Copied!';
});
