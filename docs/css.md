# CSS

---

## Namespace

---

- Prefix: `ptt`
- Naming: HTML/CSS [BEM](http://getbem.com) `.ptt-form__button--hidden`,
  CSS root custom properties `--ptt-property-variation`

  _Note: avoid naming collisions (prefix) and provide context (BEM)_

## CSS sorting

---

```css
.ptt-element {
  /* Custom Properties */
  --custom-property: 1rem;

  /* Mixins */
  @mixin mixin-name;

  /* Initial */
  content: "";

  /* Display */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  /* Box Model */
  width: 120px;
  height: 60px;
  margin: 1rem;
  padding: 1em;
  box-shadow: 0 0 20px hsl(0 0% 0%);

  /* Background */
  background-color: #ffffff;

  /* Border */
  border: 1px solid #ffffff;
  border-radius: 10px;
  outline: 1px;

  /* Position */
  position: absolute;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  z-index: -1;

  /* Typography */
  color: #000;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  list-style: none;

  /* Transform */
  opacity: 0.5;
  filter: blur(3rem);
  scale: 2;

  /* Animation */
  transition: all 0.5s ease-out;

  /* SVG */
  fill: hsl(32 100% 59%);
  stroke: hsl(32 100% 59%);

  /* Interface */
  cursor: pointer;
  touch-action: pan-x;

  /* Other */
  break-before: page;

  /* Uncategorized */
  ...

  /* Media Queries */
  @media (--ptt-bkp-md) {
    /* properties */
  }

  /* Nested Rules */
  .ptt-element__button {
    /* properties */
  }
}
```

see all properties: [css-order](/docs/css-order.json)
