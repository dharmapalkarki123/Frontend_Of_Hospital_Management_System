import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

authentication(username:string,password:string){
  if(username=="doctor"&&password=="Doctor"){
    sessionStorage.setItem('username',username);
    return true;
  }
  else{
    return false;
  }
}

isLogeedIn1(){
  console.log("user is logged in");
  
  let user=sessionStorage.getItem('username');
  
  return !(user==null);
}

logout1(){
  console.log("User is logged out");
  
  sessionStorage.removeItem('username');
}

}
