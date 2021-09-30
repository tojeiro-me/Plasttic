# [Monkey13: WebSite Boilerplate](https://monkey13.studio)

## About

A Front-End Template for Websites and Web Apps: HTML and Sass boilerplate, File structure, Conventions & more.
See links for more information on the different boilerplates and references.

## Best Practices

- Semantic HTML
- Naming Convention
- Clean Code
- Code Splitting
- Commenting Strategy
- CSS Reset
- SASS Partials
- Style Guides
- Performance
- SEO

- More: [HTML5 Boilerplate v8.0.0)](https://html5boilerplate.com/), [SASS Boilerplate - March 2021](https://github.com/KittyGiraudel/sass-boilerplate),[A Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/), [Design Principles](https://principles.adactio.com/), [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility), [SASS Guidelines - Outdated](https://sass-guidelin.es/)

## Performance

- Lazy Loading (images, youtube, ...)

## Namespace

- Naming: Prefix, BEM, Camelcase
- Prefix: CSS (`.m13-form__button--hidden`, ID: `#m13i-ID`), JS (`m13j_functionName`) and PHP (`m13f_funtionName`) Note: avoid naming conflicts and provide context
- CSS: [BEM](http://getbem.com)

## Customization

- HTML/CSS/JS Files: Find "TODO:" in comments, for info that needs to be changed or checked. After, change to "DONE:"

## VS Code

- [VS Code](https://code.visualstudio.com/)
- Extensions: Auto Close Tag, Auto Rename Tag, CSS Peek, File Utils, GistPad, GitHub Pull Requests and Issues, GitHub Repositories, GitLens, HTML CSS Support, IntelliSense for CSS, JavaScript (ES6) code snippets, Live Server or Live Preview, Path Intellisense, PHP Intelephense, Prettier, SCSS IntelliSense, SVG Previewer, Tabnine, Turbo Console Log, Vetur
- [VS Code Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

## Chrome & Firefox

- [Chrome](https://www.google.com/chrome/)
- Extensions: Cacher, JavaScript and CSS Code Beautifier, Lightshot, Live Server Web Extension, MarkUp For Chrome, Measure-it, Sizzy, Stark, Vue.js devtools, Wappalyzer, Web Vitals, What Font, Window Resizer
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Figma

- [Figma](https://www.figma.com/)
- Plugins: Anima, Arc, Chart, Coda, Color Palettes, Content Reel, Export styles to CSS variables, Figmotion, FigPug Units, Font Preview, Hand>>over, Iconify, Illustrations, Isometric, Lorem Ipsum, LottieFiles, Product Planner, Rename It, SkewDat, Stark, Unsplash, Wireframe
- Templates: ERD (Arctype ERD), Flowchart ISO 5807, Site Map, Wireframe (StoryTeller)
- Alternatives: [Sketch](https://www.sketch.com/), [Adobe XD](https://www.adobe.com/products/xd.html)

## Codekit

- [Codekit](https://codekitapp.com/)
- Alternative: [Prepos](https://prepros.io/)

## Other references

- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++ REVIEW +++++++++++++++++++++++++++

## Parcel Workflow (ISSUE with Build) !!!

- [Parcel v2](https://v2.parceljs.org/)

Issue:

- Build Error: `@parcel/namer-default: Target "main" declares an output file path of "index.js" which does not match the compiled bundle type "html".`

Setup:

- Node.js install [https://nodejs.org/](https://nodejs.org/)
- `npm -v` (NPM version check)
- `npm init -y` (Initialize NPM Package)
- edit package.json (Package Info)
- `npm install parcel --save-dev` (Parcel 2 install)

Development:

- `npm run dev`

Publish:

- `npm run pub`

Reuse:

- Clone the Github repository and run `npm install` to reinstall the dependencies on package.json.
