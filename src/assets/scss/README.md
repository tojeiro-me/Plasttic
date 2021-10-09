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

### Folder Structure

(Development order: base > abstract > layout > components > pages > themes)

abstract/

    code not processed by Sass (variables, mixins, functions, ...)
    to reuse on styles across the other files

- animations (@keyframes)
- functions
- mixins
- utilities (utility classes)
- variables (maps and single variables)

base/

    everything that is generic in a website project

- base (body, links)
- fonts (font-face)
- helpers
- root (custom Properties)
- typography (h1-h6, paragraphs)

components/

    reusable layout elements

- buttons
- cards
- forms

layout/

    global layout styles

- footer
- header
- layout (grid, flexbox)
- navigation (top, bottom, mobile, sidebar)

pages/

    page specific styles

- home

themes/

    theme variation styles
    defined in theming implementation

- default

---

### Declaration Sorting

```
.class {
```

// content

```
content: '';
```

// display

```
display: flex;
flex-direction: column;
```

// position

```
position: relative;
top: 10rem;
left: 10rem;
z-index: -1;
```

// box-model

```
background: inherit;
height: 30%;
padding: 2em;
```

// typography

```
color: #000;
font-size: 10rem;
text-align: center;
```

// decoration

```
border-radius: 0.5rem;
box-shadow: 0 0 20px rgba(0,0,0,1.0);
```

// manipulation

```
transform: perspective(10rem);
filter: blur(3rem);
opacity: 0.5;
```

// animation

```
transition: all 1s ease-out;
```

```
}
```

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
- _(prefix_element/type-attribute/description-attribute/variant)_

**3. Files: Variables Prefixes**

abstracts/

- animations: `anim_`
- functions: `fnct_`
- mixins: `mixn_`
- utilities `util_`
- variables: `vars_`
- breakpoints: `brkp_` \*
- colors: `clrs_` \*
- type: `type_` \*

\*used when needed, to breakdown the variables file

base/

- base: `base_`
- fonts: `fnts_`
- helpers: `hlpr_`
- root: _`(css namespace: —-element-attribute-variant)`_
- typography: `typg_`

components/

- buttons: `bttn_`
- cards: `crds_`
- forms: `frms_`

layout/

- footer: `foot_`
- header: `head_`
- layout: `layt_`
- navigation: `navg_`

pages/

- home: `home_` / `pghome_`
- contacts: `cntc_` / `pgcntc_`

themes/

- default: `thmdft_`

vendors/

- _`(not applicable)`_

---

### Units

- `rem` (font-size)
- `em/rem` (padding)
- `%` (width size)
- `ch` (line length - max: 45 to 75ch)
- `vh` (height size - min-height) \*
- `px` (min-width/max-width) \*

\*only when justified. Avoid fixed sizes and height setting.

Experiment:

- `vw` (responsive big titles)

---

### Screen Sizes and Breakpoints (2021)

_(sizes in pixels / worldwide use in %)_

- Most used breakpoints: 480, 768, 1024, 1280
- Most used screen resolutions: 1920x1080, 1366x768, 360x640, 414x896
- Screen resolution market share:
- Desktop sizes: 1024x768 (3%) to 1920x1080 (22%) - 1366x768 (20%)
- Tablet Sizes: 962x601 (4%) to 1280x800 (7%) - 1024x768 (40%)
- Mobile: 360x640 (9%) to 414x896 (7%)
