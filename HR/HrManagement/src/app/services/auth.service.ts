import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }
  
  canActivate(): boolean {
    if (window.localStorage.getItem("token") == 'null' || window.localStorage.getItem("token") == undefined) 
    {
      this.router.navigate(['']);
      return false;
    }else{
      return true;
    }
  }

}

