import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutPage } from './pages/about/about.page';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [AppComponent, HomePage, AboutPage, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class AppRsiSharedModule {
  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: AppModule,
      providers: [],
    };
  }
}
