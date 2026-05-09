![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/nramc/journeys/ci-workflow.yml?branch=main&style=flat&logoColor=ff0)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nramc_journeys&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=nramc_journeys)
[![Release](https://img.shields.io/github/release/nramc/journeys.svg?style=for-the-badge?logoColor=fff&style=flat)](https://github.com/nramc/journeys/releases)
[![Website](https://img.shields.io/badge/website-online-brightgreen.svg)](https://nramc.github.io/journeys/)
[![Badge](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=159&style=flat)](https://www.linkedin.com/in/ramachandran-nellaiyappan/)

# Journeys

###### Your Portal to the Past

<hr />

[![Website](https://img.shields.io/badge/website-online-brightgreen.svg)](https://nramc.github.io/journeys/)
[![YouTube](https://img.shields.io/badge/Watch-Demo-red?logo=youtube)](https://www.youtube.com/watch?v=1PECA_wra80)

[![Watch on YouTube](https://img.youtube.com/vi/1PECA_wra80/hqdefault.jpg)](https://www.youtube.com/watch?v=1PECA_wra80 "Watch on YouTube")

👉 Click the image above to watch a short demo of this project on YouTube.

**Journey** is a personal project designed to help users document and relive their travel experiences in a rich, immersive way. The platform allows travellers to seamlessly store memories of their trips, combining textual narration, geographic information, and multimedia elements such as photos and videos.

With Journey, users can:

* Capture stories of their adventures with detailed narratives.
* Log geotagged locations to visually map their travel routes and destinations.
* Upload and organize images and videos, creating a digital scrapbook of their experiences.

Whether it's a weekend getaway or a year-long adventure, Journey enables users to keep all their cherished travel moments in one organized place, transforming trips into unforgettable stories.

---

This is an [Angular 21](https://angular.io/) based Geo Spatial Single Page Application (SPA) deployed to [GitHub Pages](https://pages.github.com/). It communicates exclusively with a separate REST API backend (BFF) — there is no server-side rendering.

Geographical data is processed in [GeoJSON](https://datatracker.ietf.org/doc/html/rfc7946) format and rendered on an interactive map powered by [Leaflet](https://leafletjs.com/) with [MapTiler](https://www.maptiler.com/) tiles and geocoding.

## Tech Stack

| Layer         | Technology                                            |
|---------------|-------------------------------------------------------|
| Framework     | Angular 21 (standalone components, zoneless, Signals) |
| UI Components | Angular Material (M3 theme)                           |
| Styling       | Tailwind CSS v4                                       |
| Maps          | Leaflet + MapTiler SDK                                |
| Media         | Cloudinary                                            |
| Auth          | JWT (Bearer token, stored in `localStorage`)          |
| Testing       | Karma / Jasmine                                       |
| Deployment    | GitHub Pages via `angular-cli-ghpages`                |

## Helpful Links

- [Journeys Application](https://nramc.github.io/journeys/)
- [REST API Documentation](https://journey-api-nxm5.onrender.com/doc/swagger-ui.html)
- [REST Open API YML Configuration](https://journey-api-nxm5.onrender.com/doc/openapi)

## Getting Started

Please find below steps to set up and run application in your workstation.

### Prerequisites

- **Node.js** (LTS recommended) and **npm**
- A running instance of the [Journey API (BFF)](https://github.com/nramc/journey-api) — see its README for Docker setup
- A [Cloudinary](https://cloudinary.com/) account (`cloud name` + upload preset)
- A [MapTiler](https://www.maptiler.com/) API key

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nramc/journeys.git
   cd journeys
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your local environment in `src/environments/environment.development.ts`:
   ```typescript
   export const environment = {
     journeyApi: 'https://localhost:8080/rest',
     cloudName: '<your-cloudinary-cloud-name>',
     cloudinaryPreset: '<your-upload-preset>',
     maptilerKey: '<your-maptiler-key>',
     // ...
   };
   ```
4. Start the dev server (HTTPS, uses `keystore/` certs):
   ```sh
   npm run start
   ```

### Available Scripts

```bash
npm run start       # Dev server at https://localhost
npm run build       # Production build
npm run test        # Karma/Jasmine unit tests (interactive)
npm run ci:test1    # Headless tests (ChromeHeadless)
npm run lint        # ESLint
npm run ci:deploy   # Deploy to GitHub Pages
```

### Contribution

Any contributions you make are **greatly appreciated**.

If you like the project and have a suggestion that would make this better, please fork the repo and create a pull request.
You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes using [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: Add the AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

> **Note for AI agents & contributors:** See [AGENTS.md](./AGENTS.md) for architecture details, coding conventions, and patterns specific to this codebase.

### Release new version

1. Manually run [Release Workflow](https://github.com/nramc/journeys/actions/workflows/cd-workflow.yml)
2. The Workflow flow uses [Conventional Changelog Action Plugin](https://github.com/marketplace/actions/conventional-changelog-action), which determines next version based on commit logs
3. Based on the determined release type (MAJOR or MINOR or PATCH), bump version in package.json
4. The Workflow creates [Release](https://github.com/nramc/journeys/releases) as well with release notes and make the release as latest
5. As soon as new `Release` created, which triggers [gh-page deploy workflow](https://github.com/nramc/journeys/actions/workflows/pages/pages-build-deployment)
6. When build successful, Application available on [https://nramc.github.io/journeys](https://nramc.github.io/journeys/)

## Contact

[Ramachandran Nellaiyappan](https://nramc.github.io/my-profile/contact.html)

## Credits

Sincere Thanks to following open source community for their wonderful efforts to make our life much easier.

- [Open Street Map](https://www.openstreetmap.org) - Open Source Map Provider
- [Leaflet](https://leafletjs.com) - Map based JavaScript Library
- [MapTiler](https://www.maptiler.com) - Map tiles and geocoding
- [GitHub Pages](https://pages.github.com/) - Hosting static resources
- [Angular](https://angular.io/) - TypeScript based Single Page Application(SPA) Web Framework
- [Angular Material](https://material.angular.io/) - Open Source UI Component library for Angular
- [Angular Gallery](https://github.com/MurhafSousli/ngx-gallery/wiki) - Open Source Media Gallery library for Angular
- [Cloudinary](https://cloudinary.com) - Image and video management

## Show your support

Give a ⭐️ if you like this project!
