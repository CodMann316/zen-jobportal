import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployerDashboardComponent } from './dashboard/employer-dashboard/employer-dashboard.component';
import { JobApplicantsComponent } from './dashboard/employer-dashboard/job-applicants/job-applicants.component';
import { SeekerDashboardComponent } from './dashboard/seeker-dashboard/seeker-dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { SearchResultCandidatesComponent } from './search-result-candidates/search-result-candidates.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { SignupSeekerComponent } from './signup-seeker/signup-seeker.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'home', component: SearchComponent, children: [
      { path: 'searchResult', component: SearchResultComponent },
      { path: 'searchResultCandidate', component: SearchResultCandidatesComponent },
    ]
  },
  { path: 'seekerDashboard', component: SeekerDashboardComponent },
  { path: 'employerDashboard', component: EmployerDashboardComponent },
  { path: 'employerDashboard/jobApplicants/:id/:jobTitle', component: JobApplicantsComponent },
  { path: 'employer-signup', component: SignupComponent, canActivate: [LoginGuard] },
  { path: 'seeker-signup', component: SignupSeekerComponent, canActivate: [LoginGuard] },
  { path: 'contactus', component: ContactusComponent,},
  { path: 'search', component: JobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
