[![Plasttic](https://plasttic.dev/assets/img/social/default-banner-1200_630.png)](https://plasttic.dev)

# Plasttic

---

## :warning: Implementing Atomic Design with CSS and PostCSS :warning:

_Please check the [CHANGELOG](/CHANGELOG.md) for major or breaking changes_

---

## About

---

Plasttic is a complete and professional Front-End Template for Websites and Web Apps: HTML and CSS/PostCSS boilerplate, Atomic Design System, Static Site Workflow, File structure, Conventions & Best Practices.

This is not intended to be a framework, but rather a starting point. It includes a starter HTML, CSS and PostCSS code based on best practices, allowing the developer to customize it to fit their project needs and even their own methodology.

You will find documentation in the files comments and some notes in the `docs` folder. Documentation site coming soon!

## Links

---

- [Website](https://plasttic.dev)
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

## Usage

---

### 1. HTML Boilerplate

- [HTML Boilerplate](./src/index.html)

### 2. Minimal Template

- [Plasttic Minimal Template](https://github.com/tojeiro-me/Plasttic-template)

### 3. Templates/Starter Pages

- [Under Construction](https://boilerplate.plasttic.dev/temporary.html)
- [404 Error Page](https://boilerplate.plasttic.dev/404.html)
- Single Page (Soon!)

### 4. Static Site Workflow

- [HTML Boilerplate](./src/boilerplate.html), [Templates](https://boilerplate.plasttic.dev), Custom Dev/Build Scripts, File/Folder Structure, [Atomic Design CSS](docs/atomic-design.md), [CSS Reset](./src/assets/css/00_reset.css), [Print CSS](./src/assets/css/print.css), PostCSS, Code Optimization, Linting, Image Optimization (Soon!), Testing (Soon!)
- Start:

  - Step 1: Copy the repository `git clone https://github.com/tojeiro-me/Plasttic.git` \*\*
  - Step 2: Run `cd Plasttic`
  - Step 3: Run `npm install` to install the needed dependencies
  - Step 4: Run `npm run dev` to start the dev server on `http://localhost:8000` \*
  - Step 5: Run `npm run build` when you are ready to publish \*

  - \*Source folder: `src/`, Dev folder: `dev/`, Build folder: `dist/`
  - \*\*You can also create your own repo clicking [Plasttic template](https://github.com/tojeiro-me/Plasttic/generate) and then follow from step 3 on your machine

_Search for "TODO:" in comments, relative to info that needs to be changed or checked. After, change it to "DONE:". If using VS Code, use the [Todo Tree extension](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) or [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)_

- Development with https:
  - Step 1: Run `mkdir certs`
  - Step 2: Run `cd certs`
  - Step 3: Install certificate with [mkcert](https://mkcert.dev/)
  - Step 4: Check certificate filenames and/or path in the file `browser-sync.cjs`
  - Step 5: Run `npm run dev:ssl` to start the dev server on `https://localhost:8000`

## Documentation

---

- File Comments
- Check [docs](./docs) folder
- Documentation website (Soon!)

## License

---

- [MIT license](https://opensource.org/licenses/MIT)
