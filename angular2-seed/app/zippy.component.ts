import {Component, Input} from 'angular2/core';

@Component({
    selector: 'bs-zippy',
    template: `
                <div class="panel panel-default">
                        <div class="panel-heading headingWrapper" (click)="onTitleHeaderClick()">
                            <div class="col-md-11">
                                {{title}}
                                </div>
                                <div>
                                    <i class="glyphicon pull-right"
                                        [ngClass]="{
                                            'glyphicon-chevron-up': toggleTitle,
                                            'glyphicon-chevron-down': !toggleTitle
                                        }"
                                        
                                    >
                                    </i>
                                </div>
                        </div>
                        <div class="panel-body bodyContent" [hidden]="!toggleTitle">
                            <ng-content></ng-content>
                        </div>
                </div>
    `,
    styles:[`
                .headingWrapper{
                    height:70px;
                    font-size:20px;
                    font-weight:bold;
                    cursor:pointer;
                    padding: 20px;
                }
                .bodyContent{
                    font-size:18px;
                    margin-left: 15px;
                }
    `]
})
export class ZippyComponent{
    @Input() title: string;
    toggleTitle: boolean= false;

    onTitleHeaderClick(){
        this.toggleTitle= !this.toggleTitle;
    }
}