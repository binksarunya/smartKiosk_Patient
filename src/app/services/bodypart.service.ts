import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';
import { question } from '../models/question';

@Injectable()
export class BodypartService {
  public bodypart: Array<any>
  public auth: boolean;
  public question: Array<any>;
  public answer :Array<any>;

  constructor(private http: Http) {
    this.auth = false;
    this.bodypart = new Array();
  }

  isauthen(): boolean {
    return this.auth;
  }

  getquestion(lv: number): Observable<boolean> {
    let body = this.bodypart[0];
    let data: question;
    data = new question();
    data.body = body;
    data.lv = lv;
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
  }

}
