import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AdminauthService } from './adminauth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate{

  constructor(private adminAuthService:AdminauthService,private router:Router) { }
  canActivate(){
    if(this.adminAuthService.isLoggedIn()){
      return true;
    }else{
    this.router.navigate(['adlogin']);
    return false;
    }
  }
  }

