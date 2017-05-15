import { Component } from 'angular2/core';

@Component({
    selector: 'basic-fv',
    templateUrl: 'app/basic-form-validation.template.html',
    styles:[`
            .form-wrapper{
                    padding: 25px;
                    font-size: 16px;
            }
            .section-wrapper{
                margin-top: 15px;
            }
            .ng-touched.ng-invalid{
                border:solid 1px red;
            }
    `]
    
})
export class BasicFormValidation{
    onChange(name){
        console.log(name);
    }
}
