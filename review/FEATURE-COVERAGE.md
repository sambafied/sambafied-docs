---
title: Feature coverage
description: A topic map for original Sambafied documentation with explicit implementation and readiness boundaries.
---

# Feature coverage

This topic map uses the questions covered by Adobe’s desktop-app documentation as an evaluation checklist. The guidance here is written for Sambafied’s own architecture and evidence; it does not copy Adobe prose, screenshots, compatibility lists, or claim complete parity.

**Sambafied DAM Client is coming soon.** Local AEM and AEM as a Cloud Service are both product scope. Verify each operation for the exact candidate and deployment.

## Prepare and connect

| Topic | Sambafied guidance and evidence boundary |
| --- | --- |
| Install, upgrade, requirements | [Getting started](../docs/dam-client/getting-started.md) and [preferences/storage](../docs/dam-client/preferences-and-storage.md). Development identity and native preflight matter; no production installer or published version matrix. |
| Local AEM sign-in | [Local connection guide](../docs/dam-client/connect-local-aem.md). Author-page sign-in with bounded local lifecycle evidence. |
| Cloud Service sign-in | [Cloud connection guide](../docs/dam-client/connect-cloud-aem.md). Separate Author identity and operation eligibility; live production gates remain separate. |
| Multiple instances | [Multiple instances](../docs/dam-client/multiple-instances.md). Distinct profiles and folders; full simultaneous experience needs qualification. |

## Work with assets

| Topic | Sambafied guidance and evidence boundary |
| --- | --- |
| Browse and search | [Find and open assets](../docs/dam-client/find-and-open-assets.md). Bounded local paging/search evidence; advanced and Cloud discovery require separate acceptance. |
| Download, open, reveal | [Folder workflow](../docs/dam-client/folder-workflow.md). Native path access and verified original recall in a bounded Windows preview. |
| Edit, upload, versions | [Edit and publish](../docs/dam-client/edit-and-publish.md). Local journal and explicit bounded write flows; complete production sync remains open. |
| Check-out and check-in | [Edit and publish](../docs/dam-client/edit-and-publish.md#check-out-and-check-in). Eligible Explorer actions; check-in is not upload. |
| Conflicts and uncertain transfers | [Conflicts and recovery](../docs/dam-client/conflicts-and-recovery.md). Preserve local work and reconcile; no atomic binary overwrite guarantee. |
| Collections and collection sync | Coverage target; no accepted Sambafied collection workflow established in this review. |
| Linked assets and placing | [Find and open assets](../docs/dam-client/find-and-open-assets.md). Qualify dependency paths and the exact desktop application; no automatic relinking promise. |
| Metadata, rename, move, copy, delete | Broader workflow contracts exist; no blanket accepted parity is claimed. Local deletion does not imply AEM deletion. |
| Bulk upload, drag-and-drop, export | Separate evaluation targets; do not infer them from original recall or a local single-file write. |

## Operate and recover

| Topic | Sambafied guidance and evidence boundary |
| --- | --- |
| Preferences, caching, cleanup | [Preferences and storage](../docs/dam-client/preferences-and-storage.md). Capability-gated cleanup and distinct resident/placeholder behavior. |
| Status and background activity | Agent status drives desktop/tray observations. Exact native appearance and end-to-end status behavior need candidate evidence. |
| Offline and restart | [Folder workflow](../docs/dam-client/folder-workflow.md) and [recovery](../docs/dam-client/conflicts-and-recovery.md). Some resident-byte/restart behavior has local evidence; full offline acceptance is separate. |
| Troubleshooting and uninstall | [Troubleshooting](../docs/dam-client/troubleshooting.md). Preserve local work; distinguish stopping, unregistering, and deleting. |

## Reference context

Reviewed against [Adobe’s introduction](https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/introduction) and [current release notes](https://experienceleague.adobe.com/en/docs/experience-manager-desktop-app/using/release-notes). Adobe’s v3 notes include new-file automatic upload and collection synchronization, so broad statements that Adobe never syncs or auto-uploads would be misleading.

See [Adobe desktop app context](../docs/dam-client/adobe-context.md) for the narrower, sourced comparison and [readiness](../docs/dam-client/status.md) for the current Sambafied evidence.
