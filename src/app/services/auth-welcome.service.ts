import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WelcomeService } from '../services/welcome.service';

@Injectable()
export class AuthWelcomeService {

  constructor(private router: Router,private welcome:WelcomeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    //console.log(url);
    return this.checkbody(url);
  }
  checkbody(url: string): boolean {
    if(this.welcome.isauthen()){
      return true;
    }

    this.router.navigate(['/welcome']);
    return false;
  
  }

}
