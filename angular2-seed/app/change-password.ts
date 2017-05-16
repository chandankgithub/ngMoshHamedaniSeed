import {Component} from 'angular2/core';
import {ChangePasswordComponent} from './change-password.component';

@Component({
    selector:'change-password',
    template:`
            <div>
                <pw-change></pw-change>
            </div>
    `,
    directives:[ChangePasswordComponent]
})

export class ChangePassword{

}