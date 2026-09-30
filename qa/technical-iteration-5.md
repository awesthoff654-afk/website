# Technical Gate — iteration 5

Status: **PASS for visual review.** No visual score assigned by this gate.

Latest user-approved plan supersedes the earlier divider arrangement: longitudinal wall x ±0.12, z −3.1…0.25; separate transverse wall x ±2.2, z 1.8…2.04; 1.55 m central passage. Artwork 4 faces the entrance at `[0,1.8,2.12]`. Route now lasts 123 seconds and travels around the rear of the longitudinal wall.

## Independent source checks

Gate directly read the updated route and checked the rendered scene bounds. `qa/check-geometry.mjs` independently passed 123,001 samples at 1 ms intervals against walls, ceiling/floor, conservative artwork/frame bounds and bench. Minimum surface clearance is 0.571723 m at 101.602 s, entrance-right wall. The 0.22 m camera sphere encloses the near-plane rectangle for near 0.08 m and vertical FOV 56° at aspect ratios up to 4.713, including recorded test viewports. Source uses continuous Hermite position/target interpolation and holds at artworks. Production build passed at root.

## Runtime evidence and provenance

Child browser remains unavailable (available browser list empty). Root performed live tests and saved raw evidence in `technical-iteration-5-root-evidence.json`; Technical Gate independently inspected that JSON and `screenshots/iteration-5-complete.jpg`. This report does not claim direct gate browser control.

Both full 12× and 4× routes reached time 123, ready true, complete true, playback stopped, phase Complete, camera `[0,1.68,4.65]`, empty collisions and error. Actual completion screenshot confirms a rendered scene and the updated plan diagnostics. Root observed the moving route without clipping. Console warning/error log is empty.

Restart, resume and pause worked: exact time 0.28269999999925494 and camera remained unchanged while frames increased 1,877→3,537. Each destination button reached its updated destination (14, 40, 75, 103 seconds), correct artwork index and Slow pan phase. Quality, speed and details controls worked.

Recorded high and balanced states measured 60 FPS at all destinations, route completions and sustained holds. Root reports testing at 1280 × 720 (high buffer 1600 × 900; balanced 1280 × 720); completion screenshot is 1280 × 720. The final raw viewport record shows a later resized panel at 751 × 724 (buffer 938 × 905). These are measurements on this host and browser, not a universal performance guarantee. No simultaneous reviewer renderer ran during the technical test.

The runtime/source evidence satisfies the technical gate. Independent visual review must inspect this actual iteration before assigning any aesthetic score.
