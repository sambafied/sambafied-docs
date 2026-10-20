---
title: Connect to local AEM
description: Prepare a local AEM Author connection and a separate native work folder.
---

# Connect to local AEM

Sambafied DAM Client is being built for **local AEM and AEM as a Cloud Service**. This guide covers the local Author path. The public product is coming soon; these notes describe the inspected development flow.

## Prepare the connection

Have the exact Author URL, an authorized account, a dedicated evaluation DAM subtree, and a new empty work-folder path. Confirm the candidate build’s package identity and Cloud Files preflight before creating a fresh native root.

Use HTTPS for normal environments. The development flow permits HTTP only when explicitly configured for a loopback Author; that exception is not a production network configuration.

## Sign in through the Author

1. Enter the Author URL in the desktop connection surface.
2. Select **Sign in**. The embedded view opens the Author’s own login page.
3. Complete the authentication presented by that Author.
4. Verify the displayed account and Author before choosing the work folder.
5. Select a new empty folder on a qualified local volume.

A connection label that already belongs to another Author must not be silently reused. Give separate instances distinct names and destinations.

The inspected flow validates the Author session before handing it to the agent. Remembering the connection is an explicit option; it does not replace server-side session checks.

## Check the result

Open the work folder and recall a known test original. Confirm the bytes and the root status. A signed-in account and a populated folder are separate observations: sign-in alone does not prove the folder is connected.

Local sign-in, mount, recall, logout, and remembered restore have bounded development evidence. That evidence does not qualify every production on-premises version, SSO profile, proxy, or certificate setup.

See [getting started](getting-started.md) for evaluation preparation, [the folder workflow](folder-workflow.md) for retention, and [Cloud Service connections](connect-cloud-aem.md) for the other deployment path.
