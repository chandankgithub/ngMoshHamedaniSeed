import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router'

@Component({
    selector: 'archive-detail',
    template: `
        <div class="wrapper">
            <h1> <b> Archives </b> </h1>
            {{year}}/{{month}}
        </div>
    `,
    styles: [`
        .wrapper{
            padding:20px;
        }
    `]
})
export class ArchiveDetailComponent implements OnInit{
    year: string = "2014"
    month:string ="12"

    constructor(private _params: RouteParams){
        
    }

    ngOnInit(){
        this.year = this._params.get("year");
        this.month = this._params.get("month");
    }
}