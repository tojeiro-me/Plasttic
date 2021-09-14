# [Monkey13: WebSite Template](https://monkey13.studio) - github link?

## About

A Front-End Template for Websites and Web Apps: HTML boilerplate, File structure, Conventions & more.

## Best Practices

- Semantic HTML (`header / nav / div / main / section / article / aside / footer`)
- Clean Code
- Code Splitting
- Commenting
- CSS Reset
- SASS Partials
- Color System: HSL
- Performance

- More: [SASS Guidelines](https://sass-guidelin.es/), [SASS Boilerplate](https://github.com/KittyGiraudel/sass-boilerplate),[A Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/), [Design Principles](https://principles.adactio.com/), [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)

## Performance

- Lazy Loading (images, ...)

## Namespace

- Naming: Prefix, BEM, Camelcase
- Prefix: CSS (`.m13-form__button--hidden`, ID: `#m13i-ID`), JS (`m13j_functionName`) and PHP (`m13f_funtionName`) Note: avoid naming conflicts and provide context
- CSS: [BEM](http://getbem.com)

## Customization

- HTML/CSS/JS Files: Find "TODO:" in comments, for info that needs to be changed or checked. After, change to "DONE:"

## VS Code

- [VS Code](https://code.visualstudio.com/)
- Extensions: Auto Close Tag, Auto Rename Tag, Bracket Pair Colorizer, CSS Peek, GitHub Pull Requests and Issues, GitHub Repositories, GitLens, HTML CSS Support, IntelliSense for CSS, JavaScript (ES6) code snippets, Live Server or Live Preview, Path Intellisense, PHP Intelephense, Prettier, SCSS IntelliSense, SVG Previewer, Tabnine, Turbo Console Log, Vetur.
- [VS Code Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

## Browsers

- [Chrome](https://www.google.com/chrome/)
- Extensions: Cacher, JavaScript and CSS Code Beautifier, Lightshot, Live Server Web Extension, MarkUp For Chrome, Sizzy, Stark, Vue.js devtools, Wappalyzer, Web Vitals, What Font, Window Resizer.
- [Firefox](https://www.mozilla.org/en-US/firefox/new/)

## UI/UX

- [Figma](https://www.figma.com/)
- Plugins:
- Templates: Wireframe (StoryTeller), ERD (Arctype ERD), 

## Codekit

- [Codekit](https://codekitapp.com/)
- Alternative: [Prepos](https://prepros.io/)

## Other references

- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [sanitize.css](https://nicedoc.io/jonathantneal/sanitize.css/)
- [Vue.js](https://vuejs.org/)

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
