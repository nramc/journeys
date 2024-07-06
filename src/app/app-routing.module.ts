import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  canActivateWhenAuthenticatedGuard,
  canActivateWhenHasWriteAccessGuard,
  canMatchWhenAuthenticatedGuard,
  canMatchWhenHasWriteAccessGuard
} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component').then(m => m.HomeComponent),
    title: "Journey"
  },
  {
    path: 'login',
    loadComponent: () => import('./page/auth/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  },
  {
    path: 'accessDenied',
    loadComponent: () => import('./page/auth/access-denied/access-denied.component').then(m => m.AccessDeniedComponent),
    title: 'Access Denied'
  },
  {
    path: 'logout',
    loadComponent: () => import('./page/auth/logout/logout.component').then(m => m.LogoutComponent),
    title: 'Logout',
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard]
  },
  {
    path: 'journey',
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard],
    children: [
      {
        path: '', title: 'Journey',
        loadComponent: () => import('./page/journeys/search-journey/search-journey.component').then(m => m.SearchJourneyComponent),
        canActivate: [canActivateWhenAuthenticatedGuard],
        canMatch: [canMatchWhenAuthenticatedGuard]
      },
      {
        path: 'new',
        loadComponent: () => import('./page/journeys/new-journey/new-journey.component').then(m => m.NewJourneyComponent),
        title: 'New Journey',
        canActivate: [canActivateWhenAuthenticatedGuard, canActivateWhenHasWriteAccessGuard],
        canMatch: [canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard]
      },
      {
        path: ':id/view',
        loadComponent: () => import('./page/journeys/view-journey/view-journey.component').then(m => m.ViewJourneyComponent),
        title: 'View Journey',
        canActivate: [canActivateWhenAuthenticatedGuard],
        canMatch: [canMatchWhenAuthenticatedGuard]
      },
      {
        path: ':id/edit',
        loadComponent: () => import('./page/journeys/edit-journey/edit-journey.component').then(m => m.EditJourneyComponent),
        title: 'Edit Journey',
        canActivate: [canActivateWhenAuthenticatedGuard, canActivateWhenHasWriteAccessGuard],
        canMatch: [canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard]
      }
    ]
  },
  {
    path: 'my-account',
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard],
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./page/my-account/my-profile-page/my-profile-page.component').then(m => m.MyProfilePageComponent),
        title: 'My Profile',
        canActivate: [canActivateWhenAuthenticatedGuard],
        canMatch: [canMatchWhenAuthenticatedGuard]
      },
      {
        path: 'securitySettings',
        loadComponent: () => import('./page/my-account/my-account-settings-page/my-account-settings-page.component').then(m => m.MyAccountSettingsPageComponent),
        title: 'My Settings',
        canActivate: [canActivateWhenAuthenticatedGuard],
        canMatch: [canMatchWhenAuthenticatedGuard]
      },
      {
        path: 'delete',
        loadComponent: () => import('./page/my-account/delete-my-account-page/delete-my-account-page.component').then(m => m.DeleteMyAccountPageComponent),
        title: 'Delete Account',
        canActivate: [canActivateWhenAuthenticatedGuard, canActivateWhenHasWriteAccessGuard],
        canMatch: [canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard]
      },
      {
        path: "",
        loadComponent: () => import('./page/my-account/my-account-page.component').then(m => m.MyAccountPageComponent),
        title: 'My Account',
        canActivate: [canActivateWhenAuthenticatedGuard, canActivateWhenHasWriteAccessGuard],
        canMatch: [canMatchWhenAuthenticatedGuard, canMatchWhenHasWriteAccessGuard]
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./page/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: "Dashboard",
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard]
  },
  {
    path: 'gallery',
    loadComponent: () => import('./page/gallery/gallery.component').then(m => m.GalleryComponent),
    title: "Gallery",
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard]
  },
  {
    path: 'statistics',
    loadComponent: () => import('./page/statistics/statistics.component').then(m => m.StatisticsComponent),
    title: "Statistics",
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard]
  },
  {
    path: 'timeline',
    loadComponent: () => import('./page/timeline/timeline-page.component').then(m => m.TimelinePageComponent),
    title: "Timeline",
    canActivate: [canActivateWhenAuthenticatedGuard],
    canMatch: [canMatchWhenAuthenticatedGuard]
  },
  {
    path: 'tools',
    loadComponent: () => import('./page/tools/tools.component').then(m => m.ToolsComponent),
    title: "Tools"
  },
  {
    path: 'aboutUs',
    loadComponent: () => import('./page/about/about.component').then(m => m.AboutComponent),
    title: "About"
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: "/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableViewTransitions: true,
    bindToComponentInputs: true,
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
