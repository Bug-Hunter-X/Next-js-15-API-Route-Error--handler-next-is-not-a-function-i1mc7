# Next.js 15 API Route Error: `handler.next is not a function`

This repository demonstrates a common error encountered when upgrading to Next.js 15, specifically related to API routes.  In Next.js 15, stricter type checking is enforced, leading to errors in API routes that were previously functional in older versions.  This example shows the error and its solution.

## Problem

The older API route structure (as shown in `bug.js`) is no longer supported in Next.js 15. Attempting to use it results in a `TypeError: handler.next is not a function` error.

## Solution

The solution involves refactoring the API route to use the updated structure as shown in `bugSolution.js`. This ensures compatibility with Next.js 15 and leverages the new features and stricter type checking.