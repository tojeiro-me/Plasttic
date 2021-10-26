# [Monkey13: WebSite Boilerplate](https://monkey13.studio)

## About

---

An opinionated Front-End Template for Websites and Web Apps: HTML and Sass boilerplate, File structure, Conventions & more.
See links for more information on the different references.

(There will be more documentation on the different assets folders, until there's no website - documentation is a lot of work, but I'll do my best)

Gonçalo Tojeiro | Monkey13 WebStudio

## Practices Guidelines

---

- Semantic HTML
- Namespaces
- CSS Units Usecases
- Mobile First
- DRY
- Clean Code
- Code Splitting
- SASS Partials
- Commenting Conventions
- CSS Reset
- Style Guides
- Documentation
- Performance
- SEO
- Version Control Repository
- Test and Debug

## Starting Point

---

- [HTML5 Boilerplate v8.0.0](https://html5boilerplate.com/), [SASS Boilerplate - March 2021](https://github.com/KittyGiraudel/sass-boilerplate)(see Sass Guidelines in Reference Material), [A Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/)

## Namespace

---

- Naming: Prefix, BEM, Camelcase
- Prefix: HTML/CSS `.m13-form__button--hidden`, CSS `--m13-property-variation`, JS `m13j_functionName`, other language (`m13f_funtionName`)
- _Note: avoid naming conflicts and provide context_

## Customization

---

- HTML/CSS/JS Files: Search for "TODO:" in comments, relative to info that needs to be changed or checked. After, change it to "DONE:"

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


<script src="https://unpkg.com/petite-vue" defer init></script>
```

- Defer, Async, Init (Javascript files)

```
<script src="https://unpkg.com/petite-vue" defer init></script>
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
    loading="lazy"
    decoding="async"
  />
</picture>

Note: use lazy load on images that are not immediately visible

Youtube: https://css-tricks.com/lazy-load-embedded-youtube-videos/
loading="lazy" full support is still limited to Chrome (Oct 2021)

Also check IntersectionObserver
https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
https://youtu.be/mC93zsEsSrg
```

- Minification (Code, Images) and Gziping
- SVG (use whenever possible)

## More Information

---

- Check for `README.md` files on other folders

## Reference Material

---

- [Design Principles](https://principles.adactio.com/), [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility), [SASS Guidelines](https://sass-guidelin.es/) (Outdated but still relevant), [BEM](http://getbem.com)

## Software

---

### VS Code

- [VS Code](https://code.visualstudio.com/)
- _Extensions: Auto Close Tag, Auto Rename Tag, CSS Peek, File Utils, GistPad, GitHub Pull Requests and Issues, GitHub Repositories, GitLens, HTML CSS Support, IntelliSense for CSS, JavaScript (ES6) code snippets, Live Server or Live Preview, Path Intellisense, PHP Intelephense, Prettier, SCSS IntelliSense, SVG Previewer, Tabnine, Turbo Console Log, Vetur_
- [VS Code Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### Firefox & Chrome

- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- _Firefox Web Developer Tools_
- [Chrome](https://www.google.com/chrome/)
- _Extensions: Cacher, JavaScript and CSS Code Beautifier, Lightshot, Live Server Web Extension, MarkUp For Chrome, Measure-it, Sizzy, Stark, Vue.js devtools, Wappalyzer, Web Vitals, What Font, Window Resizer_

### Figma

- [Figma](https://www.figma.com/)
- _Plugins: Anima, Arc, Chart, Coda, Color Palettes, Content Reel, Export styles to CSS variables, Figmotion, FigPug Units, Font Preview, Hand>>over, Iconify, Illustrations, Isometric, Lorem Ipsum, LottieFiles, Product Planner, Rename It, SkewDat, Stark, Unsplash, Wireframe_
- _Templates: ERD (Arctype ERD), Flowchart ISO 5807, Site Map, Wireframe (StoryTeller)_
- Alternatives: [Sketch](https://www.sketch.com/), [Adobe XD](https://www.adobe.com/products/xd.html)

### Codekit

- [Codekit](https://codekitapp.com/)
- Alternative: [Prepos](https://prepros.io/)

- Note: Still testing package managers solutions

## License

---

- [MIT license](https://opensource.org/licenses/MIT)
