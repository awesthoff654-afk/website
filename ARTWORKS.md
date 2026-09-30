# Supplying VÆST works

The MVP works are generated placeholders, not representations of real VÆST artworks. Labels describing placeholder materials demonstrate the viewing experience and must be replaced along with the images.

For each real work, supply a straight-on, evenly illuminated image with the artwork cropped precisely to its edges; title; year; actual medium; width and height in centimetres; and whether the presentation is stretched canvas, a panel, or framed. For a framed work, include frame dimensions, depth, material, and whether there is glazing.

Prefer high-quality sRGB JPEG or WebP. A 2048–4096 pixel long edge is a useful starting point for close viewing; avoid enlarging a small image artificially. Check the final texture on target devices before choosing 4096 textures for all works. Glazed frames need physically appropriate reflections; unglazed paintings should retain a diffuse pigment/canvas response rather than a shiny printed-photo surface.

Store approved images in `public/artworks/`. The exhibition metadata lives in `lib/route.mjs`; placeholder texture generation lives in `components/textures.ts`, and presentation meshes live in `components/Gallery.tsx`. Replace placeholder generation with texture loading from those local image paths. Keep real-world aspect ratio and dimensions. Update camera destinations when changing the hanging position or size substantially, then rerun the route and technical checks before visual review.

Do not include third-party copyrighted artwork unless you have permission to display it. All included MVP placeholders are generated in the project and require no external image service.
