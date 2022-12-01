/**
 * main.js
 *
 * Main / Global scripts
 * Note: create other Javascript files if needed
 * in the build process they will be concatenated
 * and minified into one file scripts.min.js
 */

/**
 * Start date object into variable
 */
const fullDate = new Date();

/**
 * Set current year in footer copyright
 */
document.getElementById('footer-year').innerText = fullDate.getFullYear();
