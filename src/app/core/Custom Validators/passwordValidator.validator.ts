import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl, FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class passwordValidatorService {
    constructor() {}
    
    patternValidator():ValidatorFn {
        return (control:AbstractControl):{[key:string]:any} => {
            if (!control.value) { return null!; }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            const valid = regex.test(control.value);
            return valid ? null! : {invalidPassword: true};
        }
    }

    matchPassword(password:string, confirmPassword:string) {
        return (formGroup:FormGroup) => {
            const passwordControl = formGroup.controls[password].value;
            const confirmPasswordControl = formGroup.controls[confirmPassword].value;
            if (!passwordControl || ! confirmPasswordControl) { return null; }
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) { return null; }
            if (passwordControl != confirmPasswordControl) {
                confirmPasswordControl.setErrors({'passwordMismatch': true});
            }
            return null;
        }
    }
}