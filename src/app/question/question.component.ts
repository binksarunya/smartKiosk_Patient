import { Component, OnInit } from '@angular/core';
import { BodypartService } from '../services/bodypart.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { DiagnosisService } from '../services/diagnosis.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private btnlock: boolean;

  public question: Array<any>;

  public questionfilter: Array<any>;
  public number: number;
  public questionchoice: any;
  public showquestion: string;
  public lv: number;
  public loop: number;

  public answer: Array<string>;
  public patientanswer: any;

  public symptomanswer: Array<any>;

  public checknull :boolean;



  public str;
  constructor(private body: BodypartService, private router: Router, private login: LoginService, private diag: DiagnosisService) {
    this.questionfilter = new Array();
    this.str = this.login.user.name;
    this.lv = 1;
    this.number = 1;
    this.loop = 0;
    this.btnlock = true;
    this.symptomanswer = new Array();
    this.checknull =false;

  }

  ngOnInit() {
    this.getquestion();

  }
  detail() {
    this.router.navigate(['/home']);

  }

  nextquestion() {
    //console.log(this.patientanswer);
    this.diag.addsymptom(this.patientanswer);
    this.symptomanswer.push(this.patientanswer);

    this.btnlock = true;
    if (this.question.length > 0) {
      this.setquestion();
    }
    else if (this.question.length == 0 || this.loop == 2) {
      this.loop = 0;
      this.lv++;
      this.getquestion();

    }

    if (this.lv == 4) {
      //console.log(this.symptomanswer);
      if(this.checknull)
      this.getdisease();
      this.router.navigate(['/questionscale']);
    }
    this.loop++;
    this.number++;


  }
  setquestion() {
    this.checknull = true;
    let ex = Math.floor(Math.random() * Math.floor(this.question.length));
    this.questionchoice = this.question.splice(ex, 1);
    this.showquestion = this.questionchoice[0].question;
    //console.log(this.questionchoice[0]);
    this.getanswer(this.questionchoice[0].ID);
  }

  getanswer(questionID: string) {
    this.body.getanswer(questionID).subscribe(
      response => {

        if (response == true) {
          this.answer = this.body.answer;

        } else {
          this.nextquestion();
        }
      }
    );

  }
  logout() {
    this.router.navigate(['/bodypart']);
    this.login.logout();
    this.body.auth = false;

  }



  getquestion() {
    this.body.getquestion(this.lv).subscribe(
      response => {

        if (response == true) {
          this.question = this.body.question;
          
          this.setquestion();

          this.loop++;


        } else {


          this.lv++;
          this.getquestion();
          if (this.lv == 4) {
            //console.log(this.symptomanswer);
            if(this.checknull)
            this.getdisease();
            this.router.navigate(['/questionscale']);
          }
        }
      }
    );

  }


  click() {

    this.btnlock = false;

  }
  getdisease() {
    this.diag.getdisease().subscribe(
      response => {

        if (response == true) {

        } else {

        }
      });
  }

}
