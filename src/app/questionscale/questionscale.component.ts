import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosisService } from '../services/diagnosis.service';

@Component({
  selector: 'app-questionscale',
  templateUrl: './questionscale.component.html',
  styleUrls: ['./questionscale.component.css']
})
export class QuestionscaleComponent implements OnInit {

  constructor(private router: Router, private diag: DiagnosisService) { }

  ngOnInit() {
  }

  ok() {
    this.diag.diagnosis();
    this.diag.getFromData().then(
      (response) => {
        const data = response.json();
        //console.log(data);

      });

    this.router.navigate(['finish']);

  }

}
