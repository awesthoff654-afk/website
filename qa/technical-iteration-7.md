# Technical Gate — iteration 7

Status: **PASS for independent visual review.** This is a technical result, not a realism score.

## Frozen source and provenance

Production build passed at Builder/root. Gallery SHA256 `edc39f9e7c21bbacba468cbcbd95ae5805ab6a4c8e2404f6cbd59555815aaa65`; route SHA256 `20ff741805af096f4921af211a0d46d8fb254aaa262e53bf2e180848c6744c14`.

Gate independently ran static geometry and framing checks and read actual scene/route/control source. Its browser remained unavailable; root performed live browser tests and preserved raw observations in `technical-iteration-7-runtime.json`. Gate independently assessed that artifact and root's additional boundary/resume observations. No claim of direct gate browser control is made.

## Static validation

- New 100 m² main gallery plus 10 × 3 m vestibule, 4 m high and 2.4 m connecting opening are reflected in wall geometry and camera start/return.
- Complete **367-second** route passed **367,001** independent 1 ms samples. Minimum surface clearance: **0.437602 m**, entrance-right at 240.036 s. Walls including vestibule/lintels, conservative artwork/frame bounds, bench, floor and ceiling constraints remain clear of the 0.22 m camera sphere. Camera height 1.68 m remains safely below both room ceilings throughout.
- Near-plane enclosure holds for near 0.08 m/FOV 56° and viewport aspect ≤4.713, including tested viewports.
- All ten artwork mounts pass. All ten artwork corners stay inside the image during destination/pan/hold at 1280 × 720 and 805 × 724; maximum absolute NDC 0.867, below the 0.94 margin threshold. This tests image bounds, not aesthetic composition or DOM overlay visibility.

## Live evidence assessment

High and balanced full routes reached time 367, ready true, complete true, phase Complete, stopped playback and camera `[0,1.68,7.4]` in the vestibule. Captured high mid-route state also confirms active rendering. Both modes measured **60 FPS**; no collisions/app errors, console warnings/errors empty. Tested viewport and drawing buffer both 1280 × 720 (DPR 1), one active gallery renderer. This performance result is specific to that host/browser.

Pause time 285.6317999999965 and camera remained exactly unchanged while frames advanced 9,311→9,888. Restart and resume were exercised; resume continued from the selected destination.

All ten numbered navigation buttons reached the expected destination camera/time in walking order. Some immediate diagnostic artwork/phase fields lagged by the update interval; root validated DOM headings, while the recorded camera/time matches the selected destination. This does not imply incorrect scene navigation.

Manual Next traversed all ten works in walking order and paused automatic playback at each destination; preserved DOM snapshots show the matching heading, Settle phase and Resume control. Previous returned to the preceding work. Root checked first Previous disabled and last Next disabled; the last-disabled state is also present in raw DOM evidence. Source clamps navigation and updates artwork/phase synchronously. Resume continues from the selected destination. No runtime/module failure was observed.

Iteration 6's earlier 18–19 FPS default-mode failure remains preserved in its preflight artifacts; it is not retrospectively scored. Iteration 7 may now undergo independent live visual review. A 9.2 realism claim still requires that review.
