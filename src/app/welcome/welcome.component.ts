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
  constructor( private rout: Router,private welcome:WelcomeService) {
    this.drname = null;
   }

  ngOnInit() {
  }

  click(){
    this.welcome.auth = true;
    this.rout.navigate(['bodypart']);
  }

}
