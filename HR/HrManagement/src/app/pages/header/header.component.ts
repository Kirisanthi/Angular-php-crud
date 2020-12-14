import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show : Boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log( this.router.url);
    if(this.router.url == '/view'){
      this.show = true;
    }else{
      this.show = false;
    }
  }
  logout(){
    window.localStorage.setItem('token',null);
    this.router.navigate(['']);
  }
}