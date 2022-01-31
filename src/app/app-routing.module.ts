import { AuthGuard } from 'src/app/guards/auth.guard';
import { NotLoggedGuard } from 'src/app/guards/not-logged.guard';
import { HomePage } from 'src/app/pages/home/home.page';
import { SignInPage } from 'src/app/pages/sign-in/sign-in.page';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: '', component: HomePage, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInPage, canActivate: [NotLoggedGuard] },

  {
    path: 'rsi',
    loadChildren: () =>
      import('projects/rsi/src/app/app.module').then(
        (m) => m.AppRsiSharedModule
      ),
  },
  {
    path: 'ifd',
    loadChildren: () =>
      import('projects/ifd/src/app/app.module').then(
        (m) => m.AppIfdSharedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
