import { AppIfdSharedModule } from 'projects/ifd/src/app/app.module';
import { AppRsiSharedModule } from 'projects/rsi/src/app/app.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { SignInPage } from './pages/sign-in/sign-in.page';

@NgModule({
  declarations: [AppComponent, HomePage, SignInPage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppIfdSharedModule.forRoot(),
    AppRsiSharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
