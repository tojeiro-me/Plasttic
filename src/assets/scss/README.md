# [Monkey13: WebSite Boilerplate](https://monkey13.studio)

## Sass

---

### Rapid Debugging

(Debug Sass flies in the Terminal)

1. Install [Node.js](https://nodejs.org)
2. Check if Node.js is installed: run `npm -v`
3. Run `npm init -y`
4. Check file *package.json*
5. Instal Sass `npm install sass --save-dev`
6. To watch and Compile Sass files run `sass --watch src/assets/scss:dev/css`
7. Use [@error, @warn and @debug directives](https://www.sitepoint.com/using-sass-error-warn-and-debug-directives/)
8. Ctrl + C to stop Sass watching

---

### Namespace (TEST)

---
CSS Variable Namespace 

—fnt-sansserif
—fnt-serif
—fnt-monospace

—fwt-

—clr-primary-grey
—clr-primary-blue 

---
Sass Variables Namespace 

vars_clr-logo-blue
clrs_logo-blue-light

(file_element/type-attribute/description-attribute/variant)

---
Files: Variables Prefixes 

abstracts/
functions: fctn_
mixins: mixn_
variables: vars_
(breakpoints: brkp_)
(colors: clrs_)
(type: type_)

base/
animations: anim_
base: base_
font: font_
helpers: help_
reset: not applicable 
root: css namespace (—element-attribute-variant)
typography: typg_

components/
buttons: bttn_
cards: card_
navigation: navi_

layout/
footer: foot_
header: head_

pages/
home: home_ / pghome_
contacts: cnct_ / pgcont_

themes_/
default: thmdft_

vendors/
(not applicable)


