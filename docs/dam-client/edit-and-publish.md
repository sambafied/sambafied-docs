---
title: Edit and publish
description: Understand local edits, explicit publication, checkout and the bounded local write path.
---

# Edit and publish

A local save and a confirmed AEM update are different events. Keep the work folder’s Author and account visible as you move from editing to publication.

## Work on a local original

Recall the original before editing. Save through the desktop application as usual, then inspect the candidate’s Changes surface. A saved local file is not a receipt that AEM received the change.

The inspected development code tracks root- and principal-bound generations in a journal. The Changes surface presents immutable generations rather than inferring a destination from a filename.

## Review before publication

For a candidate that enables the bounded local on-premises publication adapter:

1. Confirm the connection, work folder, and destination asset.
2. Review the captured local generation and any pending or uncertain operation.
3. Use the candidate’s explicit publication action.
4. Confirm the resulting remote state before considering the operation complete.

Manual publication is the default in the inspected local contract. A preference can opt in to future **new-file** uploads. It is not blanket approval to overwrite existing assets.

## Existing edits and collisions

The local contract uses an explicit **Create version & upload mine** path for existing edits or name collisions. It verifies a recoverable remote version before replacement.

That recovery mechanism is not an atomic multiwriter lock. The reviewed local Author accepts stale conditional binary updates; a preflight comparison cannot guarantee that another user will not write between the check and replacement.

For an uncertain response, stop and reconcile the remote result before repeating the action. See [conflicts and recovery](conflicts-and-recovery.md).

## Check out and check in

The Explorer-action implementation includes check-out and check-in for an eligible registered asset. Check-in releases the current user’s checkout only and refuses unresolved local work, pending or unknown jobs, and open writers under its inspected contract.

**Check-in does not upload.** Do not use it as a shortcut to publish edits.

## Keep deployment boundaries visible

These local adapters do not establish complete production sync or Cloud Service binary-write acceptance. Local deletion is not propagated to AEM under the inspected publication contract. Other operations—such as moving, deleting, duplicating, or bulk uploading repository content—need their own explicit qualification.

Use [readiness](status.md) when planning a workflow.
