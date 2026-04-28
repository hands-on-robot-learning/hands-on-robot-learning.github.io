This repository contains the static course website for "Hands-on Robot Learning."

## Goals

Build a polished, responsive, static course website for a hands-on robotics/robot-learning course. The site should be easy for the instructor to update using Markdown/MDX and small YAML data files.

## Stack

- Astro
- Astro Starlight
- MDX
- Minimal custom CSS
- Static deployment target: GitHub Pages
- No database
- No server-side runtime
- No authentication

## Design principles

- Mobile-first and responsive
- Fast-loading static pages
- Clear information architecture
- Slightly playful robotics-lab personality
- Serious technical content
- Accessible color contrast
- Dark mode support
- Prefer Markdown content over hardcoded JSX/TSX

## Content conventions

- Assignments live under `src/content/docs/assignments/`
- Guides live under `src/content/docs/guides/`
- Policies live under `src/content/docs/policies/`
- Reusable structured content should live in `src/data/`
- Use MDX only when a page needs custom components
- Keep pages instructor-editable

## Components to prefer

- AssignmentCard
- WeekCard
- MysteryBox
- Checklist
- LeaderboardTable
- DemoVideo

## Avoid

- Heavy client-side React unless necessary
- CMS integrations
- Databases
- Authentication
- Overly complex animations
- Wide fixed-width tables that break on mobile
- Hardcoding schedule content into components when YAML would work

## Commands

After changes, run:

```bash
npm run build
```
