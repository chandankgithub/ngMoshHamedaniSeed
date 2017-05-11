import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
import {VoteComponent} from './voter.component'
@Component({
    selector: 'my-app',
    template: `
                <vote   [voteCount]="vote.noOfVotes"
                        [myVote]="vote.myVote"
                        (onVote)="onVoteChange($event)"></vote>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent,
                    VoteComponent
                ]
                  
})
export class AppComponent { 

    vote={
        noOfVotes:50,
        myVote:-1
    }
    onVoteChange(e){
        //console.log(e);
    }
}