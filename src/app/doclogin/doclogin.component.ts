import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {

username:string='';
password:string='';
constructor(private docauthService:DocauthService , private router:Router){}
inValidLogin=false

checkLogin(){
  if(this.docauthService.authentication(this.username,this.password)){
    
    this.router.navigate(['docdash'])
    this.inValidLogin=false
  }
  else{
    this.inValidLogin=true
    alert("Wrong Credential")
    this.router.navigate(['home'])
  }
}



}
