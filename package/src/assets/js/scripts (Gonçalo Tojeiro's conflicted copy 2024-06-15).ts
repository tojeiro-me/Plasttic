/* @license Plasttic v2.3 | MIT License | https://plasttic.dev/ */

/* DO NOT DELETE OR RENAME */
/* scripts.ts or scripts.js must exist */

/**
 * scripts.ts/js
 *
 * Global scripts
 * This are utility scripts that can be used across projects
 *
 * Note: create other Javascript files if needed
 * in the build process they will be concatenated
 * and minified into one file scripts.min.js,
 * except files on the vendor folder.
 */

/**
 * Imports
 *
 * 1. ...
 */

// import someThing from './modules/module.js';
// someThing();

/**
 * Global variables
 * variables that can be used in multiple functions
 *
 * 1. Current Date
 */

const dateCurrent = new Date();

/**
 * Set current year in footer copyright
 * Use: ©2021-<span id="footer-year">footerYear</span> Company
 */
const footerYear = document.getElementById(
  'footer-year'
) as HTMLSpanElement | null;

if (footerYear) {
  footerYear.innerText = dateCurrent.getFullYear().toString();
}

/**
 * Reset form values on page load
 * Use:
 * <form id="form-name">
 * <input type="text">
 * </form>
 */

// const form = document.getElementById('form-name') as HTMLFormElement | null;

// form?.reset();

/**
 * Copy code to clipboard in code.html
 * Use: copy code to clipboard on button click
 * Page: code.html
 */
const copyCodeBtn = document.getElementById('copy-code-btn');

if (copyCodeBtn) {
  import('./modules/module.js').then(({ copyCodeToClipboard }) => {
    copyCodeToClipboard(copyCodeBtn);
  });
}
