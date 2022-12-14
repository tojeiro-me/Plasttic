# CSS properties order

```css
class {
  /* Display */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  /* Box Model */
  background-color: #fff;
  width: 120px;
  height: 60px;
  margin: 1rem;
  padding: 1em;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px hsl(0, 0%, 0%);

  /* Positioning */
  position: absolute;
  left: 1rem;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
  z-index: -1;

  /* Typography */
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #000;
  text-align: center;

  /* Transform */
  scale: 2;
  filter: blur(3rem);
  opacity: 0.5;
}

class::after {
  content: "";
  /* other properties */
}
```
