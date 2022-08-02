![Web.Boilerplate by Monkey13](http://boilerplate.monkey13.studio/assets/img/logo/og_logo.png)

# [Web.Boilerplate](http://boilerplate.monkey13.studio)

---
-------------------------------------------------
:loudspeaker:  Working on v2 -- Atomic Design Implementation
-------------------------------------------------
---

## About

---

An opinionated Front-End Template for Websites and Web Apps: HTML and CSS/Sass boilerplate, File structure, Conventions & more.

This is not intended to be a framework, but rather a starting point. It includes a starter html, sass and css code based on best practices, allowing the developer to customize it to fit their project needs and even their own methodology.

You will find documentation (developing as I go) in the `docs` folder, and some references in the comments.

Thank you!
Gonçalo Tojeiro | Monkey13 WebStudio

## Practices Guidelines

---

- UX/UI/CX
- Semantic HTML
- Clean Code
- Namespaces
- Commenting Conventions
- CSS Units Usecases
- Mobile First
- DRY
- Code Splitting
- SASS Partials
- Web Components
- CSS Reset
- Atomic Design
- Style Guides / Design System
- Accessability
- Documentation
- Performance
- SEO
- Version Control Repository
- Test and Debug

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
- SVG (use whenever possible)

## More Information

---

- Check other `README.md` files

## Reference Material

---

- [Design Principles](https://principles.adactio.com/), [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility), [SASS Guidelines](https://sass-guidelin.es/) (Outdated but still relevant), [BEM](http://getbem.com)

## Software

---

### VS Code

- [VS Code](https://code.visualstudio.com/)
- _Extensions: Auto Close Tag, Auto Rename Tag, CSS Peek, ESLint, File Utils, GistPad, GitHub Pull Requests and Issues, GitHub Repositories, GitLens, HTML CSS Support, IntelliSense for CSS, JavaScript (ES6) code snippets, Live Server or Live Preview, Path Intellisense, PHP Intelephense, Prettier, SCSS IntelliSense, SVG Previewer, Tabnine, Turbo Console Log, Vetur_
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
