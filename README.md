# Chirag Chauhan — React portfolio

A premium dark portfolio built from your existing React + Vite project. Includes a CSS 3D hero, project filtering, accessible native project dialogs, freelance services, a direct Netlify inquiry form, responsive styles, and reduced-motion support. No WebGL or animation library is required.

## Start locally

Use Node.js 22.12+ (or a compatible newer LTS version).

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Use a terminal inside the extracted project folder, beside package.json.

## Production build

```bash
npm run build
npm run preview
```

The build prerenders the initial homepage into dist/index.html, then React hydrates it for interactivity. Metadata, structured data, a social-sharing PNG, robots.txt, and sitemap.xml are included. This is a static site and needs no backend.

## Deploy to your existing Netlify website

### Manual upload

The included dist folder is already built. Upload **the dist folder**, not the entire source ZIP, through Netlify's deploy interface for your existing site. Keep the existing custom domain attached to that site.

### Git deployment

Copy the project into your existing repository, commit, and push. The included netlify.toml uses:

- Build command: npm run build
- Publish directory: dist
- Node version: 22

This ZIP does not include your old Git history or node_modules.

## Contact configuration

Your existing Upwork URL is preserved. GitHub and LinkedIn links are in src/content.js.

Your email address and WhatsApp number were not in the supplied source, so they are not invented. To enable them, copy .env.example to .env and set your actual public details:

```text
VITE_CONTACT_EMAIL=your actual email address
VITE_WHATSAPP_NUMBER=country code followed by your actual number
```

Use digits only for WhatsApp (no plus sign or spaces). In Netlify Git deployments, add those values as build environment variables. Rebuild after changes. These are public contact details, never secrets.

### Enable direct inquiries (no custom backend)

The form now submits directly to Netlify Forms. Name, email, service, budget, and project details are sent with a URL-encoded POST. There is a hidden honeypot field, an in-progress state that prevents double submission, a success message, and an error state that keeps the visitor’s input. Requests time out after 20 seconds.

**One-time activation on your existing Netlify site:**

1. Open your portfolio project in Netlify and go to **Forms**.
2. Select **Enable form detection** if it is not already enabled.
3. Deploy the updated **dist** folder (or push the source for a Git build) AFTER enabling detection.
4. Check that **project-inquiry** appears in Forms.
5. Go to **Forms > Submission notifications > Add notification** and add your actual email address.
6. Submit one test inquiry on the deployed website and confirm it appears in the dashboard and your inbox. If missing, check spam submissions and notification settings.

The static registration form is in index.html outside the React root. Its field names match the visible form so Netlify can detect it at deploy time without changing React hydration markup. public/thank-you.html handles normal submissions when JavaScript is disabled.

Email notifications are configured in Netlify, not through VITE_CONTACT_EMAIL. You do not need API keys, a database, Node hosting, or a custom API for this form. VITE_CONTACT_EMAIL only controls the optional public email link.

Sending is intentionally unavailable in plain localhost previews; the form explains this instead of displaying a false success. Use the deployed Netlify website to test real delivery. Hosting elsewhere requires connecting a compatible form service.

Official setup: https://docs.netlify.com/manage/forms/setup/
Notifications: https://docs.netlify.com/manage/forms/notifications/

## Edit content and design

- src/content.js: profile links, services, project summaries, details, and statuses.
- src/App.jsx: layout and interactions.
- src/styles.css: typography, colors, breakpoints, and motion.
- index.html: SEO title, description, canonical URL, social tags, and structured data.
- public/social-preview.png: sharing graphic.
- public/chirag-chauhan.png: your supplied portrait, used in the About section without face edits.

The site uses Google Fonts with local system font fallbacks. No external scripts, analytics, or trackers are added.

## Project honesty

Maru Rajwadu Restaurant and Hi-Tech Dholka are shown as deployed React websites, with the exact live and GitHub links you supplied. Descriptions are grounded in the restaurant page title and the repositories. Website cover cards are graphic designs, not screenshots. No paid-client or testimonial claims are made. create-smart-api is shown as published open source. Salon Management SaaS and PlatePilot are marked **In development**, with no live-demo buttons. Their system maps are clearly labeled architecture illustrations. The terminal is an illustrative workflow, not a captured session. No client reviews, revenue figures, project screenshots, or customer results are fabricated. Replace the maps with actual screenshots when you have them and update statuses only when verified.

## Verification

Production build and prerendering are checked. DOM interaction checks cover project filtering, modal opening/closing, navigation, inquiry submission with simulated successful and failed network responses, local-preview behavior, and React hydration. These are not browser visual checks; inspect the final layout on your own desktop and phone before replacing your live deployment.

Live form delivery and email notifications have not been tested because this ZIP has not been deployed to your Netlify account. Enable form detection and redeploy before accepting inquiries.
