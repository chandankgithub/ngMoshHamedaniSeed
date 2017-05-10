import { Component } from 'angular2/core'
import { CourseService } from './course.service'
@Component({
    selector: 'courses',
    template: `<h2><b>Courses</b></h2>
                <ul>
                    <li *ngFor="#course of courses">
                        {{course}}
                    </li>
                </ul>
         `,
    providers: [CourseService]
})
export class CourseComponent {
    private courseTitle: string = "The title of courses page";
    private courses;
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}