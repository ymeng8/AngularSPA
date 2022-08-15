import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { Registration } from 'src/app/shared/models/Registration';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private jwtHelper = new JwtHelperService();

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private http:HttpClient) { }

  Register(newReg:Registration):Observable<boolean> {
    return this.http.post<boolean>('https://localhost:7292/api/Account/register', newReg);
  }

  Login(login:Login):Observable<boolean> {
    return this.http.post('https://localhost:7292/api/Account/login', login).pipe(map((response:any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        this.populateUserInfoFromToken();
        return true;
      }
      return false;
    }));
  }

  populateUserInfoFromToken() {
    var token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.currentUserSubject.next(decodedToken);
      this.isLoggedInSubject.next(true);
    };
  }

  Logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isLoggedInSubject.next(false);
  }

  validateJWT() {
    var token = localStorage.getItem('token');
    if (token != null) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.currentUserSubject.next(decodedToken);
      this.isLoggedInSubject.next(true);
    }
  }
}
