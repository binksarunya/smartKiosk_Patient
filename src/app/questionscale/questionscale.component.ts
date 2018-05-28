import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosisService } from '../services/diagnosis.service';
import { BodypartService } from '../services/bodypart.service';

@Component({
  selector: 'app-questionscale',
  templateUrl: './questionscale.component.html',
  styleUrls: ['./questionscale.component.css']
})
export class QuestionscaleComponent implements OnInit {
  public lv: string;
  public checkbtn: boolean;

  constructor(private router: Router, private diag: DiagnosisService, private body: BodypartService) {
    this.checkbtn = true;
  }

  ngOnInit() {
    //console.log(this.body.answerpatient)
  }
  click() {
    this.checkbtn = false;
  }

  ok() {
    this.diag.addqueue().then(Response => {
      let re = Response.json();
      if (re.Error != "true") {
        this.diag.todiag(this.body.answerpatient).then(Response => {
          const data = Response.json();
          this.diag.result = data.data4;
          // console.log(this.diag.result);
          this.diag.addtotable(this.diag.result).then(Response => {
            let d = Response.json();
            console.log(d);
            this.router.navigate(['finish']);
          });

        });

      } else {
        this.router.navigate(['finish']);
      }
    });
    // this.diag.diagnosis();
    // this.diag.getFromData().then(
    //   (response) => {
    //     const data = response.json();
    //     //console.log(data);

    //   });



  }

}
