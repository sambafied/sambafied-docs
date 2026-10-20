---
title: Preferences and storage
description: Understand connection settings, background lifecycle, work-folder storage and conditional cleanup.
---

# Preferences and storage

Settings should describe behavior available to the selected connection. A preference shown in a design contract is not evidence that it works for every deployment.

## Connection and startup choices

The inspected desktop UI includes startup/window choices, an explicit remember-connection option, the connected work-folder path, and measured local usage.

Remembered sessions are checked against the Author again. An expired or rejected session needs sign-in; an unreachable Author is different from an invalid account.

Changing a connection label does not move its files or retarget pending work. Use recognizable labels for separate AEM instances.

## Window, tray, and provider

Closing the main window can leave the agent serving registered work folders. Pause stops provider work; resume attempts to reconnect it. Explicit Quit follows the candidate’s drain/recovery lifecycle.

Do not assume that closing a window stops every transfer, or that pausing removes a folder’s registration. See [the folder workflow](folder-workflow.md).

## Local storage

Cloud-only placeholders differ from fully recalled originals and ordinary local edited files. Fully resident bytes can remain after stopping or logout, but that does not establish full offline support.

Maintain enough storage for the original and any retained changes. A cache location is not a backup policy. This site does not promise automatic quota management or eviction for all candidates.

## Conditional auto clean

The inspected auto-clean design applies only to eligible read-only roots and is capability-gated. The earlier native preview rejects read-only mode while its local enforcement remains unqualified, so auto clean is not an available blanket cleanup feature for that preview.

Do not enable a setting merely because a CLI command exists. Check whether the exact root reports support and whether the candidate has the relevant qualification.

## Upgrade and removal

No production installer or upgrade procedure is published here yet. For development candidates, follow the matching package-identity instructions and retain registered provider identity while roots depend on it.

Before removing a registration, preserve local changes and review [stop and unregister](folder-workflow.md#stop-and-unregister). Cloud-only and partially recalled entries have different removal behavior from resident files.
