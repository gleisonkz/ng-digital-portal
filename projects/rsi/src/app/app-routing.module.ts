import { AppComponent } from 'projects/rsi/src/app/app.component';
import { AboutPage } from 'projects/rsi/src/app/pages/about/about.page';
import { HomePage } from 'projects/rsi/src/app/pages/home/home.page';
import { RsiAuthGuard } from 'src/app/guards/rsi-auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rsi/app',
    component: AppComponent,
    canActivate: [RsiAuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePage,
        canActivate: [RsiAuthGuard],
      },
      {
        path: 'about',
        component: AboutPage,
        canActivate: [RsiAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
