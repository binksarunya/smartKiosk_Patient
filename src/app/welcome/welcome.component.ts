import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public drname:string;
  public docname:Array<any>;
  constructor( private rout: Router,private welcome:WelcomeService) {
    this.drname = null;
   }

  ngOnInit() {
  this.getnamedoc();
  }

  click(){
    if(this.drname == null){
      this.drname="all";
    }
    this.welcome.auth = true;
    this.welcome.docname = this.drname;
    this.rout.navigate(['bodypart']);
  }
  getnamedoc(){
    this.welcome.getdocname().then(Response=>{
      let data = Response.json();
      this.docname = data.data;
      console.log(this.docname);
    });
  }

}
