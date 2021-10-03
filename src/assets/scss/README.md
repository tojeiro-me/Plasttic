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

### Namespace (TESTING)


**1. CSS Variable Namespace**

- —fnt-sansserif
- —fnt-serif
- —fnt-monospace
- —fwt-bold
- —clr-primary-grey
- —clr-primary-blue 
- *(--element/type-attribute/description-attribute/variant)*


**2. Sass Variables Namespace** 

- vars_clr-logo-blue
- clrs_logo-blue-light
- *(file_element/type-attribute/description-attribute/variant)*


**3. Files: Variables Prefixes** 

abstracts/
- functions: fct_
- mixins: mxn_
- variables: var_
- (breakpoints: brk_)
- (colors: clr_)
- (type: typ_)

base/
- animations: anm_
- base: bse_
- font: fnt_
- helpers: hlp_
- reset: *not applicable*
- root: *css namespace (—element-attribute-variant)*
- typography: tpg_

components/
- buttons: btn_
- cards: crd_
- navigation: nav_

layout/
- footer: ftr_
- header: hdr_

pages/
- home: home_ / pghme_
- contacts: cnct_ / pgcnt_

themes_/
- default: thdft_

vendors/
- *(not applicable)*


