# Source review and claim boundaries

Reviewed 20 October 2026. Only the documentation repository was modified.

## Target and local references

- Target: D:/projects/sambafied/sambafied-docs
- Origin: https://github.com/sambafied/sambafied-docs.git
- Baseline: clean main, only README.md; no target/ancestor AGENTS.md found.
- Branch: feature/sambafied-docs-site. Only main exists remotely, so draft PR targets main.
- Read-only local examples: VibeGov src/pages/index.tsx, index.module.css and package/config structure; Governance.Foundation docusaurus/package.json.
- Engineering guidance: development-guidelines-master/details/gitflow.md, javascript.md, qualitygates.md. Uses feature branch, exact dependency versions/lock and meaningful browser checks; legacy TypeScript 2 advice does not apply to this JavaScript Docusaurus 3 site.
- Sites guidance: local-only workflow, grounded marketing content, responsive design and local preview. No hosted Site was registered.

## Product implementation and evidence

D:/projects/sambafied/desktop-client-adobe
Inspected HEAD: 46975592fd26c41a6f6f8d540cf81650299781ab

Read README.md and reference-repository AGENTS.md, plus:
- docs/desktop-ui.md and desktop-shell.md
- docs/cfapi-local-preview.md and dam-reads.md
- docs/deployment-compatibility.md and local-app-qualification.md
- docs/auto-clean.md
- docs/research/local-aem-write-qualification-2026-10-17.md
- crates/bridge/src/main.rs, ipc.rs and cloud.rs

The product worktree is actively developed by another owner. It was read only; this task did not run the product or change its source, state, credentials, assets or processes.

The older README/slice notes and later local write contracts differ in scope. The site distinguishes bounded later local adapters from complete sync and production acceptance. Named connections and explicit mount paths are architectural evidence, not complete simultaneous multi-instance acceptance.

The owner confirms local AEM and Cloud Service as product scope. Separate guides describe the inspected sign-in path while retaining per-target operation and qualification boundaries.

## Official Adobe sources

- https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/introduction
- https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/get-started
- https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/install-upgrade
- https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/troubleshoot#cannot-login-cookies-issue
- https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/release-notes

Adobe already provides native desktop integration. Its switching guidance describes cookie interference and a logout/clear remedy for that situation, not a universal cookie-clearing requirement or explicit current-version absolute one-server limit. Its v3 notes include new-file auto-upload and collection sync. The site's comparison keeps these distinctions.

Adobe topics were used as a coverage checklist. All Sambafied prose is original; no Adobe screenshots or compatibility tables are copied. Unverified feature topics remain in the internal FEATURE-COVERAGE.md checklist.

## Approved asset provenance

Copied unchanged:
- umbrella-emblem.svg: umbrella assets/logo/svg/emblem.svg
- favicon.ico: umbrella assets/icons/favicon.ico
- social.jpg: umbrella assets/web/og-image-1200x630.jpg
- sambafied-banner@2x.png: umbrella assets/banner/sambafied-banner@2x.png
- product-icon.svg: DAM Client assets/logo/svg/emblem.svg
- product-small.svg: DAM Client assets/logo/svg/mark-s.svg

Both brand-guide.md files were read. The umbrella mark uses a striped sunset; the DAM Client mark has a complete orange ring. Local PNG inspection and parent visual inspection/Library metadata match the selected references. No attachment-byte provenance workaround was used.

The navbar uses the parent icon. Home displays the full original banner without crop/distortion. The product illustration uses the orange-ring mark at 64px and the simplified S at small sizes, following the brand pack's small-size guidance.

## Final scope

Coming-soon umbrella homepage, concise first-product teaser, separate DAM Client page and original docs. No public project/repository/issue links, downloads, pricing, release date, support commitment, certified matrix, affiliation, or unqualified offline/sync/security claim. The native HTML/CSS/SVG Explorer UI is labeled an illustration.

No DNS, deployment, publication, merge or product/reference-site changes. A future screenshot shot list is retained; there are no broken image placeholders.
