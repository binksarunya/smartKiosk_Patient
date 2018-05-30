import { Component, OnInit } from '@angular/core';
import { BodypartService } from '../services/bodypart.service';
import { Router } from '@angular/router';
import { DiagnosisService } from '../services/diagnosis.service';
import { WelcomeService } from '../services/welcome.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public img: string;
  public bodypart: Array<string>;
  //---------------------check point
  public mainbody: boolean;
  public headpoint: boolean;
  setfalse() {
    this.img = "assets/pictures/bodyFront_1.png";
    this.mainbody = true;
    this.headpoint = false;
  }

  constructor(private body: BodypartService, private rout: Router, private diag: DiagnosisService,private wel:WelcomeService) {
    this.img = "assets/pictures/bodyFront_1.png";
    this.bodypart = new Array();
    this.mainbody = true;
    this.headpoint = false;
  }

  ngOnInit() {
  }
  addpart(part: string) {
    let check = true;
    for (let i = 0; i < this.bodypart.length; i++) {
      if (this.bodypart[i] == part) {
        check = false;
        break;
      }
    }
    if (check) {
      this.bodypart.push(part);
    }

  }
  delete(part: string) {
    for (let i = 0; i < this.bodypart.length; i++) {
      if (this.bodypart[i] == part) {
        this.bodypart.splice(i, 1);
        break;
      }
    }
  }
  cancle() {
    this.bodypart = new Array();
    this.wel.clear();
    this.rout.navigate(['/welcome']);
  }
  ok() {
    if (this.bodypart.length == 0) {
      this.bodypart.push("all");
    }
    this.body.bodypart = this.bodypart;
    this.body.auth = true;
    this.diag.setbodypart(this.bodypart[0]);
    this.rout.navigate(['/login']);
  }
  //-------------------------------------------------------------head
  head(event: MouseEvent) {
    //console.log(event.type);
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/HeadNew.png";
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickhead(point: string) {
    //console.log(point);
    this.img = "assets/pictures/head.PNG";
    this.mainbody = false;
    this.headpoint = true;
    //this.addpart(point);
  }
  head2(event: MouseEvent) {
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/head2.PNG";
    } else {
      this.img = "assets/pictures/head.PNG";
    }
  }
  clickhead2(point: string) {
    this.addpart(point);
  }
  ear(event: MouseEvent) {
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/ear.png";
    } else {
      this.img = "assets/pictures/head.PNG";
    }
  }
  clickear(point: string) {
    this.addpart(point);
  }
  eye(event: MouseEvent) {
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/Eye.PNG";
    } else {
      this.img = "assets/pictures/head.PNG";
    }
  }
  clickeye(point: string) {
    this.addpart(point);
  }
  nose(event: MouseEvent) {
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/nose.PNG";
    } else {
      this.img = "assets/pictures/head.PNG";
    }
  }
  clicknose(point: string) {
    this.addpart(point);
  }
  mouth(event: MouseEvent) {
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/mouth.PNG";
    } else {
      this.img = "assets/pictures/head.PNG";
    }
  }
  clickmouth(point: string) {
    this.addpart(point);
  }

  //----------------------------------------------------end nose
  neck(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/NeckNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickneck(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  chest(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/ChestNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickchest(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  abdomen(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/AbdomenNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickabdomen(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  panis(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/PenisNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickpanis(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  legtop(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/ThighNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clicklegtop(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  knee(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/KneeNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickknee(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  shin(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/ShinNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickshin(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  foot(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/FootNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickfoot(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  upperarm(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/upperArmNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickupperarm(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  arm(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/ArmNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickarm(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  hand(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/HandNew.png"
    } else {
      this.img = "assets/pictures/bodyFront_1.png";
    }
  }
  clickhand(point: string) {
    //console.log(point);
    this.addpart(point);
  }

}
