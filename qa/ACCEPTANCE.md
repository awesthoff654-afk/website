# VÆST acceptance protocol

User scale: 8.0 = convincing PS4-era environment; 9.2 = convincing current-generation environment; 9.5 = high-end Unreal Engine presentation.

An iteration is accepted only when its Technical Gate passes, the independent reviewer's overall render score is at least 9.2, and every listed category is at least 8.8. A production build alone cannot pass visual acceptance. A screenshot alone cannot pass route or performance acceptance.

## Technical Gate

- Production compilation and type checks pass.
- App initializes and displays actual WebGL content without runtime/module errors.
- All visible controls work, including pause/resume and restart.
- Entire route reaches completion and returns toward entrance.
- Dense sampling of the actual camera route respects wall and artwork geometry with clearance for the camera near plane; verify matching rendered geometry.
- Live observation confirms no clipping, disruptive camera discontinuities, or render instability.
- Record measured frame performance, quality mode, viewport, and browser. Do not extrapolate one machine's performance to all devices.

Failures return to Builder before any visual review.

## Visual Reviewer

Independently inspect the live iteration, including entrance, each artwork destination, grazing material views, floor reflections, divider corners, and moving transitions. Record screenshot evidence and observations. Score:

1. Geometry and proportions
2. White Cube Bermondsey architectural character
3. Materials and surface realism
4. Lighting and indirect illumination
5. Shadows and contact
6. Reflections
7. Artwork integration
8. Camera and cinematic quality
9. Antialiasing and postprocessing
10. Overall realism

All categories are treated as critical. Record exact shortcomings and corrective instructions. Do not award a score because a rendering feature exists in source code; judge its visible result. Do not average away a weak category. Preserve failed iterations in the log. Note implementation or testing limitations openly.

## References

The geometry is an original approximately 10 × 10 m gallery with a 4 m ceiling and a T-shaped exhibition divider. Inspiration is material/light character rather than copied floor plan.

- [Architects: White Cube Gallery Bermondsey](https://www.caspermuellerkneer.com/project/white-cube-bermondsey)
- [White Cube: Bermondsey](https://www.whitecube.com/locations/white-cube-bermondsey)
