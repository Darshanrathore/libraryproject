import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservService {

  constructor() { }
  isadminloggedIn(){
    let role= sessionStorage.getItem('role');
    console.log(role);
    if(role=='admin'){
      return true;
    }else{
      return false;
    }

  }
}
