# Independent Visual Review — Iteration 7

## Evidence and prerequisite

Technical Gate explicitly passed frozen iteration 7 before this review. Frozen deployment commit reported by root: `590d530442c68cac99985112bc33ba81448d21a8`. Technical provenance and full-route runtime checks are in `technical-iteration-7.md` and its runtime evidence.

**This review independently inspects actual rendered screenshots captured by root from the running production app. It is not a reviewer-controlled live browser review.** Reviewer's browser connection was unavailable: initialization succeeded but selection reported no browser, and documented discovery returned an empty list. Root therefore captured high-quality 1280 × 720 images from frozen production, including all ten destinations, entrance, vestibule and main transition. Reviewer opened and visually inspected every supplied image. Root's runtime reports support operation, not independent visual motion validation.

**Overall visual score: 6.9 / 10, provisional. Acceptance: FAIL.** Current-generation 9.2 and critical 8.8 thresholds are clearly unmet. Independent temporal/motion verification also remains unavailable, so this iteration cannot be accepted on the evidence set even if static appearance were sufficient.

Calibration: preserve historical reviewer iteration-5 score 7.7 as its recorded judgment; user subsequently assessed that build as 6.5. This review uses the user's PS4=8.0 / current-generation=9.2 scale more strictly. It does not rewrite prior evidence or simply assign the user's score to new work. Improvements in floor reflection, brightness and artwork labels are visible; physical surfaces and illumination still read as a simple 3D prototype.

## Scores

| Requested category | Score | Evidence and limitation |
|---|---:|---|
| Geometry / proportions | 8.0 | Vestibule, main gallery, substantial walls and panels read as coherent architecture. Artwork thickness is credible in oblique transition. Ceiling detail remains coarse and nearly undifferentiated white shapes. Camera views do not fully demonstrate the separated perpendicular divider layout. |
| White Cube Bermondsey resemblance | 7.2 | Bright white walls, grey reflective floor and white rooflight bands fit the intended family. Reference has carefully recessed rectangular luminaires, hairline tracks and crisp material differentiation; current rooflights/bands wash into luminous flat geometry. |
| Materials / surface realism | 6.4 | Smooth white plaster satisfies user preference and no rough grey wall regression. Grey floor has mottling and sheen, but lacks convincing multiscale polish response. Art is blurred horizontal pigment strokes over repeated simple shapes, with no convincing canvas weave/paint microstructure. |
| Lighting / GI | 6.3 | Broad bright illumination and clean white wall junctions respect latest user instruction. Light is too spatially uniform; painting surfaces exhibit conspicuous broad hard diagonal bands. The bands read as synthetic lighting/specular artifacts, not nuanced museum art lighting. |
| Shadows / contact | 6.0 | Architectural junction shading is intentionally omitted per user and is not requested as a fix. Painting attachment remains weak: most panels have thin outlined edges without convincing local mounting shadow. Obligue painting depth is clear but front-on panels feel pasted on. |
| Reflections | 7.3 | Clear actual planar painting reflections visible in vestibule-wide and main-transition, substantial improvement over iteration 5. Reflection character remains a fairly uniform glossy layer; broad rooflight reflections, variable polished roughness and fine concrete response need refinement. |
| Artwork integration | 6.2 | All ten paintings fit at captured settle destinations and now have small labels. Placeholders allowed, but repeated exact compositions (01/02/10, 03/04/06 etc.), smeared texture and diagonal light/glare strips lack physically credible painted/linen presentation. No apparent detailed surface relief. |
| Camera / cinematic quality | 7.5 provisional | Captured destinations have margins and actual vestibule establishes arrival better. Root reports complete 367-second route and controls, which is technical evidence. Independent settling/deceleration, pan fluidity, turns and return aesthetics have not been observed by reviewer; this is a composition-only provisional score, not a temporal pass. |
| Antialiasing / postprocessing | 8.0 provisional | Main edges generally clean at 1280 × 720, with some fine irregular canvas edges and soft/blurry art detail. Independent temporal edge stability cannot be assessed from stills. High white values suppress distinction between ceiling band and rooflight. |
| Overall realism | **6.9 provisional** | Clean stable gallery presentation, improved reflections and scale, but still well below convincing PS4-era environment quality because surfaces, art-light response and ceiling detailing are visibly simplistic. |

## Specific next fixes

1. **Remove hard diagonal bands across canvases.** Most obvious in work-03, work-04, work-05, work-07, work-08 and work-10. Determine whether the bands are shadow projection, specular environment, baked lighting, or geometry interpolation; make broad artwork illumination physically coherent. Cotton/mineral panels should not read as uniformly lacquered reflective cards.
2. **Upgrade placeholder physical surface before more macro patterns.** Preserve restrained abstraction, but use distinct layered pigment fields, fine canvas weave, subtle material normal/roughness, believable canvas edge wrap and mounting gap. The same rectangle/ellipse/circle texture repeated across ten works is visually evident. Real works are not needed to make presentation credible.
3. **Make rooflight construction legible at current white exposure.** Use actual recessed rectangular diffusers within opaque white ceiling bands with restrained edge thickness and fine tracks. Preserve the user's clean junctions and brighter walls; do not add dark perimeter shading. Distinguish diffuser brightness from opaque ceiling through physical lighting values and a small recess, not a dark black frame.
4. **Refine concrete reflection response.** Keep grey sheen and zero white seam lines. Add distinct broad rooflight reflection, subtle roughness variation and fine aggregate/polish response instead of one uniform gloss layer. Show a wide camera angle where the floor and rooflight response can be independently judged.
5. **Add local painting mounting contact only.** Subtle short shadows immediately behind/below artwork and credible side treatment. This does not conflict with the user's prohibition on dark wall-floor or ceiling-wall junction shading.
6. **Provide motion evidence or restore reviewer browser before acceptance.** Reviewer needs to actually see normal-speed approach, deceleration, lateral/orbital pan, hold, withdrawal, transition through the two-room architecture, and return. Technical completion and stills cannot establish current-generation cinematic quality.

## Inspected actual render evidence

All files under `qa/screenshots/iteration-7/` were root-captured from the running frozen build and independently inspected using image viewing:

- `entrance.png` — Discovery view, close front painting (not vestibule-wide).
- `work-01.png` through `work-10.png` — all ten settled destinations; `manifest.json` stores associated DOM states.
- `vestibule-wide.png` — arrival, bright rooflight bands, grey floor and actual reflected artwork.
- `main-transition.png` — oblique canvas thickness, rooflight, floor sheen and reflected paintings.

No reviewer-controlled live interaction or continuous motion inspection is claimed. No visual acceptance or 9.2 claim is supported.
