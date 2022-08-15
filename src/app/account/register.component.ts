import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidatorService } from '../core/Custom Validators/passwordValidator.validator';
import { AccountService } from '../core/services/account.service';
import { Registration } from '../shared/models/Registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted:boolean = false;
  success:boolean = false;

  constructor(private fb:FormBuilder, private customValidator:passwordValidatorService,
    private accountService:AccountService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    },
    {
      validator: this.customValidator.matchPassword('password','confirmPassword')
    }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const newReg:Registration = {
        firstName: this.registerForm.controls['firstName'].value,
        lastName: this.registerForm.controls['lastName'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        dateOfBirth: this.registerForm.controls['dateOfBirth'].value
      };
      this.accountService.Register(newReg).subscribe(reg => {
        console.log(reg);
        if (reg) {
          this.success = true;
          setTimeout(() => { this.router.navigateByUrl('/Account/Login'); }, 3000);
        }
        else { this.success = false; }
      });
    };
  }

}
