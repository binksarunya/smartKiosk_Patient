import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';
import { question } from '../models/question';
import { Disease } from '../models/disease';
import { Diag } from '../models/diag';
import { Diagfordoctor } from '../models/diagfordoctor';
import { LoginService } from '../services/login.service';


@Injectable()
export class DiagnosisService {

  private symptom: Array<any>;
  private bodypart: string;
  private disease: Array<any>;
  private diseasename: Array<string>;
  private diagarr: Array<Diag>
  
  //======result========
  public result:any;
  private diagfordoc: Diagfordoctor;

  constructor(private http: Http, private user: LoginService) {
    this.symptom = new Array();
    this.disease = new Array();
    this.diseasename = new Array();
    this.diagarr = new Array();
    this.diagfordoc = new Diagfordoctor();
  }

  addqueue(){
    let url = Connect.getHostUrl() + '/adqueue.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,this.user.user.ID,header).toPromise();
  }

  todiag(data:any){
    let url = Connect.getHostUrl() + '/diag.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,data,header).toPromise();
  }
  addtotable(data:any){
    this.diagfordoc.patientid = this.user.user.ID;
    this.diagfordoc.diseasediag = data;
    let url = Connect.getHostUrl() + '/adddiagtable.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,this.diagfordoc,header).toPromise();
  }
  // diagnosis() {
  //   console.log("diag");
  //   for (let i = 0; i < this.diseasename.length; i++) {
  //     let data = new Diag();
  //     data.name = this.diseasename[i];
  //     for (let j = 0; j < this.disease.length; j++) {
  //       if (this.disease[j].diseaseid == this.diseasename[i]) {
  //         data.symptom.push(this.disease[j].symptomid);
  //       }
  //     }
  //     this.diagarr.push(data);
  //     //console.log(this.diagarr);
  //   }
  //   this.diag();
  // }
  // diag() {

  //   this.diagfordoc.patientid = this.user.user.ID;
  //   this.diagfordoc.ans = this.symptom;
  //   for (let i = 0; i < this.diagarr.length; i++) {
  //     let symptom = this.diagarr[i].symptom;
  //     let percen = 0;
  //     let match = 0;
  //     for (let j = 0; j < symptom.length; j++) {
  //       for (let k = 0; k < this.symptom.length; k++) {
  //         if (symptom[j] == this.symptom[k].symptomid) {
  //           match++;
  //         }
  //       }
  //     }
  //     percen = match / symptom.length * 100;
  //     this.diagfordoc.diseasediag.push(this.diagarr[i].name);
  //     this.diagfordoc.diseasepercen.push(percen);
  //     //console.log(percen);
  //   }
  //   // console.log(this.diagarr);
  //   // console.log(this.symptom);
  //   //console.log(this.diagfordoc);
  //   //console.log(percen);
  // }

  setbodypart(part: string) {
    this.bodypart = part;
    //console.log("add part success : "+part);
  }
  // addsymptom(symptom: any) {
  //   this.symptom.push(symptom);
  //   //console.log(this.symptom);
  // }

  // getdisease(): Observable<boolean> {
  //   let data = new Disease();
  //   data.body = this.bodypart;
  //   data.symptom = this.symptom[0].symptomid //continous
  //   //console.log(data);
  //   let url = Connect.getHostUrl() + '/getdiseasefordiag.php';
  //   let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  //   return this.http.post(url, data, header).map((res: Response) => { return this.reget(res) }).catch((error: any) => {
  //     console.log("input ID");
  //     return Observable.of(false);
  //   });

  // }
  // reget(res: Response): boolean {
  //   let data = res.json();
  //   //console.log(data);
  //   if (data.Error == "true") {
  //     return false;
  //   } else {
  //     this.diseasename = data.disease;
  //     this.disease = data.fordiag;
  //     //console.log(this.diseasename);
  //     //console.log(this.disease);
  //     return true;
  //   }

  // }
  // getFromData(){
  //   let url = Connect.getHostUrl() + '/diagtable.php';
  //   let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  //   return this.http.post(url,this.diagfordoc,header).toPromise();
  // }

  clear() {
    this.symptom = new Array();
    this.disease = new Array();
    this.diseasename = new Array();
    this.diagarr = new Array();
    this.diagfordoc = new Diagfordoctor();

  }

}
