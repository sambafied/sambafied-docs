---
publication: public
title: Getting started
description: Prepare a bounded local evaluation of the Sambafied DAM Client development preview.
---

# Getting started

The public product is **coming soon**. These preparation notes are for a bounded local development evaluation, using disposable test assets. A production installer and a supported compatibility matrix are not available through this site.

## Before you begin

1. Obtain the exact candidate build and its matching development instructions from the product maintainer. The product source currently documents a Rust build and development package identity setup; an unpackaged executable is not enough for every fresh Explorer work folder.
2. Use the candidate’s documented Windows and NTFS setup. The existing evidence is Windows-specific; it does not qualify macOS or Linux.
3. Have an authorized local AEM Author and a dedicated test subtree containing known originals. A local SDK result does not establish production on-premises or Cloud Service compatibility.
4. Choose a **new, empty** work-folder location on a volume that passes the candidate’s Cloud Files preflight. Do not point a new mount at an existing working directory.
5. Record the candidate revision, AEM configuration, test subtree, and exact work-folder path.

Read [readiness and limits](status.md) before connecting. This guide describes evaluation preparation, not a production installation procedure.

## Desktop flow

The implemented desktop flow accepts an Author URL and opens the Author’s sign-in page. After a successful connection, the agent owns the session and work folder. The local sign-in, mount, original recall, logout, and remembered restore path has bounded local evidence.

Use the matching candidate instructions for development identity staging and launch. A local sign-in result does not qualify your organization’s SSO setup or an AEM as a Cloud Service session.

## Inspect through the CLI

These commands illustrate the inspected foundation CLI. They require an already-built matching candidate and its running agent, a configured connection named \`local\`, and a successful authorized login.

\`\`\`powershell
aem-desktop-bridge status
aem-desktop-bridge browse --connection local --path /content/dam/evaluation --offset 0 --limit 25
\`\`\`

The path is an **example**: replace it with your dedicated test subtree. Browse results are paged; follow the next offset rather than treating one page as the whole repository.

For the native folder preview:

\`\`\`powershell
aem-desktop-bridge mount --connection local --mount-point C:\SambafiedEvaluation
aem-desktop-bridge root-status --mount-point C:\SambafiedEvaluation
\`\`\`

The example work folder must be new and empty, on a qualified volume. A fresh native root also needs the agent’s development package identity. Do not use these commands to adopt or repair an existing folder.

## Verify the workflow

Open the work folder in Explorer, navigate to a known test original, and open it. Check the content against the known source. Record errors and the root status; an Explorer icon alone is not evidence that bytes were transferred correctly.

Do not use a local save as proof that a remote upload succeeded. Publication and sync have separate behavior and qualification boundaries.

## End the evaluation deliberately

Stop a root using its exact path:

\`\`\`powershell
aem-desktop-bridge root-stop --mount-point C:\SambafiedEvaluation
\`\`\`

Stopping and unregistering are different. Read [the folder lifecycle](folder-workflow.md#stop-and-unregister) before removing a registration. Preserve any local edits and uncertain publication state for review.

If a step fails, use [troubleshooting](troubleshooting.md). Avoid repeatedly creating replacement roots or deleting retained state.
