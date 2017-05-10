import {Component} from 'angular2/core'

@Component({
    selector:'fav-star',
    template:`
            <div>
                <span 
                    style="font-size: 50px;" 
                    [ngClass]="  _isStarEmpty ? 'glyphicon glyphicon-star-empty' : 'glyphicon glyphicon-star' "
                    (click)="onClick()"
                    > </span>
                <span 
                    style="font-size: 50px;" 
                    class="glyphicon glyphicon-star"
                    [class.glyphicon-star-empty]="_isStarEmpty"
                    (click)="onClick()"
                    > </span>
            </div>
    `
})
export class FavouriteStartComponent{
    _isStarEmpty:boolean = false;

    onClick(){
        this._isStarEmpty = !this._isStarEmpty;
    }
}