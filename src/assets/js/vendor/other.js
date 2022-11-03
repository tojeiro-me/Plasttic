/**
 * main.js
 *
 * Global scripts
 */

let urlHash = window.location.hash.substring(1);
if (urlHash == '') {
  urlHash = 'inicio';
}
activatePage(urlHash);
window.addEventListener('hashchange', function () {
  urlHash = window.location.hash.substring(1);
  activatePage(urlHash);
});
function activatePage() {
  const tabLinks = document.querySelectorAll('[data-tab-active]');
  for (let i = 0; i < tabLinks.length; i++) {
    const tabLink = tabLinks[i];
    if (tabLink.getAttribute('href') == '#' + urlHash) {
      tabLink.dataset.tabActive = 'on';
    } else {
      tabLink.dataset.tabActive = 'off';
    }
  }
  const tabTextAreas = document.querySelectorAll('[data-text-active]');
  for (let i = 0; i < tabTextAreas.length; i++) {
    const tabText = tabTextAreas[i];
    if (tabText.getAttribute('class') == urlHash) {
      tabText.style.display = 'block';
    } else {
      tabText.style.display = 'none';
    }
  }
}
