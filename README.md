# Aegis Communication Website

Multi-page Next.js website for Aegis Communication, built with the App Router and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Project Structure

```text
app/          Route pages, layout, sitemap, robots
components/   Reusable UI components
lib/          Shared utilities and content models
public/       Static assets (including the Aegis logo)
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Start production server locally:

```bash
npm run start
```

## Environment Variables

No environment variables are required for the current implementation.

## Contact Form Integration Note

The contact form is currently a front-end prototype with validation and confirmation states only.

To enable real enquiry delivery:

1. Add a server endpoint (for example, a Next.js Route Handler under `app/api/contact/route.ts`).
2. Connect the form submit handler to that endpoint.
3. Send data to your preferred email or CRM provider.
4. Add rate limiting, spam protection (honeypot/CAPTCHA), and audit logging.

## Deployment (Vercel)

1. Push this project to your Git repository.
2. In Vercel, import the repository as a new project.
3. Keep default build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Deploy.

## SEO and Accessibility Coverage

- Unique metadata and Open Graph tags per page
- Generated `sitemap.xml` via `app/sitemap.ts`
- Generated `robots.txt` via `app/robots.ts`
- Semantic HTML structure and one H1 per page
- Keyboard-accessible navigation and form controls
- Focus-visible styles and high-contrast component palette
- Reduced motion handling via `prefers-reduced-motion`
