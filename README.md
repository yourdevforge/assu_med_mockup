# Assu-Med Nuxt Site

Static Nuxt 3 site for Assu-Med Ambulance Services.

## Commands

```bash
npm run dev        # Start the Nuxt dev server
npm run dev:local  # Start dev server on 127.0.0.1:3000
npm run build      # Build a server-rendered Nuxt app
npm run generate   # Generate static output for CDN/static hosting
npm run preview    # Preview the production output locally
npm run typecheck  # Run Nuxt/Vue type checks
```

## Asset Conventions

- Put files that should be served directly by URL in `public/`.
- Brand images used as `/images/...` belong in `public/images/`.
- Public icon images used as `/icons/...` belong in `public/icons/`.
- Global CSS belongs in `assets/css/` and is registered in `nuxt.config.ts`.
- Use `assets/` for files that should be processed by Vite/Nuxt imports instead of referenced by public URL.

## Static Hosting

For Cloudflare Pages or similar static hosting:

```txt
Build command: npm run generate
Output directory: .output/public
```

The current project is suitable for static generation. Contact and newsletter forms use `mailto:` fallbacks, so add a serverless form handler or third-party form service later if you need submissions to be stored or emailed automatically without opening the visitor's email client.
