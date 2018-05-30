import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Connect } from '../models/connect';

@Injectable()
export class WelcomeService {
  public auth: boolean;
  public docname:string;

  constructor(private http: Http) {
    this.auth = false;
  }

  isauthen(): boolean {
    return this.auth;
  }

  getdocname() {
    // console.log(data);
    let url = Connect.getHostUrl() + '/getdoctor.php'
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.get(url, header).toPromise();
  }




  clear() {
    this.auth = false;
    this.docname = null;
    // this.answerpatient = null;
  }

}
