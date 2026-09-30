# Iteration log

Acceptance requires a technically passing build, independently inspected visual score ≥9.2/10, and every critical visual subscore ≥8.8. Scores are recorded only after live inspection. A source build or screenshot alone is insufficient evidence of stable operation.

## Preflight — route collision

- Deterministic 0.01-second camera route sampling failed at 26.57 seconds: the camera entered the expanded T-divider cross-wall bounds while withdrawing from artwork 01.
- Fix: inserted an explicit westward withdrawal at fixed Z before travelling north through the western corridor.
- Recheck: 11,300 samples across the 113-second route passed with a 0.22 m camera clearance sphere.
- Removed Drei Text's default external font request and replaced exhibition lettering with a local canvas texture. Ceiling spotlight targets are explicit objects included in the scene.

## Iteration 1 — technical inspection

- Next.js 15.5.26 production build and TypeScript validation passed.
- Live initialized scene, complete accelerated 113-second route, no console/runtime errors, no route collisions; pause and restart operated.
- Initial performance measurements: high 17–24 fps; balanced 14–15 fps. Technical Gate rejected this run; Visual Reviewer was not asked to score it.
- Confound discovered: root and gate had duplicate active GPU-rendering browser tabs. Closing the extra tab raised balanced performance to 60 fps immediately. Those initial performance figures describe simultaneous rendering load and cannot establish isolated single-tab performance.
- Full technical observations: [technical-iteration-1.md](technical-iteration-1.md).

## Iteration 2 — performance revision

Builder changes:

- High DPR cap reduced from 2 to 1.25; balanced DPR fixed at 1.
- Floor reflection target reduced from 1024/512 to 512/256; blur reduced from 240 × 80 to 96 × 48.
- Ambient occlusion quality adjusted from high/medium to medium/low.
- Static scene shadowmaps cached after the initial four rendered frames, avoiding repeated shadow passes for stationary architecture and artwork.

These changes need a fresh single-tab Technical Gate before visual review. The duplicate-tab confound is preserved rather than retroactively labelling the failed initial measurement a pass. No visual score has yet been assigned by Builder.

Iteration 2 Technical Gate: **PASS**. Live independent single-tab inspection measured stable 60 fps; play/pause, restart, artwork navigation, quality and speed controls operated. Complete routes at 12× and 4× passed. Independent 1 ms collision validation checked 113,001 route samples against wall and artwork geometry. See [technical-iteration-2.md](technical-iteration-2.md) and [technical-iteration-2-complete.png](technical-iteration-2-complete.png). Visual Reviewer was authorized only after this pass; its visual score is pending.

## Iteration 2 — independent visual review

**FAIL: overall 7.0/10.** Reviewer inspected actual rendered views after Technical Gate passed. Geometry 8.3, White Cube character 7.5, materials 6.5, lighting/GI 6.8, shadows/contact 6.7, reflections 6.3, artwork integration 6.6, cinematic camera 7.7, antialiasing/postprocessing 8.3. Detailed evidence and feedback: [visual-iteration-2.md](visual-iteration-2.md).

## Iteration 3 — surface, lighting and framing corrections

Builder responds to the independent review:

- Artwork 03 has a safer, more distant north-corridor viewing position with full portrait framing. Inserted explicit eastward withdrawal before southward travel. Deterministic route checker still passes.
- Replaced faceted polygon artwork layers with transparent curved brush marks, smooth mineral pigment fields, organic soft-edged forms and finer woven surface detail.
- Replaced procedural sine/noise wall and concrete maps with local CC0 photographed surface textures. Local bundled files remove runtime asset service dependencies. Attribution and original sources in `SOURCES.md`.
- Replaced near-divider hotspot spotlights with correctly initialized packaged Three.js rectangular area lights. Unlike the failed previous inline prototype, the real project resolves the documented addon from its installed Three.js dependency; production compilation passes.
- Rooflight panel dimensions increased from 2.94 m to 3.19 m, reducing dominant dark grid widths. Neutral lighter framing has restrained indirect emissive compensation.
- Frame edges are thinner and warmer, with restrained local wall contact occlusion. Ambient occlusion radius narrowed to 0.32 m with slightly stronger contact response.
- Concrete normal response restrained and joints thinned with lower contrast.

Production build and TypeScript checks pass. Fresh Technical Gate and visual review remain required before any acceptance score.

## Iteration 4 — user's photographic reference and revised architecture

New user steering supplied a White Cube Bermondsey photograph: smooth white walls, polished grey concrete, rectangular recessed diffusers within broad white ceiling bands, fine reveal seams and perimeter shadow gaps. Root selected two offset freestanding exhibition walls as the working layout after the optional layout question had no answer; this replaces the original T.

Builder implementation:

- Two parallel offset planes with 2.16 m central separation and at least 2.28 m outer circulation. Artwork 04 faces the entrance on the nearer exhibition plane.
- White plaster diffuse normalized to sRGB 232 with only 3% photographed contrast; normal response reduced to 0.015. Concrete normalized to sRGB 118 with 38% retained photographic contrast, normal response 0.025, roughness 0.36 and clearer architectural reflections.
- Six recessed rectangular 2.78 × 1.88 m diffusers, broad white ceiling bands, narrow dark diffuser reveals, fine expansion/light-track seam detail and perimeter shadow gap. Ambient light reduced, key illumination made neutral.
- Camera path rebuilt to 115 seconds using continuous cubic Hermite position/target velocities across travel waypoints. It decelerates at artwork holds rather than stopping at every corridor point. Viewing positions accommodate whole canvases with breathing room at intended desktop proportions.
- Hero exhibition title fades after 8 seconds so it does not cover artwork views.
- Memoized static scene and stable texture-map dependencies prevent repeated million-pixel canvas conversion and material/map cloning on diagnostic updates.

Production build and TypeScript checks **PASS**. Dense independent geometry checker: 115,001 samples at 1 ms, minimum camera-to-geometry separation 0.7467 m, 0.22 m camera clearance sphere. Runtime Technical Gate and independent visual scoring remain pending; these preflight results are not acceptance.

## Iteration 3 — review outcome

Technical Gate passed after independent geometry sampling and assessment of root-captured live evidence. Its own browser reconnection was unavailable; the report records that provenance. Sustained performance retest measured 48–60 fps; the earlier 22 fps outlier remains recorded. See `technical-iteration-3.md`.

Independent actual live visual review **FAIL: overall 6.8/10**. Artwork framing and contacts improved, but photographed maps created rough grey walls and a pale floor, reversing the intended white-wall/grey-floor hierarchy. See `visual-iteration-3.md`. Iteration 4 addresses this with surface normalization and the user's photo reference.

## Iteration 5 — user-specified wall alignment

The user's plan supersedes the provisional parallel offset layout. Two separate perpendicular walls now match the sketch: a 4.4 m transverse wall facing the entrance, and a 3.35 m longitudinal wall behind it, separated by a 1.55 m open passage. Both are 3.45 m high within the 4 m room.

Artwork 04 is centered on the entrance-facing wall. The camera's continuous walking route now goes around the north end of the longitudinal wall before crossing to the east side. Its full route lasts 123 seconds and returns toward the entrance; the last artwork is viewed from approximately 2.4 m away.

Dense geometry validation: **123,001 samples PASS**, 0.22 m camera clearance sphere, minimum actual surface separation 0.5717 m. The production build and live verification are pending at the time of this entry. No visual score is assigned to this iteration; the 9.2 acceptance gate remains unmet.
