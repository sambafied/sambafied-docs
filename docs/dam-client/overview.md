---
title: DAM Client overview
description: The Sambafied DAM Client vision and the scope of its current development preview.
---

# DAM Client overview

**Your AEM assets, closer to the work you do.** Sambafied DAM Client is being built around a native desktop folder experience: navigate assets through familiar filesystem paths and keep separate AEM instances in separate working folders.

The intended experience is similar in spirit to OneDrive’s folder workflow. This is a workflow analogy, not a claim of feature parity or a Microsoft integration.

## Why folders come first

Creative work often involves opening, placing, and navigating files across several desktop tools. A folder-first workflow aims to keep those files within the places people already use, rather than requiring a separate asset browser for every interaction.

The current Windows preview has exercised a bounded AEM namespace in Explorer and on-demand recall of originals. The desktop window and tray provide connection and status surfaces; the filesystem is central to the intended everyday experience.

## One client, distinct destinations

The connection model includes named profiles and explicit mount paths. The goal is to use one client for multiple AEM instances, each mapped to its own folder. Full concurrent multi-instance operation is still subject to qualification.

See [multiple instances](multiple-instances.md) for a concrete mapping example and the separation rules to consider.

## Local AEM and AEM as a Cloud Service

Both deployment paths are in product scope. Use the [local AEM connection guide](connect-local-aem.md) or [Cloud Service connection guide](connect-cloud-aem.md). Authentication and operation acceptance remain specific to each environment; a local result does not certify every Cloud or production configuration.

## What an evaluation can establish

A local evaluation can check whether the folder workflow fits your team's habits and verify the bounded scenarios for the exact candidate build. It cannot establish support across AEM versions, production SSO configurations, creative applications, or Cloud Service deployments.

Start with [getting started](getting-started.md), then use [readiness and limits](status.md) as your evaluation boundary.
