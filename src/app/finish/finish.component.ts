import { Component, OnInit } from '@angular/core';
import { BodypartService } from '../services/bodypart.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { DiagnosisService } from '../services/diagnosis.service';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private body: BodypartService, private router: Router, private login: LoginService,private diag:DiagnosisService,private welcome: WelcomeService) { }

  ngOnInit() {
    //console.log(this.body.rediagfordoc);
  }
  ok(){
    this.diag.clear();
    this.body.clear();
    this.login.logout();
    this.welcome.clear();
    this.router.navigate(['/bodypart']);
  }

}
