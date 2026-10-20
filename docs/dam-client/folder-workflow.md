---
title: The folder workflow
description: Understand namespace snapshots, original recall, local changes, and work-folder lifecycle.
---

# The folder workflow

The core idea is familiar: navigate your AEM assets in a desktop folder and open a file where you work. The current native preview uses Windows Cloud Files integration, with bounded local AEM evidence.

## From AEM to your desktop

1. A named connection identifies the Author and configured DAM subtree.
2. A new, empty NTFS work folder is registered and populated from a bounded namespace snapshot.
3. Files begin as cloud-only placeholders.
4. Opening a supported original requests its bytes through the agent. The preview stages and verifies the original before completing recall.

The original folder-preview slice documents a maximum of **1,000 entries and 16 levels**. Treat these as preview constraints, not a production scale promise. Remote changes are not equivalent to a continuously refreshed mirror; evaluate the exact candidate’s refresh behavior.

## What local availability means

A placeholder is not a complete local copy. A file that has already been fully recalled can remain accessible after the provider stops or the user logs out. A cloud-only file cannot be newly recalled without the required running, authenticated provider.

This bounded behavior does not establish a complete offline mode. Do not rely on every asset being available without a connection, or interpret a status icon as an offline guarantee.

## Editing and publication

Saving locally and publishing to AEM are distinct events. Later local development work adds a durable change journal and explicit publication flows for configured local on-premises profiles. Manual publication is the default; existing edits and collisions have an explicit version-and-upload path.

These are bounded local adapters, not a production sync guarantee. Check [readiness](status.md) for the distinction between implemented work and accepted deployment targets. The inspected local publication contract does not propagate a local file deletion to AEM.

Do not delete or relocate pending work to clear a warning. Preserve local bytes and unresolved operations for diagnosis.

## Stop and unregister

**Stop** disconnects active provider work while retaining the registration and working files. It is not a request to delete the folder.

**Unregister** removes native registration after identity and lifecycle checks. Windows can remove cloud-only or partially recalled placeholders during unregister. The default command refuses those entries; an explicit discard option exists and can remove them. Fully resident originals and ordinary local-edited files are retained under the documented lifecycle contract.

Before unregistering, inspect the exact root, preserve local changes, and use the candidate’s matching instructions. A retained or partially initialized folder must not be silently adopted as a fresh mount.

## Evaluate the whole workflow

Check the exact candidate, AEM target, authentication profile, file type, and desktop application together. Background API checks do not establish Explorer appearance, navigation entries, keyboard access, or creative-app behavior.
