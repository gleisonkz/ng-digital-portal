import { AppComponent } from 'projects/ifd/src/app/app.component';
import { AboutPage } from 'projects/ifd/src/app/pages/about/about.page';
import { HomePage } from 'projects/ifd/src/app/pages/home/home.page';
import { IfdAuthGuard } from 'src/app/guards/ifd-auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ifd/app',
    component: AppComponent,
    canActivate: [IfdAuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePage,
        canActivate: [IfdAuthGuard],
      },
      {
        path: 'about',
        component: AboutPage,
        canActivate: [IfdAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
