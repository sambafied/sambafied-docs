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
- docs/: GENERATED public projection; edit canonical pages in the private umbrella repository docs/public
- src/components/: illustrative multi-instance folder diagram
- src/css/custom.css: responsive brand theme
- static/img/: unchanged selected assets from the supplied brand packs
- tests/: production-site browser checks
- review/screenshots/: public site QA captures; private design/review notes stay in the canonical source

## Publishing boundary

The canonical URL is configured as https://sambafied.me. This does not publish the site or configure DNS. There is deliberately no deployment workflow, deploy script, or CNAME change. Publication requires separate authority.

No binaries, pricing, support commitments, or production compatibility claims are supplied.

## Canonical authoring source

Public Markdown is authored in sambafied/docs/public. Everything else in the umbrella documentation is private by default and is not recursively copied. The explicit allowlist and publication markers control export.

From the approved umbrella source checkout:

```powershell
python scripts/export-public-docs.py --destination D:/projects/sambafied/sambafied-docs
python scripts/export-public-docs.py --destination D:/projects/sambafied/sambafied-docs --check
```

This site tracks only the generated public pages and public-docs-source.json (source revision + content hashes). npm run validate:docs checks that snapshot; npm run build runs it automatically. npm run test:projection tests drift/private-file rejection. These checks require no private-repository credentials. Source-side --check additionally compares the canonical allowlist and bytes.

Do not manually maintain another copy here. To remove a page, explicitly review/remove its generated file and state entry before running the revised source export; no automatic pruning is performed. No cross-repo workflow or website deployment has been enabled.