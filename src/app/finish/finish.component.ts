import { Component, OnInit } from '@angular/core';
import { BodypartService } from '../services/bodypart.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { DiagnosisService } from '../services/diagnosis.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private body: BodypartService, private router: Router, private login: LoginService,private diag:DiagnosisService) { }

  ngOnInit() {
    //console.log(this.body.rediagfordoc);
  }
  ok(){
    this.diag.clear();
    this.body.clear();
    this.login.logout();
    this.router.navigate(['/bodypart']);
  }

}
