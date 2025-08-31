import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VoteComponent } from './components/vote/vote.component';

const routes: Routes = [
  { path: '', component: AdminLandingComponent },
  {
    path: "dashboard", component: DashboardComponent
  },
{ path : "vote", component : VoteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
