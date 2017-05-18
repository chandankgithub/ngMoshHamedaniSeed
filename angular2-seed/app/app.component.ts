import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
import {VoteComponent} from './voter.component'
import {TwitterComponent} from './twitter.component';
import {FacebookZippyComponent} from './facebook-zippy.component'
import {BasicFormValidation} from './basic-form-validation.component'
import {ChangePassword} from './change-password'
import {ObservablesDemoComponent} from './observables-demo.component'
import {GitHubAccountComponent} from './github-account.component'

@Component({
    selector: 'my-app',
    template: `
                <github-account> </github-account>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent,
                    VoteComponent,
                    TwitterComponent,
                    FacebookZippyComponent,
                    BasicFormValidation,
                    ChangePassword,
                    ObservablesDemoComponent,
                    GitHubAccountComponent
                ]
                  
})
export class AppComponent { 

}