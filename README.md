# Sambafied documentation and product site

Docusaurus 3 site for Sambafied, with DAM Client as its first product. Uses the same custom homepage + classic docs/sidebar approach inspected in the local VibeGov and Governance.Foundation sites.

## Local development

Node.js 22 or later:

```powershell
npm ci
npm start
```

## Validation

```powershell
npm run build
npx playwright install chromium
npm run test:e2e
```

The production build fails on broken site/Markdown links. Playwright tests exercise production pages, navigation, mobile menus, content boundaries, and overflow. Screenshots are generated in ignored test-results/.

## Structure

- src/pages/: marketing homepage and product page
- docs/: evaluation and product documentation
- src/components/: illustrative multi-instance folder diagram
- src/css/custom.css: responsive brand theme
- static/img/: unchanged selected assets from the supplied brand packs
- tests/: production-site browser checks
- review/: source provenance and validation notes

## Publishing boundary

The canonical URL is configured as https://sambafied.me. This does not publish the site or configure DNS. There is deliberately no deployment workflow, deploy script, or CNAME change. Publication requires separate authority.

No binaries, pricing, support commitments, or production compatibility claims are supplied.
