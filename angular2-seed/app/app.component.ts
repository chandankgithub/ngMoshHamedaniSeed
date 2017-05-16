import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {AuthorComponent} from './author.component'
import {FavouriteStartComponent} from './favourite-star.component'
import {VoteComponent} from './voter.component'
import {TwitterComponent} from './twitter.component';
import {FacebookZippyComponent} from './facebook-zippy.component'
import {BasicFormValidation} from './basic-form-validation.component'
import {ChangePassword} from './change-password';

import {Control, ControlGroup, FormBuilder} from 'angular2/common';

//import {Observable} from 'rxjs'
 import {Observable} from 'rxjs/Observable';        

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromArray';


@Component({
    selector: 'my-app',
    template: `
                <form [ngFormModel]="form"> 
                    <input type="text" ngControl="search" />
                </form>
            `,
    directives: [
                    CourseComponent, 
                    AuthorComponent, 
                    FavouriteStartComponent,
                    VoteComponent,
                    TwitterComponent,
                    FacebookZippyComponent,
                    BasicFormValidation,
                    ChangePassword
                ]
                  
})
export class AppComponent { 
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            search:[]
        });

        // let observable = Observable.fromArray([1,2,3])
        // observable.subscribe(x => console.log(x));

        // let search = this.form.find('search');
        // search.valueChanges
        // .debounceTime(400)
        // .map(str => (<string>str).replace(' ', '-'))
        // .subscribe( x => this.log(x));



        var startDates = [];
        var startDate = new Date();
        for(var day=-2; day <= 2; day++){
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }

        Observable
        .fromArray(startDates)
        //.map(date => console.log("Getting deals for date " + date))
        .map(date => {
            console.log("Getting deals for date " + date);
            return [1,2,3,4];
        })
        .subscribe(x => console.log(x))



    }

    log(x){
        console.log(x)
    }
}