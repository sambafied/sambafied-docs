# Site review and validation

Final review for the coming-soon Sambafied site.

## Architecture and scope

- Umbrella icon in navigation; original sambafied-banner@2x.png on home, displayed fully without cropping.
- Concise parent-brand home with first-product entry and quick paths.
- Separate DAM Client page with the unchanged orange-ring icon and a labeled Explorer-style illustration.
- Original documentation covering preparation, local/Cloud connection paths, multiple mappings, filesystem behavior, asset discovery, publication, recovery, preferences and troubleshooting.
- Public project/repository/issue links removed. No download/release/pricing/support promise.
- Unverified feature coverage retained internally, with a future screenshot shot list.
- No DNS, deployment, release or merge changes.

## Review findings addressed

- Adobe already provides desktop integration; comparison acknowledges it.
- Current v3 release notes include new-file automatic uploads and collection sync; comparison avoids broad no-sync claims.
- Server-switching/cookie guidance does not prove an absolute one-server limit; uncertainty is explicit.
- Named connection primitives do not prove complete simultaneous multi-instance acceptance.
- Local, Cloud, production, native UI and creative-app acceptance remain distinct.
- Lazy-loaded images are decoded before verification. Keyboard skip checks actual next focus, because the framework removes a temporary tabindex after programmatic focus.
- Separate desktop/mobile/narrow screenshots and automated checks cover the actual production build.

## Verification limits

Browser automation uses Chromium at desktop, iPhone-sized Chromium emulation, and 320px widths. This is not a physical iOS/Safari or assistive-technology certification.
Automated WCAG checks and keyboard smoke tests do not replace a full screen-reader audit.
No live AEM/product execution was performed by this docs task; runtime statements are scoped to inspected product documentation, code and recorded local evidence.
Independent Adobe topic/source research was supplied by the parent. The implementation/content review recorded here is a self-review; a separate code reviewer has not been claimed.

Automated accessibility found inline documentation links distinguishable only by color. Fixed by underlining content links, rather than suppressing the rule. Unused copied logo files and superseded style overrides removed.

## Final results

- npm run build: PASS, including broken-link checks.
- npm run test:e2e: 18/18 PASS in 18.6 seconds.
- 16 public routes checked at 1440x1000, iPhone 13-sized Chromium and 320x800.
- Zero page errors, missing images, horizontal document overflow or rendered GitHub links in route checks.
- Keyboard skip, desktop dropdown, mobile menu and homepage quick paths pass.
- Automated WCAG 2 A/AA and 2.1 A/AA rules pass for home, product, docs index, Cloud connection and readiness pages at each viewport.
- Manual visual inspection of desktop home/product/docs and mobile home/product captures completed; six preserved captures under screenshots/.
- git diff --check is included in the final repository checks.
