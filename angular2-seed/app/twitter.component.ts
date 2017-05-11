import {Component} from 'angular2/core';
import {TwitterTweetComponent} from './twitter-tweet.component';

@Component({
    selector: 'twitter',
    template: `
            <div>
                <div *ngFor="#tweet of Tweets">
                    <twitter-tweet
                        [profileImageSrc]="tweet.profileImageSrc"
                        [authorName]="tweet.authorName"
                        [twitterName]="tweet.twitterName"
                        [description]="tweet.description"
                    >
                    
                    </twitter-tweet>
                </div>
            </div>
    `,
    directives: [TwitterTweetComponent]

})
export class TwitterComponent{
        Tweets=
        [
            {
                profileImageSrc: "http://lorempixel.com/100/100/people?1",
                authorName: 'Windward',
                twitterName: '@windwardstudios',
                description: 'Looking for a better company reporting or docgen app?',
                likes: {
                    likeCount: 0,
                    iLike: false
                }
            },
            {
                profileImageSrc: "http://lorempixel.com/100/100/people?2",
                authorName: 'Angular JS News',
                twitterName: '@angularjs_news',
                description: 'Right Relevance: Infulencers, Articles and Conversations',
                likes: {
                    likeCount: 5,
                    iLike: true
                }
            },
            {
                profileImageSrc: "http://lorempixel.com/100/100/people?3",
                authorName: 'UX & Bootstrap',
                twitterName: '@3rdwave',
                description: '10 Reasons Why Web Projects Fail',
                likes: {
                    likeCount: 1,
                    iLike: true
                }
            },

        ]
}