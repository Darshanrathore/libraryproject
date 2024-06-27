import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthservService} from './services/authserv.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthservService,private router:Router){}

  canActivate(){
    if(this.auth.isadminloggedIn()){
      return true;
    }else{
this.router.navigate(['/**']);
return false;
    }
    
  }
   
  
}
