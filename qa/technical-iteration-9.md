# Technical Gate — iteration 9

Status: **PASS for independent visual review.** Realism remains unscored by this gate.

## Exact freeze and provenance

Production build passed at Builder/root. Independently verified SHA256: Gallery `c6474fb50f5a01fa3792a8b2c2c9261b59cb25825ce2657d07eaf9d7edcf0ddc`; textures `22c3ae00576d12b33f4fdf5d7ed88a102a53733474edc68fb6cd36f9eb02ca28`; route `888190f877ac7d6a741e6896234010508c41b2548c412661fa71108e3ec2763b`; geometry checker `30dc36b9791aae2f256d9734f9e6354e876c7004036d3a842da4ec9718fc0a16`.

Gate personally ran source/geometry/projection checks. Child browser was unavailable; root performed live tests of the exact build and preserved `technical-iteration-9-runtime.json`. Gate independently inspected those raw observations. No claim of direct gate browser interaction or universal device performance is made.

## Fresh geometry and cinematic checks

- Outer walls remain 4 m; both internal dividers are 3 m, verified in actual shared wall bounds. Removed bench no longer contributes an obstacle.
- New 385-second route passes 385,001 independent 1 ms collision samples. Minimum surface distance 0.533384 m at entrance-right, 242.578 s. Camera clearance sphere 0.22 m remains clear and encloses near plane at near 0.08 m, FOV 56° for viewport aspect ≤4.713.
- All ten mounts and twenty viewport/artwork framing cases pass at 1280 × 720 and 805 × 724. Maximum absolute projected corner NDC 0.685.
- Settled viewpoints are directly frontal, at the artwork center height. Projected left/right vertical edge x differences are zero; frontal error ≤2.3e−16. Throughout sampled pan/hold windows camera and target height difference is zero, eliminating pitch-induced vertical convergence.
- Independent comparison with preceding settled positions confirms every work is farther away: new distances 2.8–3.2 m, increases 0.320–0.770 m. These changes are actual camera geometry, not a score inferred from source feature names.

## Live runtime assessment

Root raw live evidence confirms initialized WebGL, full route ending at time 385, ready true, complete true, stopped playback, camera `[0,1.68,7.4]` in vestibule, empty collisions/app error. Captured startup measured 53 FPS, completion 54 FPS, navigation and pause states 60 FPS. Test viewport/drawing buffer 1280 × 720, DPR 1; always-high mode, no Balanced selector. Console warning/error log empty. Measured performance is usable above 30 FPS on this host.

Manual Next traversed all ten works in walking order and paused playback at each new frontal viewing destination; DOM snapshots preserve matching titles, camera positions, Settle phase and Resume control. First Previous and last Next boundary disabling are present. Root exercised Previous and resume from selection; restart initiated the complete route test. Exact pause time 328.81070000000295 and camera remained unchanged as frames increased 15,686→17,308. Numbered navigation remains available in DOM.

Initial loading DOM showed the actual logo image without loading sentence. Captured DOM contains no quality toggle, reflecting the latest always-high requirement. Root renderer tab was closed after testing, avoiding GPU contention during review.

This is technical clearance to review the frozen render. Aesthetic material/lighting quality, actual motion presentation and the 9.2 acceptance gate still require independent visual review.
