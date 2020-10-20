import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seeker } from '../model/seeker.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result-candidates',
  templateUrl: './search-result-candidates.component.html',
  styleUrls: ['./search-result-candidates.component.css']
})
export class SearchResultCandidatesComponent implements OnInit {

  constructor(private route: ActivatedRoute,private searchService:SearchService) { }

  skills: string[]=[];
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      param => {
        this.skills = decodeURIComponent(param.skills).split(',')
        
       this.searchService.searchForCandidate(this.skills).subscribe(
          data => this.seekers=data
        );
      }
    )
    }

  seekers: Seeker[] = [];
  selectedMail: string;

  getSeeker(): Seeker {
    return this.seekers.find(e => e.email.match(this.selectedMail))
  }

  // jobApply(jobId) {
  //   this.jobService.applyForJob(jobId).subscribe(
  //     result => alert('Is applied Successful:' + result)
  //   )
  // }

}
