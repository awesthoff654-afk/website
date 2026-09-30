# VÆST — Space between

A local-first Next.js / React Three Fiber exhibition. Original 10 × 10 × 4 m gallery, two separate perpendicular exhibition walls aligned to the user's plan, ten physically scaled placeholder canvases and a 337-second cinematic route. The transverse wall faces the entrance; the longitudinal wall sits behind it, with a 1.55 m open passage between them. Architectural character references White Cube Bermondsey's white walls, polished grey concrete and recessed ceiling diffusers, without reproducing its plan.

## Run

Validated with Node.js 24.19.0 and pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Play/pause, restart, select an artwork and switch rendering quality in the interface. The tour automatically returns to the entrance and stops. The `?qa&speed=12` URL opens diagnostics and accelerates the complete route for technical inspection. QA measures rendered frame rate, frames, route completion, camera coordinates and geometry collisions. Speed is an inspection option; default playback is real time.

```sh
pnpm check-route
pnpm build
pnpm start
```

## Project

- `components/Gallery.tsx`: architecture, local lighting environment, floor reflections, contact occlusion, artwork and interface.
- `components/textures.ts`: deterministic local surface maps and placeholder artwork textures. No runtime external assets or font requests.
- `lib/route.mjs`: camera route, artwork positions and architecture collision boxes; shared by rendering and the deterministic route checker.
- `scripts/check-route.mjs`: samples the camera every 0.01 seconds with a 0.22 m clearance sphere.

The camera eases between explicit safe corridor points. It approaches each work, settles approximately 2 m away, slowly pans, holds, withdraws and travels to the next destination. Artwork buttons seek to the corresponding settle point. Rendering uses ACES exposure, environment illumination, diffused ceiling lights, shadow maps, screen-space contact occlusion, blurred planar floor reflections, approximate baked diffuse indirect lighting, and SMAA with multisample antialiasing in high quality.

See `ARTWORKS.md` to replace placeholders and `DEPLOYMENT.md` for GitHub → Vercel setup. Review results and iteration notes live in `qa/`. Render quality acceptance remains subject to actual independent technical and visual review; no score is implied by this README.
