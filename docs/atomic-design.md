# Atomic Design CSS Structure

0.  RESET

- Base styling for CSS browser compatibility

1.  COMPONENTS

- Patterns and Components (not dependent of the Design System)

Hidden Link, ...

2.  UTILITY

- Utility classes (not dependent of the Design System)

3.  TOKENS

- Global visual design attributes

Colors, Background Color, Text Color, Border Color, Font, Font Size, Opacity, Line Height, Spacing, Radius, Sizing, Shadow, Time, Touch, Media Query, Z-index, Aspect-ratio

4.  ATOMS

- The basic building blocks

Logo, Typography, Buttons, Form elements, ...

5.  MOLECULES

- Groups of Atoms bonded together to create fundamental units

Form, Search, Social Icons, ...

6.  ORGANISMS

- Combination of Molecules to create sections

Navigation, Footer, Hero, ...

7.  TEMPLATES

- Groups of organisms stitched together to form pages

Page layouts with placeholder images

8.  PAGES

- Specific instances of templates

Final styling of the content where needed

---

NOTES:

- body classes: template (.ptt-tpl\_\_template-name) + page (.ptt-page\_\_page-name)
- sizes:
  - where we don't know how many variants we need (050/100-900) \*
  - exceptions in simple situations (xl-lg-md-sm-xs) \*
  - \*400 = md
