import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPrimaryComponent } from './shared/nav-primary/nav-primary.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPrimaryComponent,
    BreadcrumbsComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }