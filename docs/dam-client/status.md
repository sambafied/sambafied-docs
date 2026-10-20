---
publication: public
title: Readiness and limits
description: Distinguish locally observed behavior, implemented primitives and pending Sambafied DAM Client qualification.
---

# Readiness and limits

**Sambafied DAM Client is a development preview.** The reviewed source contains useful local implementations and evidence, alongside substantial open qualification work. No production support or general availability is implied.

Reviewed **20 October 2026**. The product source and individual evidence receipts remain authoritative for the exact candidate; older slice documents may describe earlier limits.

## Current evidence

| Area | Evidence and boundary |
| --- | --- |
| Windows folder access | A bounded local Author namespace, native work-folder registration, and on-demand original recall have local evidence. This does not establish all Explorer UI or creative-app acceptance. |
| Desktop connection flow | A Slint window and tray surfaces are implemented. Local sign-in, mount, logout and remembered restore have bounded evidence. Cloud Service signed-in and broader accessibility/high-DPI gates remain open. |
| Browse and download | Bounded paging and verified original download exist with local AEM evidence. Failure tests and local success do not establish production permissions or expiry behavior. |
| Search | A bounded on-premises QueryBuilder adapter has local known-asset, no-match, rejected-query and post-logout rejection evidence. Multi-page ordering, permission changes and Cloud Service remain open. |
| Multiple instances | Named connection and explicit mount-path primitives exist. The complete simultaneous multi-instance desktop experience remains under development and needs qualification. |
| Local changes and publication | Later code and local qualification cover a journal and bounded local on-premises write/version flows. Complete sync and production write acceptance remain open. |
| Explorer actions | Open in AEM, copy link, check-out and check-in have implementation and bounded local qualification work. Native activation and visual behavior require their own evidence. Check-in is not upload. |

## Qualification targets, not support claims

**AEM on-premises** and **AEM as a Cloud Service** are both intended production targets. Each requires its own authentication, endpoint, operation, version, and environment acceptance.

A local Author or Cloud SDK success does not certify a production on-premises release or a live Cloud Service environment. Adobe’s compatibility list cannot serve as Sambafied’s support matrix.

## Open boundaries

- Supported operating systems and AEM versions have not been published here.
- Complete offline, refresh, automatic sync, conflict handling, and multi-instance acceptance are not established.
- Creative-app compatibility, package identity, native Shell appearance, accessibility, and high-DPI behavior require exact-build evidence.
- Security controls in source are not equivalent to a completed security review or certification.
- There is no pricing, production download, release date, or support service commitment on this site.

## How readiness should advance

A capability should move from planned to observed only with recorded evidence for the exact build and scenario. Production readiness needs separate target acceptance, including failure and recovery behavior, rather than extrapolation from local tests.

Use [the evaluation guide](getting-started.md) to scope a local trial and [troubleshooting](troubleshooting.md) to collect useful evidence.
