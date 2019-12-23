import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PersistenceComponent } from './persistence/persistence.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'thank-you', component: ThankYouPageComponent},
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'dashboard-manager', component: DashboardManagerComponent }, 
      { path: 'persistence-analyse', component: PersistenceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
