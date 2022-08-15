import { Component } from '@angular/core';
import { AccountService } from './core/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSPA';
  
  constructor(private accountService:AccountService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.accountService.validateJWT();
    };
  }
}
