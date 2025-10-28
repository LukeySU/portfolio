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
![Status](https://img.shields.io/endpoint?url=https://lukasz-sulowski.netlify.app/.netlify/functions/health&style=for-the-badge&logo=netlify&logoColor=white)


- Runtime errors: Sentry (application error monitoring)
- Dashboard screenshot: see ![Dashboard](./docs/dashboard.png)`

## Incident log
Zobacz [`INCIDENTS.md`](./INCIDENTS.md)

## Architecture
![Architecture](./docs/architecture.png)
