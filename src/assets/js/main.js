/**
 * main.js
 *
 * Main / Global scripts
 * This are scripts that can be used across multiple projects
 *
 * Note: create other Javascript files if needed
 * in the build process they will be concatenated
 * and minified into one file scripts.min.js,
 * except files on the vendor folder.
 */

/**
 * Initialize date object into variable
 */
const dateCurrent = new Date();

/**
 * Set current year in footer copyright
 * Use: ©2021-<span id="footer-year"></span>
 */
document.getElementById('footer-year').innerText = dateCurrent.getFullYear();

/**
 * Reset form values on page load
 */
// document.getElementById("formContact").reset();
