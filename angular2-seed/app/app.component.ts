import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
@Component({
    selector: 'my-app',
    template: `
                <fav-star> </fav-star>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent
                ]
                  
})
export class AppComponent { }