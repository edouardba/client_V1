import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { PerformanceRankingComponent } from './performance-ranking/performance-ranking.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'dashboard-manager', component: DashboardManagerComponent }, 
      { path: 'performance-ranking', component: PerformanceRankingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
