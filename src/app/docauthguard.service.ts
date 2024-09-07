import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DocauthService } from './docauth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocauthguardService implements CanActivate {

  constructor(private docauthService:DocauthService,private router:Router) { }

  canActivate(){
    if(this.docauthService.isLogeedIn1()){
      return true;
    }else{
      this.router.navigate(['doclogin'])
      return false;
    }
  }
  
}
