# Technical Gate — iteration 8

Status: **PASS for independent visual review.** No realism score assigned.

## Exact source

Gate independently verified frozen SHA256:

- Gallery: `8706ed7f185c0700d0b6d7fdc80fac68d6749a5340f22c815e4be96cd18ae99c`
- Textures: `a03cd06274ea05814af1888ab68f9ad3035bcfed06a6e32d8c53d47ab6e46382`
- Route: `20ff741805af096f4921af211a0d46d8fb254aaa262e53bf2e180848c6744c14` (unchanged from passing iteration 7).

Production build passed at Builder/root. Only artwork/material/rooflight presentation changed; camera route, artwork placement, room bounds, navigation handlers and camera configuration remain unchanged. Gate read current source to confirm controls and bounds remain compatible with preceding runtime control tests.

## Independent static checks

`qa/check-geometry.mjs` rerun passes 367,001 samples at 1 ms intervals. Minimum camera-to-obstacle surface clearance 0.437602 m at entrance-right, 240.036 s, comfortably beyond the 0.22 m camera sphere. That sphere encloses the 0.08 m near plane at FOV 56° for viewport aspect ≤4.713. All ten artwork mounts and all artwork viewing windows pass `scripts/check-framing.mjs` at 1280 × 720 and 805 × 724; largest NDC magnitude 0.867.

## Runtime assessment and provenance

Child browser is unavailable. Root personally ran the exact production build and preserved raw evidence in `technical-iteration-8-runtime.json`. Gate independently inspected this JSON; it does not claim direct browser interaction.

Actual scene ready true; high mode captured during entry, active tour near time 294.64, and complete at 367 seconds. High and balanced complete tours stopped playback, returned to vestibule `[0,1.68,7.4]`, reported empty collisions/error and **60 FPS**. Console warning/error log empty. Test: single renderer, 1280 × 720, DPR 1. Performance is specific to that setup.

Pause/resume, restart, ten numbered destinations, walking-order Previous/Next and boundary disabling carry forward the passing iteration 7 live tests because their exact behavior and route source are unchanged. Iteration 8 separately exercises restart and quality change to run both full tours. No new runtime failure appeared from the changed materials/textures.

This technically passing iteration may be independently inspected and scored. Its visual acceptance remains undecided until the reviewer inspects actual imagery and cinematic motion; technical feature presence cannot establish 9.2 realism.
