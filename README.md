# Live Demo App

Single source tree: `src/` is bundled for the browser **and** patched by the auto-fixer on GitHub.

## Layout

```
examples/live-demo/
├── src/           # application source (bugs live here)
├── test/          # CI tests (fail until bug is fixed)
├── dist/          # build output (gitignored)
├── index.html     # demo UI (run from monorepo root)
├── config.js      # projectKey, endpoint, release
└── package.json
```

## Push to GitHub (one-time)

Push **this folder** as its own repository:

```bash
cd examples/live-demo
git init
git add src test package.json .github .gitignore README.md
git commit -m "Live demo app"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Link it to the auto-fixer (from project root):

```bash
./scripts/setup-live-demo-github.sh https://github.com/YOUR_USER/YOUR_REPO
```

## Run the demo

From the **BSC project root**:

```bash
npm run build:live-demo
npm run dev              # terminal 1
npm run serve:live-demo  # terminal 2
```

Open http://localhost:8080/examples/live-demo/

Full script: [docs/LIVE-DEMO-WALKTHROUGH.md](../../docs/LIVE-DEMO-WALKTHROUGH.md)
