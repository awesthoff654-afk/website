# Technical Gate — iteration 2

Status: **PASS for independent visual review.** Visual acceptance remains unassessed.

Production build: root reran successfully after optimization. Production URL `http://127.0.0.1:3000/`. Browser: Codex in-app browser; single active gallery tab. Viewport: 1280 × 720; high drawing buffer: 1600 × 900, balanced: 1280 × 720. Tested desktop host only.

## Verified

- Live WebGL scene initializes (`ready: true`) and renders consistently.
- No browser console warnings/errors or recorded app errors during both complete tours.
- Complete 113-second route ran at 12× and 4×, ending at `[0,1.68,4.45]`, `complete: true`, `phase: Complete`, `playing: false`, empty collisions. The 4× run completed with 4,948 cumulative rendered frames across control tests.
- High mode repeatedly measured 60 FPS through all artwork destinations, transitions, and completion. Balanced measured 60 FPS. Optimization fixed default high-mode performance failure.
- Pause preserved precisely the same route time across subsequent reads while frames continued. Resume, restart, all four artwork destination buttons, quality selector, all tested speed selections, and details open/close worked.
- Independent 1 ms route sampling in `qa/check-geometry.mjs`: 113,001 samples, matching wall boxes plus ceiling/floor, conservative rotated artwork/frame bounds and bench. Minimum surface clearance 0.254951 m at T-cross corner (22 seconds). No intersection of 0.22 m camera sphere. That sphere encloses near-plane rectangle at near=0.08 m, vertical FOV=56° for aspect ≤4.713; viewport aspect=1.778.
- Live screen observations at destinations and transitions did not reveal technical wall penetration, discontinuous interpolation, flickering, blank scene, or context loss. Aesthetic quality is reserved for independent reviewer.

Evidence: `technical-iteration-2-complete.png` displays actual complete route diagnostics at 4× and 60 FPS. Builder's correction and original failure preserved in iteration 1 report.

## Scope

FPS evidence is specific to this host, browser, viewport and one active gallery. It is not a guarantee for other devices. Browser visibility control was unavailable to subagent; measured continuous 60 FPS eliminates observed hidden-tab throttling for this test. Automated artwork destination navigation intentionally jumps to destinations; uninterrupted cinematic route itself was tested separately.
