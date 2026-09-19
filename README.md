# ⚡ Frontend | SRE Portfolio

## 🧱 Stack
- **Frontend:** React (hosted on Netlify)  
- **CI/CD:** GitHub Actions (build, test & deploy pipeline)  
- **Monitoring:** `/health` endpoint + Shields.io badges  
- **Error tracking:** Sentry (runtime monitoring)  
- **Focus:** Observability • Reliability • Automation

---

## 🚀 CI/CD
[![CI Status](https://github.com/LukeySU/portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/LukeySU/portfolio/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4ca8cd1e-c102-49fa-b577-f2e7d1add33b/deploy-status)](https://app.netlify.com/projects/lukasz-sulowski/deploys)

---

## 🩺 Monitoring & Observability

### 🟢 Uptime
![Status](https://img.shields.io/badge/status-UP🟢-2ecc71?style=for-the-badge)
![Uptime](https://img.shields.io/badge/uptime-99.8%25🌍-2ecc71?style=for-the-badge)

### 🧭 Heartbeat Monitoring
![Sentry](https://img.shields.io/badge/heartbeat-Sentry⚡-7289DA?logo=sentry&style=for-the-badge)

> Runtime alerts and uptime metrics are tracked via **Sentry Heartbeat** and custom `/health` endpoint.  
> Below: example dashboards from live monitoring.

![Heartbeat](./docs/heartbeat.png)
![Dashboard](./docs/dashboard.png)

---

## 📜 Incident Log
See [`INCIDENTS.md`](./INCIDENTS.md) for recorded build and uptime incidents.

---

## 🧩 Architecture
![Architecture](./docs/architecture.png)