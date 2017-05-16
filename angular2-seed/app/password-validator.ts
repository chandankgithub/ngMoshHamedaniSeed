import {Control, ControlGroup} from 'angular2/common'
export class PasswordValidator{
    static minrequiredlength(control: Control){
        let expectedLength=5;
        let len = control.value.length;
        let remainingCharacter = 5-len;
        if(len > 0 && len < expectedLength){
            
            return {
                        minCharacterError:{
                            expected: expectedLength,
                            left: remainingCharacter
                        }
                }   
        }

        return null;
        
    }

    /** Async password validation - when user types then checking performs */
    static matchpasswordasync(control: Control){
        let newPasswordValue = control.root.find('newpassword').value;
        let confirmPasswordValue = control.value;
        
        return new Promise((resolve, reject) => {
            if(newPasswordValue == confirmPasswordValue){
                resolve(null);
            }
            else {
                resolve({ matched: false})
            }
        })
    }

}