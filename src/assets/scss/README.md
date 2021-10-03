# [Monkey13: WebSite Boilerplate](https://monkey13.studio)

## Sass / CSS

---

### Sass Rapid Debugging

(Debug Sass flies in the Terminal)

1. Install [Node.js](https://nodejs.org)
2. Check if Node.js is installed: run `npm -v`
3. Run `npm init -y`
4. Check file _package.json_
5. Instal Sass `npm install sass --save-dev`
6. To watch and Compile Sass files run `sass --watch src/assets/scss:dev/css`
7. Use [@error, @warn and @debug directives](https://www.sitepoint.com/using-sass-error-warn-and-debug-directives/)
8. Ctrl + C to stop Sass watching

---

### Declaration Sorting

.class {

// content

content: '';

// display

display: flex;

flex-direction: column;

// position

position: relative;

top: 10rem;

left: 10rem;

z-index: -1;

// box-model

background: inherit;

height: 30%;

padding: 2em;

// typography

color: #000;

font-size: 10rem;

text-align: center;

// decoration

border-radius: 0.5rem;

box-shadow: 0 0 20px rgba(0,0,0,1.0);

// manipulation

transform: perspective(10rem);

filter: blur(3rem);

opacity: 0.5;

// animation

}

---

### Namespace (TESTING)

**1. CSS Variable Namespace**

- —fnt-sansserif
- —fnt-serif
- —fnt-monospace
- —fwt-bold
- —clr-primary-grey
- —clr-primary-blue
- _(--element/type-attribute/description-attribute/variant)_

**2. Sass Variables Namespace**

- vars_clr-logo-blue
- clrs_logo-blue-light
- _(file_element/type-attribute/description-attribute/variant)_

**3. Files: Variables Prefixes**

abstracts/

- functions: \_fnct\_\_
- mixins: \_mixn\_\_
- variables: \_vars\_\_
- (breakpoints: \_brkp\_\_)
- (colors: \_clrs\_\_)
- (type: \_type\_\_)

base/

- animations: \_anim\_\_
- base: \_base\_\_
- font: \_font\_\_
- helpers: \_hlpr\_\_
- reset: _not applicable_
- root: _css namespace (—element-attribute-variant)_
- typography: \_typg\_\_

components/

- buttons: \_bttn\_\_
- cards: \_crds\_\_
- navigation: \_navg\_\_

layout/

- footer: \_foot\_\_
- header: \_head\_\_

pages/

- home: \_home\_\_ / \_pghome\_\_
- contacts: \_cntc\_\_ / \_pgcntc\_\_

themes/

- default: \_thmdft\_\_

vendors/

- _(not applicable)_
