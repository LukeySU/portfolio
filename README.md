# ⚡ Frontend | SRE Portfolio

## 🧱 Stack
- **Frontend:** React (hosted on Netlify)  
- **CI/CD:** GitHub Actions (build, test & deploy pipeline)  
- **Monitoring:** `/health` endpoint + scheduled synthetic check (GitHub Actions → Sentry cron monitor)  
- **Error tracking:** Sentry (runtime monitoring)  
- **Focus:** Observability • Reliability • Automation

---

## 🚀 CI/CD
[![CI Status](https://github.com/LukeySU/portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/LukeySU/portfolio/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4ca8cd1e-c102-49fa-b577-f2e7d1add33b/deploy-status)](https://app.netlify.com/projects/lukasz-sulowski/deploys)

---

## 🩺 Monitoring & Observability

### 🟢 Uptime
[![Status](https://img.shields.io/website?url=https%3A%2F%2Flukaszsulowski.eu%2Fhealth&label=status&up_message=up&down_message=down&style=for-the-badge)](https://lukaszsulowski.eu/health)
[![Uptime check](https://img.shields.io/github/actions/workflow/status/LukeySU/portfolio/uptime.yml?branch=main&label=uptime%20check&style=for-the-badge)](https://github.com/LukeySU/portfolio/actions/workflows/uptime.yml)

### 🧭 Heartbeat Monitoring
![Sentry heartbeat](https://img.shields.io/badge/Sentry%20heartbeat-every%2010%20min-7289DA?logo=sentry&style=for-the-badge)

> A scheduled GitHub Actions workflow ([`uptime.yml`](./.github/workflows/uptime.yml)) probes [`/health`](https://lukaszsulowski.eu/health) and the homepage every 10 minutes
> and reports each result as a check-in to a **Sentry cron monitor**, which alerts on failed checks and on missed check-ins.  
> The badges above are live: *status* is checked by Shields.io on every view, *uptime check* reflects the latest workflow run.  
> Below: example dashboards from live monitoring.

![Heartbeat](./docs/heartbeat.png)
![Dashboard](./docs/dashboard.png)

---

## 📜 Incident Log
See [`INCIDENTS.md`](./INCIDENTS.md) for recorded build and uptime incidents.

---

## 🧩 Architecture
![Architecture](./docs/architecture.png)