import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) {}

  canActivate(){

    let bool = !!localStorage.getItem('email')
    if(bool){
      return true;
    }
    //alert("Please Login to access this page")
    this.route.navigate(['auth'])
    return false
  }

}
  

