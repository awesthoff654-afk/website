# GitHub → Vercel

The `vaest-gallery` directory is the application root. Publish its contents as a dedicated repository, or select `outputs/vaest-gallery` as Vercel's Root Directory if publishing the surrounding workspace.

## Run locally

Use Node.js 22 LTS and pnpm 11.25.0 (install pnpm with npm if needed). From the application root:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by the server. To check the production application:

```sh
pnpm build
pnpm start
```

## Push to GitHub

Create an empty repository in your GitHub account. In this application directory, run the following, replacing the example URL with your repository URL:

```sh
git init
git add .
git commit -m "Build VÆST cinematic gallery"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/vaest-gallery.git
git push -u origin main
```

Do not commit `node_modules`, `.next`, local environment files, or credentials. The included ignore file handles these. If this folder is already in your desired Git repository, use that repository's ordinary commit/push workflow instead of initializing another.

## Import into Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Choose **Next.js** as the Framework Preset.
3. Set Root Directory to the folder containing this project's `package.json`.
4. Use the standard `pnpm build` build command and automatic Next.js output settings.
5. Deploy. Open the resulting preview and repeat the camera route and browser checks before treating it as accepted.

The MVP needs no database, CMS, authentication, or secret environment variables. Deployment itself does not establish the visual acceptance score. Scores and technical evidence are recorded in `qa/` and the iteration log.

Vercel creates deployments from connected repository changes. Use preview deployments to review future artwork and rendering changes before promoting them to production.

Official references: [Vercel Git deployments](https://vercel.com/docs/git), [Vercel deployment workflow](https://vercel.com/docs/deployments), [Next.js deployment options](https://nextjs.org/docs/pages/getting-started/deploying).
