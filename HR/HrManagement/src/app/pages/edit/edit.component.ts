import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CandidateService } from '../../services/candidate.service';
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addForm: FormGroup;
  time: string;
  getTime = new Array();
  setTime =new Array();
  timeArray = ["8.00am-8.30am","8.30am-9.00am","9.00am-9.30am","9.30am-10.00am","10.00am-10.30am","10.30am-11.00am",
  "11.00am-11.30am","11.30am-12.00pm","12.00pm-12.30pm","12.30pm-1.00pm","1.00pm-1.30pm","1.30pm-2.00pm"
  ,"2.00pm-2.30pm","2.30pm-3.00pm","3.00pm-3.30pm","3.30pm-4.00pm","4.00pm-4.30pm","4.30pm-5.00pm"];

  constructor(private formBuilder: FormBuilder, 
              private _candidateService : CandidateService, 
              private router: Router,
              private routes: ActivatedRoute
    ) { }

  ngOnInit() {
    const routeParams = this.routes.snapshot.params;
   
    this._candidateService.getByid(routeParams.id)
    .subscribe((data: any) => {
      this.time=this.timeArray[data.time-1];
      this._candidateService.getTime(data.date).subscribe(time =>{
        console.log(time);
        this.getTime =time;

          this.getTime = time.sort(function(a:any, b:any){return a - b})
          console.log(this.getTime)

          for (var i = 1; i <= 18; i++) {
            if (this.getTime.indexOf(i) == -1) {
              // missing.push(i);
              console.log(i);
              this.setTime.push({"Time": this.timeArray[i-1],"timeNo" : i})
            }
        }
       });
       console.log(this.setTime)

      this.addForm.patchValue(data);
      
      
   });

    this.addForm = this.formBuilder.group({
      cId: [''],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(2)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      qualification: ['', Validators.required],
      position: ['', Validators.required],
      status: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      email: ['', [Validators.required, Validators.maxLength(30),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
     ]
    });
 }
 update(){
  // this._studentsService.createStudent(this.addForm.value).subscribe(data => {
  //   this.router.navigate(['view']);
  // })
  console.log(this.addForm.value);
  this.addForm.value.time = parseInt(this.addForm.value.time);
   this._candidateService.updateCandidate(this.addForm.value).subscribe(() => {
     this.router.navigate(['view']);
   },
   error => {
     alert(error);
   });
   
 }

}
