import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavPrimaryComponent } from './shared/nav-primary/nav-primary.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavPrimaryComponent,
    BreadcrumbsComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }