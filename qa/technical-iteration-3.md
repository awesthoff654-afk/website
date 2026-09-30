# Technical Gate — iteration 3

Status: **PASS for independent visual review**, with the runtime evidence provenance and performance limits below. Visual acceptance remains unassessed.

## Evidence provenance

The independent Technical Gate re-ran source/geometry validation itself. Its browser connection became unavailable after agent resumption; documented recovery and one retry did not restore it. Root therefore performed live browser tests and saved raw diagnostics and screenshots. The Technical Gate independently read those artifacts and checked them against the actual source. This report does not claim that the Technical Gate personally controlled the iteration 3 browser.

Artifacts: `technical-iteration-3-root-evidence.json`, `technical-iteration-3-performance-retest.json`, `screenshots/iteration-3-completion.jpg`, and `screenshots/iteration-3-technical-destination.jpg`. Production build passed at Builder/root. All materials load from packaged local assets; the RectAreaLight addon initializes as an actual bundled Three.js dependency.

## Geometry and route

Independent `qa/check-geometry.mjs` passed 113,001 samples at 1 ms intervals, including wall/ceiling/floor/artwork/frame/bench bounds checked against rendered source. Updated artwork 3 route stays clear. Minimum surface clearance remains 0.254951 m at 22 seconds, T-cross corner. A 0.22 m sphere encloses the camera near plane (near 0.08 m, FOV 56°) for aspect ≤4.713. Both recorded viewport aspects (805/724 and 1280/720) fall within this bound.

## Runtime and controls

Raw captured state verifies ready true, two full route completions at time 113, complete true, playback stopped, camera returned to `[0,1.68,4.45]`, no recorded collisions/errors, and empty console warning/error logs. Root observed moving transitions without clipping or blank/render failure.

Pause preserved exact route time 71.262400 while frames continued; resume and restart completed. All four destination controls produced the corresponding route time/camera/artwork (14/37/63/88), with phase Slow pan. Quality, speed 1/4/12, and diagnostics visibility controls worked. Completion screenshot independently confirms actual rendered scene and diagnostics, rather than compilation alone.

## Performance and limitation

Original capture viewport 805 × 724, high buffer 1006 × 905: high states measured 59–61 FPS at destinations, 60 at completion and balanced. One later paused high state measured **22 FPS**; this outlier has no established cause and is preserved rather than discarded. Gate requested a focused retest before passing.

Fresh single-tab retest at 1280 × 720 measured 60 FPS initially and **48 FPS** at the same fourth-artwork hold after roughly 64 seconds (frames increased from 3,291 to 7,167), no errors. This is usable performance above the 30 FPS threshold for the measured setup and supports passage after retest, but does not justify claiming a guaranteed 60 FPS or universal device performance. A repeated sustained sub-30 result on a later iteration must return to Builder.

All live renderer tabs were closed after testing to avoid GPU contention during independent visual review.
