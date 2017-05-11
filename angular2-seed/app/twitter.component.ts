import {Component} from 'angular2/core';
import {TwitterTweetComponent} from './twitter-tweet.component';
import {TwitterTweetService} from './twitter-tweet.service'

@Component({
    selector: 'twitter',
    template: `
            <div class="tweetWrapper">
                <div *ngFor="#tweet of tweets">
                    <twitter-tweet
                        [profileImageSrc]="tweet.profileImageSrc"
                        [authorName]="tweet.authorName"
                        [twitterName]="tweet.twitterName"
                        [description]="tweet.description"
                        [likes]="tweet.likes"
                    >
                    
                    </twitter-tweet>
                </div>
            </div>
    `,
    styles:[`
        .tweetWrapper{
            margin-top:35px;
            margin-left:30px;
        }
    `],
    directives: [TwitterTweetComponent],
    providers:[TwitterTweetService]

})
export class TwitterComponent{
    tweets:any[];
       constructor(private tweetService: TwitterTweetService){
            this.tweets = tweetService.getTweets();
       }
}