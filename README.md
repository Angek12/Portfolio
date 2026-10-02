# Ange Kevine Uwayo — Portfolio

**Software Engineer | AI & Full-Stack Development**

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Update the CV

Replace this file and redeploy — no code change needed:

```
public/cv/Ange_Kevine_Uwayo_CV.pdf
```

Keep the same file name. To use a different name, change `cv.path` and `cv.fileName` in `src/data/site.ts`.

## Update content

All text, links, projects, skills, experience and recommendations live in **`src/data/site.ts`**.

- **LinkedIn:** set `links.linkedin`. The button stays hidden while it is empty.
- **Project links:** add `githubUrl` / `liveUrl` to a project. Buttons only appear when a URL is set.
- **Recommendations:** `kind: 'quote'` shows a quote, `kind: 'reference'` shows the person without one.

## Structure

```
public/cv/            CV PDF served at /cv/...
src/data/site.ts      all editable content
src/app/              layout, page, global styles
src/components/       Navigation, Hero, About, Experience, Projects,
                      Skills, Recommendations, CVDownload, Contact, Footer
```

## Run locally

```
npm install
npm run dev      # http://localhost:3000
npm run build
```
