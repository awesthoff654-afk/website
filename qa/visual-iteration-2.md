# Independent Visual Review — Iteration 2

**Prerequisite:** Technical Gate explicitly passed iteration 2 before any visual inspection. Production URL: http://127.0.0.1:3000/?qa. Review at 1280 × 720, High quality. Actual browser render inspected independently using the supported Browser runtime; four destination views inspected, normal 1× route observed in sequential live samples from restart through completed entrance return. No score is inferred from source alone.

**Result: FAIL. Overall realism 7.0 / 10. Acceptance requires 9.2 overall and every critical category at least 8.8.** This is a stable, well-composed 3D prototype; it does not visually approach current-generation environment quality yet.

| Category | Score | Observed evidence |
|---|---:|---|
| Geometry / proportions | 8.3 | Clear substantial walls and credible painting thickness; 10 × 10 × 4 volume legible on return. Ceiling framework is unusually thick/dark and visually dominates; edge detailing remains basic. |
| White Cube Bermondsey character | 7.5 | Neutral palette, broad rooflight panels and restrained room fit the reference direction. Coarse grey floor, dark grid and spotlight hot spots read more generic showroom than broad, soft top-lit Bermondsey space. |
| Materials / surface realism | 6.5 | Plaster mostly flat chalk color; floor coarse uniform fuzzy grain and repeated broad wave bands. Artwork contains obvious large triangular facets, which read as synthetic low-poly pattern, not mineral pigment or linen. |
| Lighting / GI | 6.8 | Soft overall illumination present, but wall planes lack convincing indirect tonal differentiation. Return view has two blown white hotspot patches near divider top. Rooflights appear uniform cream cards. |
| Shadows / contact | 6.7 | Wall floor intersection and frame wall contact weak; some large architecture gradients present. Paintings feel pasted onto wall in frontal views. Need physically scaled restrained occlusion and grounded wall base. |
| Reflections | 6.3 | Floor sheen is visible but the broad repeating bands read procedural. Reflected architectural lighting and artwork aren't coherently resolved in observed wide view. |
| Artwork integration | 6.6 | Frame depth believable from oblique artwork01 view. Flat cream trim, blank small labels, faceted images and faint contact shadows limit physical credibility. Placeholder status is allowed; physical treatment still matters. |
| Camera / cinematic quality | 7.7 | Discovery sequence reaches all four works, follows readable phases and returns; no observed clipping. Artwork03 is cropped vertically at its destination and during settle/pan, diminishing the intended viewing distance. Some pans frame almost only painting and flat wall; architectural reveals could be better staged. |
| Antialiasing / postprocessing | 8.3 | Straight edges mostly stable and clean at review viewport, exposure restrained overall. Floor has visible noise; hot spots and slight washed-out overall contrast weaken final image. |
| Overall realism | **7.0** | Scene convincingly runs, but materials, grounding, indirect light and artwork surface clearly identify a basic real-time prototype. |

## Priority corrections for Builder

1. Fit the entire artwork03 with at least 8–12% vertical breathing room during settle and every pan endpoint. Move camera back or choose field of view from actual artwork extents; keep safe route. Verify artwork01 likewise never clips at top in approach/settle.
2. Replace large triangular placeholder facets with painterly variation at multiple scales: broad smooth pigment fields, subtle irregular edges, finer canvas/material microdetail. Avoid obvious faceted polygon shapes unless the displayed artwork intentionally calls for them.
3. Rework polished concrete: lower high-frequency grain/normal strength, distinguish broad mottling from fine pore response, soften joint line contrast, establish believable broad rooflight reflections. Wide view currently shows dotted/chalk joint lines and repeated wave bands.
4. Improve physical grounding: fine frame-wall ambient occlusion, shadow immediately below frame, wall-base contact and subtle inner corner falloff. Do not turn contact into a thick artificial black halo.
5. Rebalance illumination: reduce harsh blown spots on top of T divider; use broad rooflight dominance with restrained art wash. Give ceiling grid believable thinner grey framing/recess detail, preserving required 4 m height.
6. Validate wide architecture composition at entrance and return as carefully as artwork closeups, then rerun Technical Gate before next score.

## Screenshot evidence

Actual browser JPEGs saved in `qa/screenshots/`:

- `iteration-2-artwork-01.jpg`: oblique frame depth, wall and coarse floor.
- `iteration-2-artwork-02.jpg`: synthetic triangular pattern, flat frame contact.
- `iteration-2-artwork-03.jpg`: cropped portrait destination.
- `iteration-2-artwork-04.jpg`: divider light and artwork treatment.
- `iteration-2-route-architecture.jpg`: first painting pan.
- `iteration-2-transition.jpg`: second painting settle.
- `iteration-2-route-midpoint.jpg`: third painting settle cropping.
- `iteration-2-withdrawal.jpg`: fourth painting settling with diagnostics showing stable 60 fps.
- `iteration-2-return.jpg`: complete route, T walls, ceiling grid, floor bands and lighting hotspots.

## Reference grounding

Architect primary source: https://www.caspermuellerkneer.com/project/white-cube-bermondsey — neutral palette, column-free top-lit principal galleries and naturally lit cubic gallery. Original plan is intentionally not copied. Resemblance judged on material/light/architectural character, not floor-plan identity.
