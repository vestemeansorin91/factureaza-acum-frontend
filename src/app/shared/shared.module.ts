import { CommonModule } from '@angular/common';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { AngularMaterialModule } from './entities/modules/angular-material.module';
import { NgModule } from '@angular/core';

export const COMPONENTS = [TopNavComponent, SideNavComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AngularMaterialModule],
  providers: [],
  exports: [...COMPONENTS, AngularMaterialModule],
})
export class SharedModule {}
