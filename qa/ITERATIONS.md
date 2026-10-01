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

Dense geometry validation: **123,001 samples PASS**, 0.22 m camera clearance sphere, minimum actual surface separation 0.5717 m. Subsequent production build and Technical Gate passed; independent visual review scored 7.7/10 (see visual-iteration-5.md). The user subsequently assessed the same presentation at **6.5/10**, establishing the calibration baseline for future visual comparison. Preserve both assessments; deployment and technical stability are not evidence of visual acceptance.

## Iteration 6 — in progress

User priorities: replace office-like ceiling with White Cube architectural recesses; remove About the space; improve painting-frame antialiasing; expand to ten artworks and complete the whole exhibition. Rebuilt ceiling uses actual apertures with white recessed reveals, broad white bands and luminous diffusers; dark trim plates and full ceiling-grid seams removed. Static indirect lightmaps use 96 cosine-weighted samples and four diffuse bounces; these are approximate baked lighting, not a full dynamic GI system. Planar floor reflection distortion/depth attenuation corrected. Artwork receives canvas normal/roughness detail and typographic labels. Final revision 6c uses 2-sample MSAA plus SMAA at DPR 1 to reduce rendering cost. Full route now includes ten destinations and genuine initial withdrawals.

Production build/types pass. Technical runtime gate and independent visual review pending. No score assigned. Acceptance remains 9.2 overall and all critical categories at least 8.8, calibrated against the user's 6.5 baseline.

### Iteration 6 deployment and limitations

Initial runtime revisions failed performance: high 18–19 fps (6), then 25–28 fps (6b). Revision 6c production build and TypeScript validation passed. On the user’s explicit request it was deployed before completing the runtime gate: GitHub commit 7e81e394fc2d98e1b865436444e87a37fac3ad18, Vercel success, public https://www.vaest.art independently opened and confirmed ten artwork controls, 337-second duration, ready=true, high quality 30 fps at startup, and no logged errors. This startup observation is not a full-route Technical Gate PASS. No visual score or 9.2 acceptance claimed.

## Iteration 7 — user-directed corrections in progress

Match ceiling to White Cube reference, remove white floor lines and shift concrete from brown to neutral grey while preserving its existing sheen, eliminate wall-floor and wall-ceiling junction shading, brighten walls, increase antialiasing, remove hero count sentence and integrate supplied real logo. Full technical gate and independent visual review must follow the frozen build.

### Iteration 7 layout expansion

User requested a smaller entrance room leading into the larger main gallery through a central doorway, retaining the two existing exhibition dividers and ten artworks. Implementation resumes after the account usage reset. Proposed dimensions preserve the 10 × 10 m main gallery and add an approximately 10 × 3 m entrance vestibule, both 4 m high. Camera route and collision checks must be rebuilt for this layout; prior one-room checks cannot establish acceptance. Latest floor instruction is neutral grey, preserving the current sheen.

### Iteration 7 technical result — PASS

Frozen production build and types pass. Independent Technical Gate report: qa/technical-iteration-7.md. Dense 367,001 geometry samples, all ten mounts and 20 framing cases pass; minimum separation 0.4376 m. Root live production-browser evidence at 1280 × 720: complete 367-second tours in high and balanced modes returned to [0,1.68,7.4], 60 fps, no errors or collisions. Back/Next walked all ten destinations in order and paused; first/last boundaries, resume, restart and stable pause passed. Independent gate explicitly distinguishes root browser evidence from its own static inspection. Visual review pending; no visual score assigned. User authorizes deploying requested technically passing updates before visual acceptance.

### Iteration 7 deployment verified

GitHub main commit 590d530442c68cac99985112bc33ba81448d21a8 triggered Vercel successfully. Root independently opened https://www.vaest.art/?qa&release=590d530 and confirmed the real logo, new two-room dimensions, Back/Next, ten works, 367-second duration, ready=true, high quality 60 fps and no console errors. Requested changes are live; visual acceptance remains open. Updated collaborator handoff was excluded from this public upload because automatic approval review rejected public disclosure of collaborator identity/domain details. Local updated handoff remains available for direct sharing.

### Iteration 7 visual result — FAIL, provisional 6.9/10

Independent reviewer inspected actual root-captured frozen-build renders (qa/visual-iteration-7.md), calibrated against the user’s 6.5 baseline. Overall provisional 6.9; floor reflections improved, while repeated soft artwork textures, broad diagonal canvas glare/shadow bands, flat GI, underdefined ceiling recesses and weak frame contact remain. Independent reviewer live browser was unavailable; camera/motion and AA scores are provisional. This is not full independent motion acceptance and 9.2 is unmet. Iteration 8 targets these actual findings while preserving the requested bright structural junctions.

## Iteration 8 — technical PASS, visual FAIL 7.1 provisional

Production build/types pass; qa/technical-iteration-8.md records matching frozen hashes and independent static validation plus root live full367s high/balanced60fps zeroerrors. Only artwork/ceiling details changed; route controls preserved. Independent actual-render image review qa/visual-iteration-8.md confirms diagonal bands fixed and ten compositions distinct, but surfaces still flatgraphics, contactweak and GIuniform. Provisional7.1 is only+0.2 from7’s6.9, below user’s >0.5 score-improvement deployment rule; not deployed. Independentmotioninspectionstillunverified.

## Iteration 9 — in progress

Image-generation skill built-in tool generated a physical painting texture prototype, copied unchanged to public/artworks/after-rain-study-v1.png. Builder integrating one distinctasset to validate painted linen response before broader replacement, pluslocalizedmountingcontact and broaderrooflight irradiance while keeping structuraljunctionsbright.

### Iteration 9 revised user brief — 1 October 2026

Latest user references supersede the prior clean-junction preference: dark narrow reveals at wall-floor and wall-ceiling intersections and around every rooflight are now required. Concrete should be darker neutral grey with patchy mottling/blemishes; walls gain subtle light plaster texture from the supplied AVIF. Central divider walls are interpreted as 3 m high versus 4 m outer walls. Rendering is always high quality, with no Balanced selector. Artwork views must be farther away and straight, with aligned camera/target height and frontal settle positions. Both loading stages must show only the actual supplied logo on pure white. New camera and divider geometry require fresh technical validation. Requested changes deploy after Technical Gate PASS regardless of visual score; final9.2/critical8.8 acceptance still unmet.

### Iteration 9 technical result — PASS

Benchmeshes andcollisionbox removed. Frozenproductionbuild/typesPASS; independent qa/technical-iteration-9.md verifies385001geometrysamples minseparation.533384m,all10mounts,20viewportprojectioncases maxNDC.685,zeroverticalconvergence/pitch atartviewingwindows,all10viewdistances increased+.320…+.770m to2.8–3.2m. Rootlivefull385tourcompleted highquality53–60fps,noerrors/collisions;all10BackNextdestinations,boundaries,resume/restart/stablepausepass. BothloadingDOMstagesactualimglogo only,noqualityselector. Visualreviewpending; requestedchangesauthorizedfordeployaftertechnicalPASS.
