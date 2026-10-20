---
title: Find and open assets
description: Browse a scoped AEM namespace, use bounded search, and recall an original through a work folder.
---

# Find and open assets

Choose the right connection before you browse or search. A result belongs to an Author, account, and configured DAM scope; the same filename in another connection is a different asset.

## Browse the asset tree

The foundation browse command returns a bounded page:

\`\`\`powershell
aem-desktop-bridge browse --connection local --path /content/dam/evaluation --offset 0 --limit 25
\`\`\`

The connection and path are examples. Use your configured evaluation subtree. Follow the returned next offset until completion rather than assuming the first page represents the whole folder.

A failed or partial listing does not establish that an asset was deleted.

## Search within the active context

The inspected desktop Search command has a bounded on-premises QueryBuilder adapter. Local checks cover a known asset, no-match results, rejected queries, and rejection after logout. They do not qualify every query, multi-page ordering, permission changes, or Cloud Service search.

A search should retain its connection context. Clearing a search should not switch the selected connection or change authentication.

Collections, advanced metadata discovery, and complete parity across deployment targets need their own acceptance. They are not implied by a successful single-asset search.

## Open through the work folder

Navigate to the registered work folder in Explorer and open a known test original. If it is still cloud-only, the agent must obtain the original before the file can be used.

Opening a file depends on its desktop application association and the candidate’s actual handling of that file. This site does not publish a creative-application compatibility matrix.

A linked document may depend on other files and their paths. Do not infer that opening one original also qualifies automatic dependency retrieval or relinking.

## Open the asset in AEM

The inspected Explorer-action implementation includes **Open in AEM** and **Copy AEM link** for a registered asset. The URL points to the authorized AEM environment; it does not grant someone else access or make the asset public.

Native menu activation and visual behavior have separate qualification requirements. See [readiness](status.md) and [troubleshooting](troubleshooting.md).
