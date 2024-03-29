# Performance

(Preconnect/DNS-prefetch, Fonts, Images, Partytown, ...)

---

- Preconnect, DNS-prefetch, Preload (CDN, Fonts)

```
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin>
<link rel="dns-prefetch" href="https://fonts.googleapis.com/">

<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
/>
```

```
<link rel="preconnect" href="https://unpkg.com/" crossorigin>
<link rel="dns-prefetch" href="https://unpkg.com/">


<script src="https://unpkg.com/petite-vue" defer></script>
```

- Defer, Async (Javascript files)

_Note: `type=module` is deferred by default_

```
<script src="https://unpkg.com/petite-vue" defer></script>
<script src="assets/js/scripts.min.js" type="module"></script>
```

- Lazy Loading (Images, Youtube videos) + Async + Decode

```
<picture>
  <!-- If this type(avif) is supported, use this src -->
  <source
    type="image/avif"
    srcset="my-image.avif"
  />
  <!-- Else, if this type(webp) is supported, use this src instead -->
  <source
    type="image/webp"
    srcset="my-image.webp"
  />
  <!-- Else, fall back to jpg -->
  <img
    src="my-image.jpg"
    alt="A test image"
    width="400px"
    height="200px"
    loading="lazy"
    decoding="async"
  />
</picture>

Note: use lazy load on images that are not immediately visible.
The <img> element also has the `srcset` attribute.

Youtube lazy loading: https://css-tricks.com/lazy-load-embedded-youtube-videos/

Also check IntersectionObserver:
https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/
https://youtu.be/mC93zsEsSrg
```

- Resize images to the max size and quality you will need
- Minification (Code, Images) and Gziping
- Webp and SVG (use whenever possible)
