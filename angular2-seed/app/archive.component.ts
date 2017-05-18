import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
    selector:'archive',
    templateUrl:'/app/archive.component.html',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .wrapper{
            padding:20px;
        }
    `]
})
export class ArchiveComponent implements OnInit{
    private archives:any[]

    constructor(){
        this.archives=[
                {
                   year:2016,
                   month:1 
                },
                {
                   year:2016,
                   month:2 
                },
                {
                   year:2016,
                   month:3 
                }
            ]
    }
    ngOnInit(){

    }
}