import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { SignupSeekerComponent } from './signup-seeker/signup-seeker.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'employer-signup',component:SignupComponent},
  {path:'seeker-signup',component:SignupSeekerComponent},
  {path:'search',component:JobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
