# VÆST website — collaborator handoff
Date: 30 September 2026
Owner: awesthoff654-afk
Collaborator: tlewisstempel-byte

## Repository and deployment
- Public repository: https://github.com/awesthoff654-afk/website
- Application files are at the repository root, not under outputs/vaest-gallery.
- Branch: main.
- Published gallery commit: 36eceef8b10ec100e7f6ba1d0fe89bb89a5ceebe.
- Vercel reported a successful deployment for that commit:
  https://vercel.com/west-af58/website/4tvVXdrrsEKRNzD3tvbn29yDqqWD
- That link is the deployment dashboard, not a verified public website URL. Obtain the live URL from Vercel.
- GitHub collaborator invitation was prepared in the owner's browser; sending/acceptance has not yet been verified. Accept the invitation before pushing directly to this repository.
- Domain configuration and backend work are intended to proceed alongside continued gallery visual improvements.

## What currently exists
A working Next.js 15 / React 19 / React Three Fiber / Three.js gallery with four generated placeholder artworks. Room dimensions are approximately 10 × 10 × 4 metres. The latest user-approved layout has a horizontal divider facing the entrance and a separate perpendicular divider behind it, with a 1.55 metre circulation gap. Preserve this layout.

White Cube Bermondsey is the architectural reference: smooth white plaster, polished grey concrete, broad white ceiling bands, recessed rectangular luminous diffusers and narrow shadow reveals. The current implementation approximates these elements; visual acceptance remains incomplete.

The cinematic route lasts 123 seconds. It visits four artworks with approach, lateral pan, hold and transition stages, then returns toward the entrance. Controls include pause/play, restart, artwork navigation and quality selection. QA diagnostics are available with ?qa.

No database, authentication, CMS, Supabase, Blender or Spline is required by the current gallery. Add backend services only when an actual site requirement needs them.

## Local setup
Node 24.19.0 and pnpm 11.25.0 were used for the validated build.

```sh
git clone https://github.com/awesthoff654-afk/website.git
cd website
pnpm install --frozen-lockfile
pnpm dev
```

Production verification:
```sh
pnpm build
pnpm check-route
node qa/check-geometry.mjs
pnpm start
```

The MVP currently requires no secret environment variables. Never commit credentials or local environment files. Preserve the PostCSS 8.5.28 security override in pnpm-workspace.yaml and the lockfile.

## Where to work
- app/page.tsx: entry point and dynamically loaded gallery.
- app/layout.tsx and app/globals.css: site shell, branding and interface.
- components/Gallery.tsx: 3D architecture, lighting, materials, artwork meshes and camera integration.
- components/textures.ts: generated placeholder artwork.
- lib/route.mjs: wall geometry, artwork metadata and cinematic route.
- public/textures/: locally served CC0 material assets and attribution.
- ARTWORKS.md: requirements for replacement artwork images and metadata.
- qa/: technical evidence, reviewer reports, screenshots and acceptance rubric.
- wall-plan.svg: current divider arrangement.

## Parallel development workflow
Work on a branch such as site/backend-domain. Gallery improvements should use their own branch. Pull the latest main before starting; review changes through pull requests into main so simultaneous work does not overwrite another contributor.

```sh
git switch -c site/backend-domain
# Make and verify changes.
git add .
git commit -m "Describe the site change"
git push -u origin site/backend-domain
```

Open a pull request targeting awesthoff654-afk/website main. If you use a fork, push to your fork and open the pull request back to this original repository. A fork alone does not give write permission to the original. An accepted collaborator invitation allows direct pushes, subject to repository branch rules; reviewed merges are preferred.

Keep domain and backend tasks separate from the rendering files above where possible. Coordinate before changing shared layout, dependencies, route data or gallery UI. Use Vercel preview deployments to assess changes, then check the production deployment after merging. Check Vercel's access settings for contributor preview/deployment permissions.

## Current quality status — do not call this finished
Iteration 5 passed the Technical Gate. The full route and controls were checked; dense geometry sampling found no camera collision. Performance was usable on the tested machine, but this is not a cross-device performance guarantee.

Independent visual review: overall 7.7/10.
Required acceptance: at least 9.2 overall and no critical category below 8.8. Acceptance has NOT been met.

Latest category scores:
- Geometry/proportions: 8.6
- White Cube resemblance: 8.2
- Materials: 7.5
- Lighting/GI: 7.6
- Shadows/contact: 8.0
- Reflections: 6.5
- Artwork integration: 7.9
- Camera/cinematic quality: 8.3
- Antialiasing/postprocessing: 8.5

Priority corrections: visible coherent polished-floor reflections; subtle dark expansion joints instead of bright dotted seams; brighter, nuanced architectural daylight and indirect illumination; fine physical canvas/paint detail and real labels; a wider final architectural composition; genuine withdrawal from each artwork before turning toward the next.

Full feedback: qa/visual-iteration-5.md. Technical evidence: qa/technical-iteration-5.md.

Continue Builder → Technical Gate → independent Visual Reviewer. Failed technical builds do not receive visual scores. Score only after running and inspecting that exact iteration, retain evidence, and update qa/ITERATIONS.md. A successful deployment does not establish visual acceptance.
