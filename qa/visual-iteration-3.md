# Independent Visual Review — Iteration 3

**Prerequisite:** Technical Gate explicitly passed iteration 3 before reviewer opened production app. Root-controlled technical evidence provenance is documented in technical report. Visual reviewer independently opened own Browser tab and inspected actual frozen iteration 3 production at http://127.0.0.1:3000/?qa, High quality, 1280 × 720; not scored from root screenshots or source. Four destination controls, live normal 1× restart-to-completion sequence sampled across phases, completed entrance return inspected. Screenshot sequence is discrete live samples, not continuous video.

**Result: FAIL. Overall realism 6.8 / 10. Hard acceptance remains unmet.** Artwork texture and framing improved, but wall/floor material identity regressed severely; increased texture strength is not increased realism.

| Category | Score | Observed evidence |
|---|---:|---|
| Geometry / proportions | 8.4 | Credible 100 m² scale, wall thickness and restrained smaller ceiling trim. Thin T stem remains prominent in symmetric return view; architectural detail still limited. |
| White Cube Bermondsey character | 5.8 | Actual walls read rough exposed grey concrete, actual floor reads near-white matte surface. This reverses the essential smooth white wall / polished grey floor contrast of Bermondsey, reinforced by user's supplied photo. Whole ceiling remains cream illuminated grid rather than distinct recessed rooflights within broad white bands. |
| Materials / surface realism | 5.7 | Wall has exaggerated rough mottling and relief. Floor has little visible concrete material or reflectance. Artwork facets removed; painting now smooth smeared brush fields, but fine physical canvas response not evident. |
| Lighting / GI | 7.1 | Previous harsh divider hot spots reduced; softer art lighting. Nonetheless floor/wall brightness identities and weak indirect architectural differentiation obscure realistic light transport. |
| Shadows / contact | 7.7 | Painting contact and edge shadows more evident and improved; still some soft broad halos. Wall floor grounding remains faint in completed wide view. |
| Reflections | 4.8 | In wide return, polished grey floor absent visually: nearly uniform pale matte floor with faint dotted seams, no discernible credible rooflight/architecture reflection. User photo clearly shows broad coherent grey concrete sheen. |
| Artwork integration | 7.6 | Facet artifacts removed, panel edges credible and shadows improved; overall physical texture still soft/synthetic, small labels remain blank. |
| Camera / cinematic quality | 8.3 | Previously clipped portrait03 now fully fits during inspected settle/hold/pan views, though lower frame close to bottom controls. All four destinations reached in readable sequence, return complete, no observed clipping. Full architectural reveal still needs improved framing. |
| Antialiasing / postprocessing | 8.4 | Stable mostly clean edges, no major observed temporal defects. Overall muddy wall brightness and white floor washout hurt physical exposure. |
| Overall realism | **6.8** | Camera/artwork gains outweighed by incorrect architecture material identity and absent floor reflection. |

## Concrete Builder corrections

1. Restore clean near-white plaster. Albedo should be smooth and very low contrast; reduce bump/normal strength dramatically and push scale to fine paint/plaster detail. Current screenshot wall resembles rough unfinished concrete. Verify actual rendered shader maps and UV assignment, not just material parameter names.
2. Make the floor visibly grey polished concrete again, with multi-scale subtle mottling and coherent broad reflected rooflight shapes. Current floor is pale matte white and loses material identity. Verify maps not mistakenly applied/inverted/sRGB misinterpreted; keep reflections physically subdued but unmistakable.
3. Follow new photo's ceiling: broad white opaque bands surrounding recessed rectangular diffuse bright panels, hairline tracks and shadow gap. Avoid making almost the entire roof one cream grid.
4. Preserve improved complete portrait framing and artwork contact. Reserve more vertical margin below artwork03 for UI and keep every pan endpoint fully framed.
5. Avoid simply increasing bump/textures as a realism fix; compare architecture-wide screenshot directly against supplied reference before gate/review.

## Evidence

Reviewer-owned actual browser screenshots in `qa/screenshots/`: iteration-3-artwork-01.jpg through 04.jpg, iteration-3-route-moving.jpg, iteration-3-route-transition.jpg, iteration-3-route-fourth.jpg, iteration-3-return.jpg. The completed return is strongest evidence of wall/floor identity regression. Reviewer tab closed after scoring to free GPU.

New reference independently viewed during review: supplied local photograph `ignant-travel-london-white-cube-5-1440x1857.jpg.webp`. It depicts smooth white walls, polished grey mottled concrete with broad rooflight reflections, and recessed rectangular ceiling panels separated by broad white opaque structure. Existing original T plan is not judged a floor-plan copy; pending user layout steering is outside this frozen iteration's scope.
