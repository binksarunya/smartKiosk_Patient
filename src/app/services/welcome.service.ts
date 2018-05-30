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

  constructor(private http: Http) {
    this.auth = false;
  }

  isauthen(): boolean {
    return this.auth;
  }




  clear() {
    this.auth = false;
    // this.answerpatient = null;
  }

}
