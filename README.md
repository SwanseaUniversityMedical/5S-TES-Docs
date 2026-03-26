# 5S-TES-Docs
User Documentation for 5S-TES

## NOT YET in use
place holder for understanding github action deployment to github pages

# Developer Getting Started

- Install dependencies `npm i`
- Run the dev server `npm run dev`
- Access `http://localhost:3000` in browser
- Edit and watch live changes hot reload 👍

Recommend using Visual Studio Code (or derivative) with [suggested extensions](.vscode/extensions.json)

## Content

[Page files](https://nextra.site/docs/file-conventions/page-file) are added in `app/` with the directory structure mapping to the site path.

React components can be added as `.tsx` files locally to a page directory or, if shared, in the top level `components/`.

### Writing markdown

Add a `page.md` (or `page.mdx`) and write some markdown.

Nextra supports:
- [MDX](https://nextra.site/docs/guide/markdown) (Markdown with JSX) to allow inline use of React components (or useful javascript expressions)
- Frontmatter
- [Some GFM syntax](https://nextra.site/docs/guide/markdown#github-flavored-markdown) including [Alerts](https://nextra.site/docs/guide/github-alert-syntax)

### Writing React (Nextjs) Pages

Add a `page.tsx` and write some React, following [Nextjs conventions](https://nextjs.org/docs/app/api-reference/file-conventions/page).

By default standard Nextjs pages are included in Nextra's navigation.

> [!WARNING]
>
> Nextjs pages do not automatically include elements of Nextra's Docs Layout (the side navigation and table of contents)

## Customising navigation

Nextra mainly follows the directory structure for navigation hierarchy, sorting alphabetically.

Structure and metadata can be customised with:
- the [`_meta.js` file](https://nextra.site/docs/file-conventions/meta-file)
- Markdown Frontmatter, e.g.
    - [Page metadata](https://nextra.site/docs/built-ins/head#via-markdown-front-matter)
    - [Sidebar title](https://nextra.site/docs/file-conventions/meta-file)
    - [Folder index pages](https://nextra.site/docs/file-conventions/meta-file#with-index-page)
