import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent {
username2:string='';
password2:string='';
constructor(private router:Router,private adminService:AdminauthService){}
inValidLogin=false

checkLogin(){
  if(this.adminService.authentication(this.username2,this.password2)){
    this.router.navigate(['admin'])
    this.inValidLogin=false;
  }
  else{
    this.inValidLogin=true;
    alert("Wrong Credential")
    this.router.navigate(['home'])
  }

}



}
