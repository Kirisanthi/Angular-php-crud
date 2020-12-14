import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Candidate } from '../candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  baseUrl ="http://localhost/Hr/";
  constructor(private http: HttpClient) { }
  getCandidate(){
    return this.http.get<Candidate[]>(this.baseUrl + 'list.php');
  }

  deleteCandidate(id:number){
    return this.http.delete<Candidate[]>(this.baseUrl + 'delete.php?id=' + id);
  }

  createCandidate(candidate: Candidate){
    console.log(candidate);
    return this.http.post( this.baseUrl + 'insert.php', candidate);
  }

  getByid(id:number){
    return this.http.get<Candidate[]>(this.baseUrl + 'getByid.php?id=' + id);
  }

  updateCandidate(candidate: Candidate){
    console.log(candidate);
    return this.http.put(this.baseUrl + 'update.php?id='+ candidate.cId, candidate);
  }

  login(loginData) {
    return this.http.post(this.baseUrl + 'login.php', loginData);
}
  getTime(date:string){
  console.log(date)
  return this.http.get<Candidate[]>(this.baseUrl + 'getTime.php?date="' + date + '"');
}
}
