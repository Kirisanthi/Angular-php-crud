import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Candidate } from '../../candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  candidate: Candidate[];
  totalcandidate=new Array();
  _id : any;
  c = new Date();
  d = new Date();
  timeArray = ["8.00am-8.30am","8.30am-9.00am","9.00am-9.30am","9.30am-10.00am","10.00am-10.30am","10.30am-11.00am",
  "11.00am-11.30am","11.30am-12.00pm","12.00pm-12.30pm","12.30pm-1.00pm","1.00pm-1.30pm","1.30pm-2.00pm"
  ,"2.00pm-2.30pm","2.30pm-3.00pm","3.00pm-3.30pm","3.30pm-4.00pm","4.00pm-4.30pm","4.30pm-5.00pm"];
    
    constructor(private _candidateService : CandidateService,
                private router: Router) { }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this._candidateService.getCandidate().subscribe((data: Candidate[]) =>{
      this.candidate = data;
        
     
    console.log(this.candidate)
      this.candidate.forEach((ele:any) => {
      ele.time =this.timeArray[ele.time-1]
      });


      this.totalcandidate = data;
      });
    }
  
    delete(candidate: Candidate): void{
      this._candidateService.deleteCandidate(candidate.cId).subscribe(data => {
      this.candidate =this.candidate.filter(u => u !== candidate);
      });
    }
  
    edit(candidate: Candidate){
      this._id = candidate.cId;
      this.router.navigate(['edit/' + this._id]);
     
    }
    // search(data){
    //   console.log(data);
    //   this.candidate = this.totalcandidate.filter(ele => ele.fName.toLowerCase().includes(data))
    //     console.log(this.candidate);
    // }
  }
  