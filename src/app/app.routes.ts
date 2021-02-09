import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'panou/acasa',
  },
  {
    path: 'panou',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'panou/acasa',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "top", useHash: false})],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutesModule {}
