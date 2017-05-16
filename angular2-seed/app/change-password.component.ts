import {Component} from 'angular2/core';
import {ControlGroup,FormBuilder, Validators} from 'angular2/common';
import {PasswordValidator} from './password-validator'

@Component({
    selector: 'pw-change',
    templateUrl:'app/change-password.template.html'
})
export class ChangePasswordComponent{
    form:ControlGroup;
    oldPassword:string="12345"
    newPasswordVal:string;
    confirmPasswordVal:string;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            currentPassword:['',Validators.required],
            newpassword: ['',Validators.compose([
                                        Validators.required,
                                        PasswordValidator.minrequiredlength
                                        ])],
            confirmpassword: ['',Validators.required, PasswordValidator.matchpasswordasync]
        })
    };

    onNewPasswordChange(control){
        this.newPasswordVal = control.value;
        //Todo: Code Refactor
        if(this.confirmPasswordVal !== this.newPasswordVal){
            this.form.find('confirmpassword').setErrors({
                    passwordMismatch: true
            });
        }
        else{
            console.log('else');
            this.form.find('confirmpassword').setErrors(null);
        }
    };

    /** onConfirmPasswordChange was being used for onChange event, that means synchronous. It was working as expected.
     * But since we moved to asynchronous, this method not in use.
     */
    onConfirmPasswordChange(control){
        this.confirmPasswordVal = control.value;
        //Todo: Code Refactor
        if(this.confirmPasswordVal !== this.newPasswordVal){
            this.form.find('confirmpassword').setErrors({
                    passwordMismatch: true
            });
        }
    };

    onFormSubmit(){
        let oldpassword = this.form.value.currentPassword;
        if(this.oldPassword !== oldpassword){
            this.form.find('currentPassword').setErrors({
                badOldPassword: true
            })
        }
        else{
            alert('Password updated succesfully.')
        }
    }

}