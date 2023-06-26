/* @license Plasttic v2.2 | MIT License | https://plasttic.dev/ */

/* DO NOT DELETE */
/* modules folder must contain at least one file (ts/js), empty or not */

/**
 * plasttic.js
 *
 * Project/Page scripts
 * This are scripts that are specific to the project
 *
 */

/**
 * Copy HTML Boilerplate to clipboard
 * Use: copy code to clipboard on button click
 * Page: code.html
 */

export function copyCodeToClipboard(copyCodeBtn: HTMLElement): void {
  copyCodeBtn.addEventListener('click', () => {
    const codeText = document.getElementsByTagName('code')[0].innerText.trim();
    navigator.clipboard.writeText(codeText);
    copyCodeBtn.innerText = 'Copied!';
    setTimeout(() => {
      copyCodeBtn.innerText = 'Copy';
    }, 1500);
  });
}
