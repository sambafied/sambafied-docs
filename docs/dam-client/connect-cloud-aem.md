---
title: Connect to AEM Cloud Service
description: Understand the Cloud Service Author sign-in path and its independent qualification boundary.
---

# Connect to AEM Cloud Service

**AEM as a Cloud Service and local AEM are both in Sambafied DAM Client’s product scope.** Use a separate connection and work folder for each environment. The public product is coming soon.

## Use your Author environment

Obtain the Author URL and account access for the intended Cloud Service environment. Do not substitute a delivery URL, a storage URL, or an unrelated Adobe service endpoint.

The inspected desktop connection design uses the Author’s own sign-in page. A Cloud Service Author can present **Sign in with Adobe** and continue through the organization’s identity flow. The desktop validates the resulting Author session before passing it to the agent.

The provider hint in the connection UI is not itself proof that an operation is supported.

## Prepare a bounded evaluation

1. Record the exact candidate build and Cloud Service Author environment.
2. Confirm the account can access the required DAM subtree.
3. Complete the Author’s sign-in flow in the desktop window.
4. Check the displayed principal and Author.
5. Use a distinct, new empty local work folder and evaluate the explicitly enabled operations.

If the candidate requires additional non-secret client configuration, use its matching instructions. Do not borrow another application’s client identity or treat a guessed OAuth registration as a supported integration.

## Keep read and write acceptance separate

A successful sign-in does not prove search, original download, upload, or processing completion. Cloud Service binary ingestion and on-premises binary writes use distinct adapters and eligibility checks.

The source review retains open live Cloud Service and production-operation acceptance gates. This site therefore does not promise all operations for every Cloud Service environment, or infer Cloud readiness from a local Author result.

Use [readiness and limits](status.md) to interpret the evidence. [Multiple instances](multiple-instances.md) explains the intended side-by-side folder experience.
