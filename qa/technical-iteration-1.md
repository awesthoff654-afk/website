# Technical Gate — iteration 1

Status: **FAIL; no visual review authorized.**

Production build passed independently at root and Builder (Next 15.5.26, React 19.1.4). Live production URL: `http://127.0.0.1:3000/?qa&speed=12`. Browser: Codex in-app browser. Viewport 1280 × 720. High mode drawing buffer: 2560 × 1440.

## Route failure and correction

Initial dense test detected camera collision with T-cross at 26.57–27.63 seconds. Builder added a westward withdrawal waypoint before moving north. Corrected route independently checked at 1 ms intervals (113,001 samples). The tested obstacles match rendered wall boxes, ceiling, floor, conservative rotated artwork/frame bounds, and bench bounds. Minimum camera-to-obstacle surface distance: 0.254951 m at 22 s, T-cross corner. A 0.22 m camera clearance sphere safely encloses the 0.08 m near plane at 56° vertical FOV for aspect ratios up to 4.713; tested viewport aspect is 1.778.

## Runtime evidence

Actual scene initialized (`ready: true`) and rendered. Full accelerated tour reached `time: 113`, `complete: true`, `phase: Complete`, `playing: false`, and camera `[0, 1.68, 4.45]`, returning to entrance. Runtime collision list and error field remained empty. Browser error/warning log empty. Restart and pause/resume worked; quality selector and speed selector changed state.

## Failure: high-mode performance

Initial measurements had concurrent GPU pressure from a second test tab and are explicitly confounded: high 17–24 FPS, balanced 14–15 FPS. Root closed the duplicate tab. Balanced then measured 60 FPS. High retest after mode settled still measured 17 FPS at artwork 1 hold, with a 2560 × 1440 drawing buffer. The default high mode therefore fails usable cinematic rendering on this test host (target at least 30 FPS). Visibility changes cannot be performed from a subagent browser; root was informed. No visual score awarded.

Builder corrective action: reduce excessive drawing resolution and reflection/AO cost, cache static shadows, rebuild and rerun technical checks. Iteration 2 is pending.
