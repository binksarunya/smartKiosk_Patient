import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BodypartService } from './bodypart.service';

@Injectable()
export class AuthBodypartService {

  constructor(private router: Router,private bodypart:BodypartService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    //console.log(url);
    return this.checkbody(url);
  }
  checkbody(url: string): boolean {
    if(this.bodypart.isauthen()){
      return true;
    }

    this.router.navigate(['/bodypart']);
    return false;
  }

}
