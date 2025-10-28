# Incident Log

## [2025-10-27] Netlify function 404

**Impact:**  
The `/health` endpoint returned 404 for about 15 minutes, causing the uptime badge and Sentry monitor to show the site as down.

**Root cause:**  
Incorrect path configuration in `netlify.toml` — the redirect was pointing to a missing function.

**Detection:**  
Detected via Sentry “heartbeat missed” alert and manual check of the endpoint.

**Resolution:**  
Fixed the function directory and redeployed via Netlify. Verified that `/health` now returns `{ status: "ok" }`.

**Follow-up:**  
Add a local function test before each deployment and include endpoint validation in CI.

---

## [2025-10-28] GitHub Actions build failure

**Impact:**  
CI/CD pipeline failed to build after push. No deployment triggered.

**Root cause:**  
Typo in `.github/workflows/ci.yml` (`npm run build}}` instead of `npm run build`).

**Detection:**  
GitHub Actions run failed with exit code 1 and “Missing script: build}}” message.

**Resolution:**  
Corrected the workflow syntax and committed the fix.

**Follow-up:**  
Add YAML linter step to the workflow and run `npm run` validation before commits.

---

## [2025-10-28] Duplicate Netlify deploys

**Impact:**  
Two deploys were triggered for every push, wasting build minutes and causing confusion.

**Root cause:**  
Both GitHub Actions and Netlify webhook were deploying the same commit.

**Detection:**  
Observed duplicate deploy logs in Netlify dashboard.

**Resolution:**  
Removed Netlify deploy step from GitHub Actions workflow, keeping CI in Actions and CD in Netlify.

**Follow-up:**  
Document the CI/CD ownership (GitHub = CI, Netlify = CD) to avoid overlap.

---

## [2025-10-28] `node-fetch` dependency missing in Netlify function

**Impact:**  
Netlify build failed with error: “Could not resolve ‘node-fetch’”.

**Root cause:**  
Function `health.js` imported `node-fetch`, which was not listed in `package.json`.

**Detection:**  
Build logs in Netlify.

**Resolution:**  
Removed `node-fetch` import and switched to native `fetch()` (supported in Node 20).

**Follow-up:**  
Review dependencies and runtime compatibility before using third-party packages.

---

## [2025-10-28] Sentry dashboard empty

**Impact:**  
No data appeared in Sentry dashboard after integration.

**Root cause:**  
No events were sent — app didn’t generate any exceptions and DSN initialization ran after React render.

**Detection:**  
Empty dashboard and lack of `Sentry Logger [info]: SDK initialized` in browser console.

**Resolution:**  
Moved `Sentry.init()` to the top of `main.jsx` and manually threw a test error.

**Follow-up:**  
Add a test exception in staging to validate monitoring setup after each deploy.
