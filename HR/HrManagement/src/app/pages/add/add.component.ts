import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CandidateService } from '../../services/candidate.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
time= new Array()
  constructor(private formBuilder: FormBuilder, private _candidateService : CandidateService, private router: Router ) { }
    addForm: FormGroup;
  ngOnInit() {
     this.addForm = this.formBuilder.group({
       fName: ['', Validators.required],
       lName: ['', Validators.required],
       age: ['', [Validators.required, Validators.maxLength(2)]],
       phone: ['', [Validators.required, Validators.maxLength(10)]],
       qualification: ['', Validators.required],
       position: ['', Validators.required],
       status: ['', Validators.required],
       date: ['', Validators.required],
       time: ['1', Validators.required],
       email: ['', [Validators.required, Validators.maxLength(40),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      ]
     });
  }

  onSubmit(){
    console.log(this.addForm.value)
    this._candidateService.getTime(this.addForm.value.date).subscribe(time =>{
      console.log(time);
      this.time =time;
      if(time.length == 0){
        this.addForm.value.time = 1;
        this._candidateService.createCandidate(this.addForm.value).subscribe(data => {
        this.router.navigate(['view']);
        })
      }else{
        this.time = time.sort(function(a:any, b:any){return a - b})
        console.log(this.time);
        console.log(this.time.length);
        for (var i = 1; i <= 18; i++) {
          if (this.time.indexOf(i) == -1) {
            // missing.push(i);
            console.log(i);
            this.addForm.value.time = i;
            this._candidateService.createCandidate(this.addForm.value).subscribe(data => {
            this.router.navigate(['view']);
            })
            break;
          }
        }
        
      }


     })
    // this._candidateService.createCandidate(this.addForm.value).subscribe(data => {
    //   this.router.navigate(['view']);
    // })
  }


}

