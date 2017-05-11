import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector: 'twitter-tweet',
    templateUrl: 'app/twitter-tweet.template.html',
    styleUrls:['app/twitter-tweet.style.css'],
    directives:[LikeComponent]
})
export class TwitterTweetComponent{
    @Input() profileImageSrc: string;
    @Input() userName: string;
    @Input() twitterName: string;
    @Input() description: string;

}