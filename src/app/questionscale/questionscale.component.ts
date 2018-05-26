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
  public lv:string;

  constructor(private router: Router, private diag: DiagnosisService,private body: BodypartService) { }

  ngOnInit() {
  }

  ok() {
    this.diag.addqueue().then(Response=>{
      this.diag.todiag(this.body.answerpatient).then(Response=>{
        const data = Response.json();
        console.log(data);
        this.router.navigate(['finish']);
      });
      
    });
    // this.diag.diagnosis();
    // this.diag.getFromData().then(
    //   (response) => {
    //     const data = response.json();
    //     //console.log(data);

    //   });

    

  }

}
