# Macias Hunter's Personal Website

Welcome to the repository of my personal website, an elegant and efficient platform built with a modern tech stack. This site showcases my work and thoughts, leveraging Notion as a headless CMS and a suite of cutting-edge technologies.

## Tech Stack

This website is crafted using a blend of powerful tools and frameworks:

- TypeScript: Enhances JavaScript with types for safer coding.
- Next.js: A React framework for optimized user experiences.
- Notion API: Integrates seamlessly with Notion for dynamic content management.
- Next Themes: Enables easy theming and dark mode in Next.js apps.
- Tailwind CSS: For stylish, responsive, and customizable UIs.
- NextSEO: Manages SEO easily within Next.js projects.
- Vercel OG: Generates dynamic open graph images.

## Running Locally

To run the application locally, you'll need to set up a few environment variables in `.env.local`:

1. `NEXT_PUBLIC_URL` - Used to create absolute URLs, for canonical links and open graph images.
2. `NOTION_TOKEN` - Notion API client token. More info [here](https://developers.notion.com/docs/authorization).
3. `NOTION_DATABASE_ID` - Fetches notes/blog post list from Notion.

The Notion database should be configured with the following properties:

1. `id`
2. `created_time`
3. `last_edited_time`
4. `cover`
5. `hashtags`
6. `title`
7. `description`
8. `slug` - Used as a note's slug; e.g., `/notes/hello-world` where slug is `hello-world`.
9. `published` - Filters unpublished notes.
10. `publishedAt`
11. `inProgress` - Displays a `Work in progress` badge on notes.

Here's an example of how the Notion database should be set up:

![notion](screenshots/notion.png)

To run the application:

```bash
git clone [your-repo-link]
cd [your-repo-directory]
yarn
yarn dev
