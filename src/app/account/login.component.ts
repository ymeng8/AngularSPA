import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { Login } from '../shared/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  success: boolean;

  constructor(private fb: FormBuilder, private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email:['', Validators.compose([Validators.required, Validators.email])],
        password:['', Validators.required]
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      const login:Login = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value
      };
      this.accountService.Login(login).subscribe(data => {
        if (data) {
          this.success = true;
          setTimeout(() => { this.router.navigateByUrl('/'); }, 5000);
        }
        else { this.success = false; }
      });
    };
  };

}
