---
title: Troubleshooting
description: Diagnose bounded preview issues without losing local work or exposing credentials.
---

# Troubleshooting

First record the exact candidate revision, connection name, work-folder path, AEM target, action, and error. Keep session cookies, passwords, tokens, and sensitive asset names out of shared reports.

## The connection fails

Confirm the Author URL and the intended account. A successful browser login alone does not prove that the client has a usable AEM session. Authentication profiles and endpoint access must be qualified for the target environment.

Do not switch upload or authentication strategy merely because a request returns 401, 403, or 404. Check the selected profile and candidate’s documented support boundary.

## A new work folder will not mount

Check that the path is new and empty, the filesystem and volume meet the candidate’s native preflight, and the agent has the required development package identity.

A retained registration, foreign ownership, partial initialization, or an unqualified volume can block a mount. Preserve the folder and state. Do not recursively delete it or disable system protections to force a pass.

## A file appears but will not open

A cloud-only placeholder still needs its original bytes. Check that the agent is running, the connection is authenticated, and the original remains accessible in AEM.

Use the candidate’s root-status command for the exact mount path. A changed remote observation, interrupted recall, or session expiry can reject an open. Capture the error rather than treating the placeholder as a downloaded copy.

## Explorer looks different from a background test

Native API success does not prove a navigation entry, menu, availability icon, or file dialog behaves as expected. Check the exact package identity and native registration, then compare with the candidate’s visual qualification notes.

Do not infer production readiness from a background-only result.

## My changes are not visible in AEM

A local save is not proof of remote publication. Inspect the candidate’s Changes surface and publication state. Pending or uncertain operations require reconciliation; repeated blind uploads can make diagnosis harder.

Preserve the local edited file and the agent’s retained state. Complete sync and production publication acceptance remain open.

## I need to remove the work folder

Read [stop and unregister](folder-workflow.md#stop-and-unregister) first. Stop, unregister, and delete are different operations. Cloud-only entries have distinct retention behavior from fully recalled files.
