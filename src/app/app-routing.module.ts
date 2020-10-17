import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { SignupSeekerComponent } from './signup-seeker/signup-seeker.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 // {path:'home',component:AppComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,canActivate:[LoginGuard]},
  {path:'employer-signup',component:SignupComponent,canActivate:[LoginGuard]},
  {path:'seeker-signup',component:SignupSeekerComponent,canActivate:[LoginGuard]},
  {path:'search',component:JobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
