import { DashboardRoutesModule } from './dashboard.routes';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutesModule
  ],
})
export class DashboardModule { }
