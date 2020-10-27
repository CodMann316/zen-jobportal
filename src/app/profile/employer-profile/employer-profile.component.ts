import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/model/employer.model';
import { LoginService } from 'src/app/services/login.service';
declare var $: any;

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  employer:Employer=new Employer();
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.getProfile().subscribe(
      data=> {
        this.employer=data
        console.log("HELLO "+JSON.stringify(data))
      }
        
    )
  }

  open() {
    $("#employerDetail").modal('show');
  }

  modalFocus() {
    $('.modal').css('overflow-y', 'auto')
  }

  getEmployer(): Employer {
    return this.employer

  }

  save(){
    
    this.loginService.updateProfile(this.employer).subscribe(
      data=>{
        this.employer=data;
        alert('Profile Updated!')
        document.getElementById('closeProfile').click()
      },
      error=> {
        alert('Error occurred, profile not updated. please try again!')
      }
    )
  }


}
