# Frontend | SRE - Portfolio

## Stack
- React frontend (host: Netlify)
- CI/CD: GitHub Actions (testing + Lighthouse)
- Monitoring uptime: health endpoint + Shields.io
- Runtime errors: Sentry

## CI/CD
[![CI Portfolio](https://github.com/LukeySU/portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/LukeySU/portfolio/actions/workflows/ci.yml)

## Monitoring / Observability
- Uptime badge: 
[![Status](https://img.shields.io/badge/%F0%9F%94%8C%20Service-Stable-00bfa5?style=flat-square&logo=react&logoColor=61dafb)](https://lukasz-sulowski.netlify.app/health)

- Runtime errors: Sentry (application error monitoring)
- Dashboard screenshot: see ![Dashboard](./docs/dashboard.png)`

## Incident log
Zobacz [`INCIDENTS.md`](./INCIDENTS.md)

## Architecture
![Architecture](./docs/architecture.png)
