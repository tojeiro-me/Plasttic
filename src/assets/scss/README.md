# [Monkey13: WebSite Boilerplate](https://monkey13.studio)

## Sass

---

### Rapid Debugging

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

- functions: _fnct\__
- mixins: _mixn\__
- variables: _vars\__
- (breakpoints: _brkp\__)
- (colors: _clrs\__)
- (type: _type\__)

base/

- animations: _anim\__
- base: _base\__
- font: _font\__
- helpers: _hlpr\__
- reset: _not applicable_
- root: _css namespace (—element-attribute-variant)_
- typography: _typg\__

components/

- buttons: _bttn\__
- cards: _crds\__
- navigation: _navg\__

layout/

- footer: _foot\__
- header: _head\__

pages/

- home: _home\__ / _pghome\__
- contacts: _cntc\__ / _pgcntc\__

themes/

- default: _thmdft\__

vendors/

- _(not applicable)_
