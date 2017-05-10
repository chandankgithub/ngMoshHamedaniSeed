import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
@Component({
    selector: 'my-app',
    template: `
                <h1><b>My First Angular 2 App</b></h1>
                <courses></courses>
                <authors></authors>
            `,
    directives: [CourseComponent, AuthorComponent]
                  
})
export class AppComponent { }