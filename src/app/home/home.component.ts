import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user:any;
  constructor(private log:LoginService,private router: Router) {
    this.user=this.log.user;
    //console.log(this.user);
   }

  ngOnInit() {
  }
  Correc(){
    //console.log("correc");
   
    this.router.navigate(['/question']);
    //this.router.navigate(['/bodyMap']);
  }
  UnCorrec(){
    //this.log.user=null;
    this.log.logout();
    //console.log(this.log.aUser.ID);
    this.router.navigate(['/login']);
  }

}
