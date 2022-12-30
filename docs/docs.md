# DOCS (Notes)

## Namespace

---

- Naming: Prefix, BEM
- Prefix: HTML/CSS classes `.ptt-form__button--hidden`, CSS root custom properties `--ptt-property-variation`

  _\*Note: avoid naming collisions and provide context_

## Performance

---

- Preconnect, DNS-prefetch, Preload (CDN, Fonts)

```
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin>
<link rel="dns-prefetch" href="https://fonts.googleapis.com/">

<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
/>
<noscript>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
  />
</noscript>
```

```
<link rel="preconnect" href="https://unpkg.com/" crossorigin>
<link rel="dns-prefetch" href="https://unpkg.com/">


<script src="https://unpkg.com/petite-vue" defer></script>
```

- Defer, Async (Javascript files)

```
<script src="https://unpkg.com/petite-vue" defer></script>
<script src="assets/js/site/_global.min.js" defer></script>
```

- Lazy Loading (Images, Youtube) + Async Decode

```
<picture>
  <!-- If this type(avif) is supported, use this src -->
  <source
    type="image/avif"
    srcset="my-image.avif"
  />
  <!-- Else, if this type(webp) is supported, use this src instead -->
  <source
    type="image/webp"
    srcset="my-image.webp"
  />
  <!-- Else, fall back to jpg -->
  <img
    src="my-image.jpg"
    alt="A test image"
    width="400px"
    height="200px"
    loading="lazy"
    decoding="async"
  />
</picture>

Note: use lazy load on images that are not immediately visible.
You can use just the <img> code for simplicity.

Youtube: https://css-tricks.com/lazy-load-embedded-youtube-videos/
loading="lazy" full support is still limited to Chrome (Oct 2021)

Also check IntersectionObserver
https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
https://youtu.be/mC93zsEsSrg
```

- Resize images to the max size you will need
- Minification (Code, Images) and Gziping
- Webp and SVG (use whenever possible)

## More Information

---

- VSCode Extensions: see .vscode folder
- VSCode Project settings: see config files in the project root and .vscode folder

## Reference Material

---

- [Design Principles](https://principles.adactio.com/), [Accessibility](https://web.dev/learn/accessibility/), [Atomic Design](https://atomicdesign.bradfrost.com/), [BEM](http://getbem.com)

## Software

---

### VS Code

- [VS Code](https://code.visualstudio.com/)
- [VS Code Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### Firefox & Chrome

- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Chrome](https://www.google.com/chrome/)
- _Developer Tools_

### Polypane

- [Polypane](https://polypane.app/)
