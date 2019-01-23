import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsultantComponent } from './components/consultant/consultant.component';
import { StartupComponent } from './components/startup/startup.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page404', component: Page404Component },
  { path: 'consultants', component: ConsultantComponent },
  { path: 'startups', component: StartupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
