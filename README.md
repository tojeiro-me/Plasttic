[![Plasttic](https://plasttic.dev/repo-banner-1400w.png)](https://plasttic.dev)

# Plasttic Web Workflow

## :warning: Implementing Atomic Design with CSS and PostCSS :warning:

### Documentation under development :construction:

_Please check the [CHANGELOG](/CHANGELOG.md) for major or breaking changes_

---

## About

---

Plasttic is a complete and professional Front-End development environment for Websites and Web Apps: HTML and CSS/PostCSS boilerplate, Atomic Design System, Dev/Build Scripts, File structure, Conventions & Best Practices.

This is not intended to be a framework, but rather a starting point, allowing the developer to customize it to fit their project needs and even their own methodology, using as much, or as little, as needed.

You will find documentation in the files comments and some notes in the `docs` folder :construction: Documentation site coming soon!

### Related projects:

---

- [Plasttic CSS Reset](https://github.com/tojeiro-me/Plasttic-reset)

- [Plasttic HTML Boilerplate](https://github.com/tojeiro-me/Plasttic-boilerplate)

---

## Links

---

- [Website](https://plasttic.dev) :construction:
- Documentation (Soon!)
- [Twitter](https://twitter.com/Plasttic_Dev)
- [Mastodon](https://mastodon.social/@plasttic)

## Practices Guidelines

---

- Performance/Core Web Vitals
- Accessibility
- Best Practices/Conventions
- SEO/Social Media
- CSS Reset
- BEM Methodology
- Design System/Atomic Design
- Clean Code
- Semantic HTML
- Mobile First
- Comments/Documentation
- Debug/Test

## Start

---

### Workflow

- Custom Dev/Build Scripts, File/Folder Structure, [HTML Boilerplate](https://github.com/tojeiro-me/Plasttic-boilerplate/blob/master/index.html), [CSS Reset](https://github.com/tojeiro-me/Plasttic-reset), [Templates](https://boilerplate.plasttic.dev), [Atomic Design CSS](docs/atomic-design.md), [Print CSS](./src/assets/css/print.css), PostCSS, CSS/JS Minification, Linting, Image Optimization (Soon!), Testing (Soon!)

- Install:

  - Step 1: Copy the repository `git clone https://github.com/tojeiro-me/Plasttic.git` \*\*
  - Step 2: Run `cd Plasttic`
  - Step 3: Run `npm install` to install the needed dependencies
  - Step 4: Run `npm run dev` to start the dev server on `http://localhost:8000` \*
  - Step 5: Run `npm run build` when you are ready to publish \*

  - \*Source folder: `src/`, Dev folder: `dev/`, Build folder: `dist/`
  - \*\*You can also create your own repo clicking [Plasttic template](https://github.com/tojeiro-me/Plasttic/generate) and then follow from step 3 on your machine

- Customize:
  
  - Search for "TODO:" in comments, relative to info that needs to be changed or checked. After, change it to "DONE:". If using VS Code, use the [Todo Tree extension](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) or [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

- Development with https:
  - Step 1: Run `mkdir certs`
  - Step 2: Run `cd certs`
  - Step 3: Install certificate with [mkcert](https://mkcert.dev/)
  - Step 4: Check certificate filenames and/or path in the file `browser-sync.cjs`
  - Step 5: Run `npm run dev:ssl` to start the dev server on `https://localhost:8000`

## Template pages

---

- [Under Construction](https://boilerplate.plasttic.dev/temporary.html)
- [404 Error Page](https://boilerplate.plasttic.dev/404.html)
- Single Page (Soon!)

## Documentation

---

- File Comments
- Check [docs](./docs) folder :construction:
- Documentation website (Soon!)

## License

---

- [MIT](./LICENSE)
