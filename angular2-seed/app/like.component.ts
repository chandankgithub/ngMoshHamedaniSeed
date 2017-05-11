import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'like',
    templateUrl:'app/like.template.html',
    styles:[`
    
        .customHeart{ 
            color:deeppink;
            font-size:30px
        },
    `]
    
})
export class LikeComponent{
    @Input() iLike:boolean = false;
    @Input() noOfLikes = 10
   onLike(){
    this.iLike = !this.iLike;
    this.noOfLikes = this.iLike ? this.noOfLikes += 1 : this.noOfLikes -= 1;
    this.change.emit(this.noOfLikes)
  }
  @Output() change = new EventEmitter();
}