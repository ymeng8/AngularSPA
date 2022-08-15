import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  
  isLoggedIn:boolean = false;
  isAdmin:string = "false";

  constructor(private accountService:AccountService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.accountService.isLoggedIn.subscribe(status => { this.isLoggedIn = status; });
    this.accountService.currentUser.subscribe(user => { this.isAdmin = user.isAdmin; });
    if ((localStorage.getItem('token')!=null) && (this.isLoggedIn) && (this.isAdmin=="true")) {
      return true;
    }
    else {
      return false;
    }
  }

}
