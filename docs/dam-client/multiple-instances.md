---
publication: public
title: Multiple AEM instances
description: Plan separate work folders for separate AEM instances with Sambafied DAM Client.
---

# Multiple AEM instances

**Multiple AEM instances. Separate folders. One desktop experience.** That is a central Sambafied DAM Client product goal: keep different asset repositories available simultaneously within the same familiar desktop workflow, while making each destination explicit.

## A concrete example

| Connection | Author | Work folder |
| --- | --- | --- |
| Brand studio | Your studio Author | \`C:\Work\StudioAssets\` |
| Campaign team | Your campaign Author | \`C:\Work\CampaignAssets\` |

These names and paths are illustrative. They do not describe a tested deployment or a product screenshot.

The connection and mount commands take an explicit connection name and work-folder path. The agent model binds a root to its connection and principal. These are the primitives for separate mappings; their existence does not prove a fully qualified simultaneous multi-instance desktop experience.

## Plan the separation

- Give each connection a recognizable name and record its intended Author and DAM subtree.
- Use a distinct, empty work-folder path for each new mapping.
- Confirm the signed-in identity and target before performing any operation.
- Evaluate each target and authentication profile independently.
- Do not treat moving files between two work folders as a qualified cross-instance migration workflow.

## What still needs validation

The complete experience needs evidence for simultaneous connections, independent sign-in and logout, restore after restart, destination clarity, publication routing, and failure isolation. Production on-premises and Cloud Service targets also need separate acceptance.

Until that evidence is recorded, treat the multi-instance workflow as **under development**, not a released compatibility promise.

Read [getting started](getting-started.md) for the bounded single-target evaluation path and [readiness](status.md) for open gates.
