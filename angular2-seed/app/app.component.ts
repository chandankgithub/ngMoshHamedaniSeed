import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
import {LikeComponent} from './like.component'
@Component({
    selector: 'my-app',
    template: `
                <like [iLike]="twitter.likeStatus"
                      [noOfLikes]="twitter.likesCount"
                    (change)="onLikeStatusChange(e)" 
                ></like>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent,
                    LikeComponent
                ]
                  
})
export class AppComponent { 

    twitter={
        likeStatus:true,
        likesCount:35
    }
    onLikeStatusChange(eve){
        console.log(eve);
    }
}