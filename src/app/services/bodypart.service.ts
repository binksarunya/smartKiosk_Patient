import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';
import { question } from '../models/question';
import { Anssetfordoc } from '../models/anssetfordoc';
import { LoginService } from '../services/login.service';

@Injectable()
export class BodypartService {
  public bodypart: Array<any>
  public auth: boolean;
  //---------------------------------------------------
  public question: Array<any>;
  public answer :Array<any>;

  //----------------------edit new -------------------//
  public firstquestion:any;
  public ans:any;
  public answerpatient:Array<any>;
  public rediagfordoc:Anssetfordoc;

  constructor(private http: Http,private user:LoginService) {
    this.auth = false;
    this.bodypart = new Array();
    this.rediagfordoc = new Anssetfordoc();
    // this.rediagfordoc.patientid = this.user.user.ID;
  }
  senddata(){
    this.rediagfordoc.patientid = this.user.user.ID
    let url = Connect.getHostUrl() + '/savequestionandanswerfordoc.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url,this.rediagfordoc,header).toPromise();
  }

  isauthen(): boolean {
    return this.auth;
  }

  getfirstquestion(id:string): Observable<boolean> {
    let body = this.bodypart[0];
    let data: question;
    data = new question();
    data.body = body;
    data.questionid = id;
    //console.log(data);
    let url = Connect.getHostUrl() + '/getfirstquestion.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).map((res: Response) => { return this.regetfirstquestion(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }
  regetfirstquestion(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      //console.log(data.Message);
      this.firstquestion = data.data[0];
      //console.log(this.firstquestion);
      return true;
    }
  }

  getnextquestion(id:string): Observable<boolean> {
    let body = this.bodypart[0];
    let data: question;
    data = new question();
    data.body = body;
    data.questionid = id;
    //console.log(data);
    let url = Connect.getHostUrl() + '/getnextquestion.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, id, header).map((res: Response) => { return this.regetnextquestion(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }
  regetnextquestion(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      //console.log(data.Message);
      this.firstquestion = data.data[0];
      //console.log(this.firstquestion);
      return true;
    }
  }

  getans(id:string): Observable<boolean> {

    //console.log(id);
    let url = Connect.getHostUrl() + '/getans.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, id, header).map((res: Response) => { return this.regetans(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }
  regetans(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      this.ans=data.data2;
      //console.log(this.ans);
      // this.firstquestion = data.data[0];
      //console.log(this.firstquestion);
      return true;
    }
  }

  getquestion(lv: number): Observable<boolean> {
    let body = this.bodypart[0];
    let data: question;
    data = new question();
    data.body = body;
    // data.lv = lv;
    //console.log(data);
    let url = Connect.getHostUrl() + '/getquestion.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, data, header).map((res: Response) => { return this.reget(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });

  }
  reget(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      //console.log(data.Message);
      this.question = data.data;
      //console.log(this.question);
      return true;
    }
  }

  getanswer(questionid:string): Observable<boolean>{
    let url = Connect.getHostUrl() + '/getanswer.php';
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, questionid, header).map((res: Response) => { return this.reanswer(res) }).catch((error: any) => {
      console.log("input ID");
      return Observable.of(false);
    });
  }
  reanswer(res: Response): boolean {
    let data = res.json();
    //console.log(data);
    if (data.Error == "true") {
      //console.log(data.Message);
      return false;
    } else {
      //console.log(data.Message);
      this.answer = data.data;
      //console.log(this.answer);
      return true;
    }
  }

  clear(){
    this.auth=false;
    this.answerpatient = null;
  }

}
