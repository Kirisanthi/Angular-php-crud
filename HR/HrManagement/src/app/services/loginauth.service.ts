import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginauthService {

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (window.localStorage.getItem("token") == 'null' || window.localStorage.getItem("token") == undefined) 
    {
      return true;
    }else{
      this.router.navigate(['view']);
      return false;
    }
  }
}