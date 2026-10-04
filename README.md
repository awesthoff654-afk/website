# VÆST — Digital exhibition

Next.js, React Three Fiber and Three.js gallery with a 10 × 10 m main room and a 44 × 4 m cross-hall. Eight supplied artworks retain their physical dimensions, followed by two blank canvases. Artwork navigation is numbered 01–10; the first painting is 90 × 120 cm.

The gallery has rounded plaster walls, a floating angled ceiling with a 65 mm reveal, a white panel and linear-light hallway ceiling, and reflective concrete. White artwork frames are 40 mm wide and 40 mm deep. A local SVG wordmark overlays the stationary gallery for four seconds after it is ready; clicking enters immediately. The printed exhibition text is on the right entrance wall. Bio and Instagram links sit at the top right.

Play/pause, restart, a continuous timeline and x1/x2/x3 controls accompany the 389-second tour. Play after completion restarts from zero. Final withdrawal stays straight and frontal.

Run `pnpm install --frozen-lockfile`, `pnpm build`, then `pnpm start`. Use `pnpm check-route`, `node scripts/check-framing.mjs` and `node scripts/check-public-assets.mjs` for verification. `?qa&speed=12` enables diagnostics and accelerated inspection. No remote assets are required at runtime.

Vercel deploys the connected GitHub main branch to https://www.vaest.art/. Visual evidence and checks are in `qa/`; no independent quality score is implied by this README.
