import {Component, Input, Output,EventEmitter} from 'angular2/core';

@Component({
    selector:'vote',
    template:`
               <div class="voterUI">
                    <i class="glyphicon glyphicon-menu-up"
                        (click)="onPositiveVoting()"
                        [class.menuup_orange]="(voteCount + myVote)== (voteCount + 1)"
                        [class.disabled]="isMenuUpDisabled"
                        >
                    </i>

                    <span>{{voteCount + myVote}}</span>

                    <i class="glyphicon glyphicon-menu-down"
                        (click)="onNegativeVoting()"
                        [class.menudown_orange]="(voteCount + myVote) == (voteCount -1)"
                        [class.disabled]="isMenuDownDisabled" >
                    </i>
                </div>
    `,
    styles:[`
            .voterUI{
                width: 20px;
                font-size: 35px;
                margin-left: 30px;
                margin-top: 30px;
            }
            
            .menuup_orange{
                color:orange
            }
            .menudown_orange{
                color:orange
            }
            .disabled{
                pointer-events: none;
            }

    `]
    
})
export class VoteComponent{
    @Input() voteCount:number = 10;
    @Input() myVote: number=5;

    isMenuUpDisabled:boolean = false;
    isMenuDownDisabled:boolean=false;
    
    @Output() onVote = new EventEmitter();

    onPositiveVoting(){
        this.isMenuDownDisabled = false;
        var currentVote = this.voteCount + this.myVote;
        //when voting is possible
        var upperThreshold = this.voteCount + 1;
        if(currentVote < upperThreshold){
            //voting is possible
            this.myVote += 1;
        }
        else if (currentVote == upperThreshold){
            //voting is not possible
            this.isMenuUpDisabled = true;
        }
        this.onVote.emit(this.voteCount);
    }

    onNegativeVoting(){
        this.isMenuUpDisabled = false;  
        
        //voting is possible or not?
        var lowerThreshold = this.voteCount -  1;
        var currentVote = this.voteCount + this.myVote;
        
        if(currentVote > lowerThreshold){ //voting is possible
            this.myVote -= 1;
        }
        else if (currentVote == lowerThreshold){
            //voting is not possible
            this.isMenuDownDisabled = true;
        }

        this.onVote.emit(this.voteCount);
    }

    
}
    