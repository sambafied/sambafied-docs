---
title: Adobe desktop app context
description: Compare Adobe’s documented server-switching workflow with Sambafied’s intended concurrent multi-instance folder experience.
---

# Adobe desktop app context

**Multiple AEM instances. Separate folders. One desktop experience.** Sambafied’s intended advantage is concurrent access to distinct AEM instances through separate work folders in one client.

That complete simultaneous workflow is still under development. Named connection and mount primitives exist; they are not proof of end-to-end multi-instance readiness.

## What Adobe documents

Adobe Experience Manager desktop app already supports native desktop work: opening and editing assets, revealing downloaded files or folders, and explicitly uploading local changes. See [Adobe’s getting-started guide](https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/get-started).

Adobe also documents **changing the connection to a different server**. Its troubleshooting section explains that old cookies can interfere with authentication and prescribes logging out of the current session and clearing cookies before reconnecting in that situation. See [Login issues when switching to a different server](https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/troubleshoot#cannot-login-cookies-issue).

That is evidence of a server-switching workflow. It does **not** establish that cookie clearing is always needed, or provide an explicit current-version statement that only one server/session can ever be connected. We do not turn the absence of documented concurrent mappings into proof that they are impossible.

## Current-version context

Adobe’s [v3 release notes](https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/release-notes#app-version-3.0.0) describe automatic upload of new files under downloaded folders and collection synchronization. The comparison is about Explorer-first repository access and concurrent per-instance mappings, not a claim that Adobe has no sync or automatic upload behavior.

## Compare the workflows

| Question | Adobe’s documented workflow | Sambafied direction and boundary |
| --- | --- | --- |
| How do I reach assets? | Native application open/edit and file/folder reveal actions. | A native work folder as the starting point; bounded Windows/local AEM evidence exists. |
| What happens across servers? | Connection changes between servers are documented, with logout/cookie-clearing guidance for authentication interference. The reviewed sources do not document concurrent per-instance work-folder mappings. | Multiple AEM instances available simultaneously in distinct folders, within one client. Complete concurrent operation still needs qualification. |
| Does saving publish edits? | Upload Changes explicitly sends local edits to AEM. | Local save and remote publication are distinct. Bounded local adapters exist; production sync acceptance remains open. |

## Evaluate what matters

For teams working across brands, environments, or repositories, evaluate whether assets from each instance can remain available side by side, whether their destinations are clear, and how independent authentication and publication behave.

Sambafied’s multi-instance goal is to reduce connection switching as people move between repositories. It is a product direction, not a released feature or a promise of cross-instance migration.

Sambafied is an independent project and is not affiliated with Adobe. No endorsement, feature parity, performance advantage, or certified compatibility is claimed.

Sources reviewed **20 October 2026**. Check [readiness and limits](status.md) and [multiple instances](multiple-instances.md) before evaluating.
