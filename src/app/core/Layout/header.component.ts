import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  currentUser: User;
  isAdmin: boolean = false;
  constructor(private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe(status => { this.isLoggedIn = status; });
    this.accountService.currentUser.subscribe(user => { 
      this.currentUser = user; 
      this.isAdmin = (user.isAdmin=="true") ? true : false;
    });
  }

  logout() {
    this.accountService.Logout();
    this.router.navigateByUrl('/');
  }

}
