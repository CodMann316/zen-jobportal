import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SignupSeekerComponent } from './signup-seeker/signup-seeker.component';
import { JobComponent } from './job/job.component';
import {HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultCandidatesComponent } from './search-result-candidates/search-result-candidates.component';
import { SeekerDashboardComponent } from './dashboard/seeker-dashboard/seeker-dashboard.component';
import { SeekerProfileComponent } from './profile/seeker-profile/seeker-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SignupSeekerComponent,
    JobComponent,
    SearchComponent,
    SearchResultComponent,
    SearchResultCandidatesComponent,
    SeekerDashboardComponent,
    SeekerProfileComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    
    HttpClientModule,
    
    BrowserAnimationsModule,
    
    NgbModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
