import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

const routes: Routes = [
  {
    path: 'components/breadcrumbs',
    component: BreadcrumbsComponent
  },
  {
    path: 'components/call-to-action',
    component: CallToActionComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components/breadcrumbs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }