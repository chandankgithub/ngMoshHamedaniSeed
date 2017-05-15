import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
import {VoteComponent} from './voter.component'
import {TwitterComponent} from './twitter.component';
import {FacebookZippyComponent} from './facebook-zippy.component'
import {BasicFormValidation} from './basic-form-validation.component'
import {ChangePassword} from './change-password'

@Component({
    selector: 'my-app',
    template: `
                <change-password> </change-password>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent,
                    VoteComponent,
                    TwitterComponent,
                    FacebookZippyComponent,
                    BasicFormValidation,
                    ChangePassword
                ]
                  
})
export class AppComponent { 

}