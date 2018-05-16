import { Component, OnInit } from '@angular/core';
import { BodypartService } from '../services/bodypart.service';
import { Router } from '@angular/router';
import { DiagnosisService } from '../services/diagnosis.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public img: string;
  public bodypart: Array<string>;

  constructor(private body:BodypartService,private rout:Router,private diag:DiagnosisService) {
    this.img = "assets/pictures/bodyFront.png";
    this.bodypart = new Array();
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
  }
  ok(){
    if(this.bodypart.length==0){
      this.bodypart.push("all");
    }
    this.body.bodypart=this.bodypart;
    this.body.auth=true;
    this.diag.setbodypart(this.bodypart[0]);
    this.rout.navigate(['/login']);
  }

  head(event: MouseEvent) {
    //console.log(event.type);
    if (event.type == "mouseenter") {
      //console.log("enter");
      this.img = "assets/pictures/head.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickhead(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  neck(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/neck.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickneck(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  chest(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/chest.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickchest(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  abdomen(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/abdomen.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickabdomen(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  panis(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/penis.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickpanis(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  legtop(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/legTop.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clicklegtop(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  knee(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/knee.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickknee(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  shin(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/shin.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickshin(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  foot(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/foot.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickfoot(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  upperarm(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/upperArm.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickupperarm(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  arm(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/arm.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickarm(point: string) {
    //console.log(point);
    this.addpart(point);
  }
  hand(event: MouseEvent) {
    if (event.type == "mouseenter") {
      this.img = "assets/pictures/hand.png"
    } else {
      this.img = "assets/pictures/bodyFront.png";
    }
  }
  clickhand(point: string) {
    //console.log(point);
    this.addpart(point);
  }

}
