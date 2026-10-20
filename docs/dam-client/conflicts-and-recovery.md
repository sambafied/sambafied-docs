---
title: Conflicts and recovery
description: Preserve local work and reconcile uncertain outcomes during a Sambafied evaluation.
---

# Conflicts and recovery

Keep the local original, captured changes, and operation context until the outcome is known. A network error can mean a request failed before AEM changed—or that AEM changed but the response never arrived.

## Recognize the situation

| Observation | Next step |
| --- | --- |
| Another user changed the remote asset | Recheck the remote version and review your local changes before publication. |
| Upload returned an uncertain result | Inspect the recorded operation and remote result before retrying. |
| Sign-in expired | Reauthenticate the intended connection; do not change the destination to get around the failure. |
| A work folder is disconnected | Inspect its exact root status and reconnect using its ownership information. |
| A root is partially initialized or stopping | Preserve it for explicit lifecycle recovery; do not create a fresh mount over it. |

## A recoverable version is not a lock

The bounded local publication path verifies a recoverable remote version before replacement. That helps recovery, but it does not establish atomic compare-and-swap protection against concurrent writers.

Do not treat a check-out icon, a successful preflight hash, or a successful HTTP response as a universal conflict guarantee.

## Retain the right context

Record the candidate build, connection, Author, account identity, work-folder path, action, and redacted error. Preserve the local file and pending generation. Avoid sharing credentials, session cookies, signed URLs, or sensitive asset contents in diagnostic notes.

Do not rename, move, or delete retained agent state to clear a warning. A similarly named connection is not an equivalent destination.

## Stop safely

Pausing the provider, closing a desktop window, quitting the agent, unregistering a root, and deleting files are separate operations. The inspected window lifecycle can leave the agent serving folders when the window closes.

Use [the folder lifecycle](folder-workflow.md#stop-and-unregister) before unregistering and [troubleshooting](troubleshooting.md) for connection and recall problems. Exact-build failure/recovery qualification remains distinct from source-level protections.
