# Hands-on Robot Learning course website

Public website for a Fall 2026 Johns Hopkins CS course on hands-on robot learning, real-robot data collection, imitation learning, and VLA-style deployment.

This repository contains the Astro/Starlight static site for the course. It is designed to be easy to maintain with Markdown/MDX content, small YAML data files, reusable Astro components, and minimal custom CSS.

## Links

- Live site: <https://hands-on-robot-learning.github.io/>
- Course overview: <https://hands-on-robot-learning.github.io/overview/>
- Assignments: <https://hands-on-robot-learning.github.io/assignments/>
- For sponsors: <https://hands-on-robot-learning.github.io/sponsors/>

## Local development

Requirements:

- Node.js `>=22.12.0`
- npm

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Start the Astro dev server. |
| `npm run start` | Alias for `astro dev`. |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Preview the built site locally. |
| `npm run astro` | Run Astro CLI commands. |

There is currently no separate lint or check script in `package.json`; use `npm run build` as the main sanity check.

## Project structure

```text
src/content/docs/          Course pages and Starlight docs content
src/content/docs/assignments/
                           Assignment overview and A1-A4 pages
src/content/docs/guides/   Practical setup, data, and training guides
src/content/docs/policies/ Course policies
src/content/docs/readings/ Readings and research discussion page
src/components/            Reusable Astro components
src/data/                  Small YAML data files for course metadata/content
src/styles/custom.css      Global Starlight overrides and site-specific styling
astro.config.mjs           Astro/Starlight configuration, sidebar, site metadata
public/                    Static public assets
```

Most ordinary content edits should happen in `src/content/docs/` or `src/data/`. Use MDX when a page needs custom components or richer layout.

## Editing workflow

1. Update the relevant Markdown/MDX page or YAML data file.
2. Keep links absolute from the site root when practical, for example `/assignments/`.
3. Keep tables mobile-friendly. Prefer responsive HTML tables, cards, or compact grids for wide structured content.
4. Keep sponsor-facing language institutionally appropriate and avoid implying endorsement, approved sponsorship tiers, or procurement commitments.
5. Run:

```bash
npm run build
```

6. Optionally preview the built site:

```bash
npm run preview
```

7. Commit changes or open a pull request with a short summary and build result.

## Content notes

- The site should communicate a serious, hands-on robotics course while remaining easy for instructors to update.
- Avoid broken links, placeholder course-number language, and wide fixed-width tables.
- Preserve policies around safety, LLM/coding-assistant use, data integrity, grading, and sponsor boundaries.
- Do not add secrets, credentials, private student data, or deployment tokens to this repository.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

The workflow runs on pushes to `main` and on manual dispatch. It uses `withastro/action@v6` with Node 22 to install dependencies, build the Astro site, upload the Pages artifact, and deploy via `actions/deploy-pages@v5`.

The Astro site URL is configured in `astro.config.mjs` as:

```js
site: 'https://hands-on-robot-learning.github.io'
```

No deployment secrets or credentials are required in this README.

## Suggested GitHub repository metadata

These are repository settings, not files in this repo:

- Description: `Public website for a Fall 2026 Johns Hopkins CS course on hands-on robot learning.`
- Website: `https://hands-on-robot-learning.github.io/`
- Topics: `robot-learning`, `robotics`, `imitation-learning`, `vla`, `education`, `johns-hopkins`
