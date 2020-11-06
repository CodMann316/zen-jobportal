import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seeker } from '../model/seeker.model';
import { FileService } from '../services/file.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result-candidates',
  templateUrl: './search-result-candidates.component.html',
  styleUrls: ['./search-result-candidates.component.css']
})
export class SearchResultCandidatesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searchService: SearchService, private fileService:FileService) { }

  skills: string[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      param => {
        this.skills = decodeURIComponent(param.skills).split(',')

        //  this.searchService.searchForCandidate(this.skills).subscribe(
        //     data => this.seekers=data
        //   );
        this.searchService.getAllSeekers().subscribe(
          data => {
            // alert(this.skills[0]==='')
            if (!(this.skills[0] === '')) {
              alert("IN SKILLS")
              for (let index = 0; index < data.length; index++) {
                for (let index2 = 0; index2 < data[index].skills.length; index2++) {
                  this.skills.forEach(
                    skill => {
                      if (data[index].skills[index2].skillName.includes(skill)) {
                        this.seekers.push(data[index])
                      }
                    }
                  )
                }
              }
            } else {

              this.seekers = data
            }

          }
        );
      }
    )
  }

  seekers: Seeker[] = [];
  selectedMail: string = "";

  getSeeker(): Seeker {
    if (!(this.selectedMail === "")){
      // alert("Findind")
      return this.seekers.find(e => e.email.match(this.selectedMail))
    }
    else
      return new Seeker()
  }

  // jobApply(jobId) {
  //   this.jobService.applyForJob(jobId).subscribe(
  //     result => alert('Is applied Successful:' + result)
  //   )
  // }



  getSeekerResume(id: string) {
    this.fileService.getSeekerResume(id).subscribe(
      data => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url)
      },
      error=> alert("Resume not found")
    )
  }

}
