# AGENTS.md — AI Coding Agent Guide for Journeys

## Project Overview

Angular 21 SPA ("Journey") — a geospatial travel-memory platform. The frontend is a standalone SPA deployed to GitHub Pages; it communicates exclusively with a separate REST API backend (BFF) at `environment.journeyApi`. No server-side rendering.

## Developer Workflows

```bash
npm run start          # Dev server at https://localhost (uses keystore/ certs)
npm run build          # Production build
npm run test           # Karma/Jasmine unit tests (interactive)
npm run ci:test1       # CI headless tests: ChromeHeadless
npm run lint           # ESLint
npm run ci:deploy      # Deploy to GitHub Pages via angular-cli-ghpages
```

Commit format: **Conventional Commits** (`feat:`, `fix:`, `chore:`, etc.) — the CD workflow uses these to auto-determine the next semver version.

## Architecture & Data Flow

```
Browser → Angular SPA → HTTP (Bearer JWT) → BFF REST API → MongoDB
                    ↘ Cloudinary (image uploads, URL generation)
                    ↘ MapTiler (map tiles + geocoding)
```

- **Environment config**: `src/environments/environment.ts` (prod) / `environment.development.ts` (dev). Contains `journeyApi`, `cloudName`, `maptilerKey`, etc.
- **Auth**: JWT stored in `localStorage` under key `_auth` (`AuthUtils.USER_CONTEXT_KEY`). Auth state lives in `AuthService` as a `BehaviorSubject<UserContext>`. Every API call manually injects `Authorization: Bearer <token>` from `authService.getCurrentUserContext().accessToken`.
- **Roles**: `ADMINISTRATOR`, `MAINTAINER`, `AUTHENTICATED_USER`, `GUEST_USER` — defined in `src/app/service/auth/role.ts`.

## Angular Patterns in This Codebase

- **Zoneless**: `provideZonelessChangeDetection()` is configured in `app.config.ts` — do NOT introduce `NgZone` or zone-relying APIs.
- **All components are standalone** — no NgModules. Always use `standalone: true` (implied in Angular 17+ syntax) and import dependencies directly in the component's `imports` array.
- **`ChangeDetectionStrategy.OnPush`** is used on every component — use Signals or async pipe to trigger updates.
- **Signals over Observables for local state**: use `signal()` / `computed()` for component state; use `toSignal()` to bridge Observables.
- **Lazy routing**: all routes use `loadComponent()`. See `src/app/app.routes.ts`.
- **Route guards**: `canActivateWhenAuthenticatedGuard` / `canMatchWhenAuthenticatedGuard` guard authenticated routes; `canActivateWhenHasWriteAccessGuard` guards write operations. Both are functional guards (not class-based).

## HTTP & Loading Patterns

- A global `loadingInterceptor` (`src/app/utility/handler/loading.interceptor.ts`) shows a spinner for every HTTP request **unless** the request includes header `X-Async-Process: true`. Use this header for background/polling calls (see `BffService.getVersion()`).
- A custom `ErrorHandler` (`src/app/utility/handler/error.handler.ts`) redirects 401 → `/login` and 403 → `/accessDenied` globally.
- **Vendor content-type headers** are used to distinguish partial update operations on the Journey resource:
  - `application/vnd.journey.api.basic.v1+json` — basic details
  - `application/vnd.journey.api.geo.v1+json` — geo details
  - `application/vnd.journey.api.images.v1+json` — images
  - `application/vnd.journey.api.videos.v1+json` — videos
  - `application/vnd.journey.api.publish.v1+json` — publish

## Role-Based UI Directives

Three structural directives control visibility based on auth state (use these instead of manual role checks in templates):

- `*appHasWriteAccess` — `src/app/directive/has-write-access.directive.ts`
- `*appHasAuthenticated` — `src/app/directive/has-authenticated.directive.ts`
- `*appHasAnonymous` — `src/app/directive/has-anonymous.directive.ts`

## Key Shared Components & Services

| Path                                         | Purpose                                                                                                                                                                 |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `src/app/component/world-map/`               | Leaflet map with MaptilerLayer, GeoJSON overlay, optional geocoding picker (`locationPicked`/`areaPicked` outputs). Pass `X-Async-Process: true` for its tile requests. |
| `src/app/component/loading-spinner/`         | Subscribes to `LoadingService.loading$`                                                                                                                                 |
| `src/app/service/journey/journey.service.ts` | All CRUD for Journey entities                                                                                                                                           |
| `src/app/service/auth/auth.service.ts`       | Central auth state (`BehaviorSubject`)                                                                                                                                  |
| `src/app/service/theme/theme.service.ts`     | Dark-mode toggle (signal-based)                                                                                                                                         |
| `src/app/config/icon-config.ts`              | Leaflet marker icons; supported icon types: `default adventure shopping funny park restaurant home flight temple favorite love`                                         |
| `src/app/model/core/journey.model.ts`        | Core domain model: `Journey`, `JourneyGeoDetails`, `JourneyImagesDetails`, `JourneyVideosDetails`                                                                       |

## Journey Data Model Shape

```typescript
Journey {
  id, name, description, journeyDate (ISO string),
  tags[], thumbnail, geoDetails, imagesDetails, videosDetails, isPublished, visibilities[]
}
JourneyGeoDetails {
  title, city, country, category, location: GeoJSON.Point, geoJson: GeoJSON
}
```

GeoJSON (`FeatureCollection`) is the wire format for map data — request with `Accept: application/geo+json`.

## Styling

- **Tailwind CSS v4** (PostCSS plugin) + **Angular Material** (M3 theme in `m3-theme.scss`).
- Global SCSS variables in `src/scss/_variables.scss`.
- Do not mix Bootstrap classes — the project has removed Bootstrap in favour of Tailwind.

