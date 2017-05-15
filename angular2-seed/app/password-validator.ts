import {Control} from 'angular2/common'
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

    static matchpasswordasync(control: Control){
        return new Promise((resolve, reject) => {
            
        })
    }

}