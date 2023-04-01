import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (["profile", "cart", "logout"].includes(route.routeConfig?.path!!)){
      return this.authservice.logedOrNot()
    } 
    else if (["login", "register"].includes(route.routeConfig?.path!!)){
      return !this.authservice.logedOrNot()
    }
    else {
      return true
    }
  }
  
}
