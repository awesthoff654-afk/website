# Independent Visual Review — Iteration 5

**Prerequisite:** Technical Gate explicitly passed iteration 5 before independent visual review. Reviewer opened its own browser tab against frozen production http://127.0.0.1:3000/?qa; High quality, 1280 × 720. Four artwork destinations inspected, normal 1× route sampled from restart through complete 123-second return, then wider architecture transition paused using actual controls. Reviewer-owned evidence below. Live screenshot sampling is discrete observation, not a continuous video recording.

**Result: FAIL. Overall realism 7.7 / 10.** Substantial recovery from iteration 3, with correct smooth plaster and much improved camera framing. Hard 9.2 overall / 8.8 critical gates remain unmet. Stable operation does not imply the visual acceptance gate passed.

| Category | Score | Actual observed evidence |
|---|---:|---|
| Geometry / proportions | 8.6 | Substantial 4 m envelope and separate perpendicular dividers read credibly in wide transition. User sketch's separate wall directions and circulation gap represented; source/technical sample confirm exact extents. Broad white ceiling bands and rooflight recesses improved. Edges and fixtures still simple, some extreme flatness. |
| White Cube Bermondsey character | 8.2 | Smooth white walls and recessed rectangular rooflights now capture supplied photo's character. Floor remains visually matte grey rather than glossy mottled polished concrete with coherent light reflections; ceiling opaque bands render much darker than reference. |
| Materials / surface realism | 7.5 | White plaster identity corrected and restrained surface variation plausible. Floor looks uniformly rough/matte with small scattered grain; artwork texture remains low-contrast horizontally smeared procedural pigment rather than detailed physical linen/paint. Blank labels and basic bench reduce credibility. |
| Lighting / GI | 7.6 | Soft architecture shading and ceiling/wall separation improved; no severe blown spots. Entire room has low-contrast muted grey illumination, lacking reference's broad luminous daylight and nuanced indirect plane differentiation. Rooflights appear opaque pale cards with dark borders. |
| Shadows / contact | 8.0 | Thin frame edge and wall contact believable from oblique views; corners and wall base shaded. Some contact reads soft broad halo, architectural grounding still less clear than current-generation reference. |
| Reflections | 6.5 | Wide live transition screenshot shows substantial floor area but no distinct coherent rooflight/architectural reflected shapes; floor reads matte. Dotted bright floor seams remain conspicuous. Correct grey identity recovered from iteration 3 but requested polished response not achieved visually. |
| Artwork integration | 7.9 | Facets removed, all four destination frames fit, believable panel depth and wall shadows. Macro pigment smoothing and lack of fine visible canvas/paint relief remain limiting; labels unreadable/blank. |
| Camera / cinematic quality | 8.3 | Full 123-second route reaches all four destinations, lateral movement, holds and returns without observed clipping. Final return faces front divider so tightly architecture and entrance are largely hidden. Some settle starts have heavily cropped oblique works before final destination fits; withdrawal movement does not consistently back away. |
| Antialiasing / postprocessing | 8.5 | Predominantly clean stable edges. Fine floor seams appear dotted and some rooflight rim edges rough. Muted exposure/contrast further suppress physical lighting and material response. |
| Overall realism | **7.7** | A stable and better gallery prototype, but floor reflection, light transport, fine physical artwork surface and architectural presentation still below current-generation target. |

## Prioritized concrete feedback

1. **Polished concrete must be visible in actual render.** Wide transition screenshot includes floor area yet looks matte. Validate reflector output, sampling and roughness blending visually; introduce broad restrained rooflight and wall reflections with roughness variation. Use photo's grey mottling, avoid repetitive grain. Replace conspicuous dotted/chalk-white floor seams with subtle darker expansion joints.
2. **Broaden architectural daylight and correct overall plane brightness.** Photo ceiling bands/walls are smooth near-white; current ceiling is dark grey, room flat/muted. Keep shadow gaps and corners but use broad rooflight illumination, richer indirect gradients and credible floor bounce; no blown spot rescue.
3. **Upgrade physical artwork surface.** Keep placeholders but add fine canvas weave, irregular layered pigment, careful roughness/normal response and distinct edges; current horizontal blur texture looks synthetic. Add small real typographic work labels, still restrained.
4. **Stage a true entrance/return architectural composition.** Final divider fills the viewport. Use an offset return position/target, wider architectural view or doorway retreat while respecting room collision geometry. Show separate walls, circulation and floor with intent.
5. **Use genuine withdrawal before transitions.** Source keys first go x−2.4→−3.45 toward west artwork wall, second north distance 2.47→1.07 m; these close approaches are named Withdraw. After hold, initially increase artwork distance, then turn and transition. Preserve smooth continuous interpolation and retest collision geometry.
6. Preserve improved portrait margins, subtle plaster and exact user-specified separate-divider arrangement. Technical Gate must repass each changed build before another score.

## Screenshot evidence

Actual reviewer-owned browser JPEGs in `qa/screenshots/`:

- `iteration-5-artwork-01-review.jpg` through `iteration-5-artwork-04-review.jpg`: destination margins, plaster and panel treatment.
- `iteration-5-motion-review.jpg`: oblique second artwork settle.
- `iteration-5-transition-review.jpg`: oblique portrait settle and bench/floor.
- `iteration-5-fourth-moving-review.jpg`: fourth pan.
- `iteration-5-return-review.jpg`: completed return tightly framed on divider.
- `iteration-5-wide-route-review.jpg`: most useful architecture evidence, rooflight ceiling bands, separate perpendicular divider arrangement, visibly matte grey floor and dotted seams.

Root-owned `iteration-5-gallery.jpg` also viewed for context but scores grounded in reviewer-owned live app inspection. Supplied White Cube photo reviewed previously and used for material/light comparison. Reviewer browser closed after report to free GPU.
