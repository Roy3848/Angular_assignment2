import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private route:Router){

  }

  canActivate(){
    let role = localStorage.getItem('role')
    
    if (role =='admin'){
      return true
      
    }
    //alert()
    this.route.navigate(['unauthorized'])
    return false;
  }
  
}