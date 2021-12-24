import { HeaderComponent } from 'projects/ifd/src/app/components/header/header.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class AppIfdSharedModule {
  static forRoot(): ModuleWithProviders<{}> {
    return {
      ngModule: AppModule,
      providers: [],
    };
  }
}
