import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
import {VoteComponent} from './voter.component'
import {TwitterComponent} from './twitter.component';
import {FacebookZippyComponent} from './facebook-zippy.component'

@Component({
    selector: 'my-app',
    template: `
                <fb-zippy> </fb-zippy>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent,
                    VoteComponent,
                    TwitterComponent,
                    FacebookZippyComponent
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