import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { User } from'../models/user';
import {LoginService} from'../services/login.service';
import { BodypartService } from '../services/bodypart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  id:string;
  pass:string;
  warn:string;

  constructor(private router: Router,private log:LoginService,private body :BodypartService) { 
    this.user = new User();
    this.user.id=null;
  }

  ngOnInit() {
    //console.log(this.body.bodypart);
  }
  
  login(){

    if(this.user.id!=null){
      this.log.login(this.user).subscribe(
        response =>{
          let redirect = '/home';
          let a:boolean = false;
          if (response==true) {
     
            let navigationExtras: NavigationExtras = {
              //preserveQueryParams: true,
              //preserveFragment: true,
              
            };
  
            //console.log("log in success");
            this.router.navigate([redirect], navigationExtras);
          } else {
            //console.log("fail login");
          }
        })
      }else{
        //console.log("input");
        this.warn="invalid ID or Password";
      }


  }

}
