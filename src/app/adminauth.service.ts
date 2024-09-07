import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

authentication(username2:string,password2:string){
  if(username2=="admin"&& password2=="Admin"){
    sessionStorage.setItem('username2',username2)
    return true;
  }
  else{
    return false;
  }

}

isLoggedIn(){
  console.log("user is logged in");
  
  let user=sessionStorage.getItem('username2');
  
  return !(user==null);
}

logout(){
  console.log("User is logged out");
  
  sessionStorage.removeItem('username2');
}

}
