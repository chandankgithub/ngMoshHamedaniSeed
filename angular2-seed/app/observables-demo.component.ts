import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder} from 'angular2/common';
//import {Observable} from 'rxjs'
 import {Observable} from 'rxjs/Observable';        

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap'; /**flatMap is an alias of mergeMap */
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/repeat';

@Component({
    selector: 'observable-demo',
    template: `
                <form [ngFormModel]="form"> 
                    <input type="text" ngControl="search" />
                </form>
            `,
})
export class ObservablesDemoComponent{

    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            search:[]
        });
    
    /**Exercise  subscribe */
        // let observable = Observable.fromArray([1,2,3,4])
        // observable.subscribe(x => console.log(x));

    /**Excercise to find the search input and type values to search. the input will wait for 400ms and if the value 
     * contains space(' ') then will be replaced by '-'. Finally, show the values in console log
     */
        let search = this.form.find('search');
        search.valueChanges
        .debounceTime(400)
        .map(str => (<string>str).replace(' ', '-'))
        .subscribe( x => this.log(x));

    
    /**Excercise to get deals with specific dates. If we do not return anything from map then console will log undefined. 
     * Thus returned the array [1,2,3,4]. 
     * */
        // var startDates = [];
        // var startDate = new Date();
        // for(var day=-2; day <= 2; day++){
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate() + day
        //     );
        //     startDates.push(date);
        // }

        // Observable
        // .fromArray(startDates)
        // //.map(date => console.log("Getting deals for date " + date))
        // .map(date => {
        //     console.log("Getting deals for date " + date);
        //     return [1,2,3,4];
        // })
        // .subscribe(x => console.log(x))

    /**Excercise to see the output if Observable is set to empty. Nothing will be displayed */
        // var observable = Observable.empty();
        // observable.subscribe( x => console.log("xx..." + x));

    
    /**Excercise to see the output if Observable has given the range starting 6,7,8,9,10 */
        // var observable = Observable.range(6,5);
        // observable.subscribe( x => this.log(x));

    /**Excercise to show each element from array */
        // var observable = Observable.fromArray([1,2,3,4,5]);
        // observable.subscribe(x => this.log(x));

    /**Excercise to show the output. The console will log each element in [1], each element of [2,3,4,5,6] then each element in [1,2] */
        // var observable = Observable.of([1],[2,3,4,5,6],[1,2]);
        // observable.subscribe(x => this.log(x));

    /** Excercise to auto execute the code after each 100ms */
        // var observable = Observable.interval(100);
        // observable.subscribe(x => this.log(x))

    /** Excercise to show the whole array every time after 1000ms */
        // var observable = Observable.interval(1000)
        // .map(x => {
        //     this.log("Getting latest tweets..")
        //     return [
        //         "Dot net is rocking",
        //         "Last night I was doing .Net Core",
        //         "The most unstable world is the IT world"
        //     ]
        // })
        // .subscribe(tweet => this.log(tweet));

    /** Excercise to show "Getting information from server..." then each element of [1,2,3] every 1000ms */
        // var observable = Observable.interval(1000)
        // .flatMap(x => {
        //     this.log("Getting information from server...");
        //     return Observable.of([1,2,3])
        // })
        // .subscribe(x => this.log(x))

    
    /**Excercise to join the parallel execution of the streams, ie. userStream + tweetStream */
        // var userStream = Observable.of({
        //     userId: 1,
        //     userName:'Chandan'
        // }).delay(1500);

        // var tweetStream = Observable.of({
        //     tweetId:20,
        //     tweet:'My name is CK'
        // }).delay(2000);

        // // Observable.interval(1000) /**for periodic execution */
        // // .flatMap(x => {
        // //     return Observable.forkJoin(userStream, tweetStream)
        // // })
        // // .subscribe(x => this.log(x))
        // /**for one time execution */
        // Observable.forkJoin(userStream, tweetStream)
        // .map(joined => {
        //     return {
        //         user: joined[0].userName,
        //         tweet:joined[1].tweet
        //     }
        // })
        // // .subscribe(x => this.log(x.user + '---' + x.tweet));
        // .subscribe(x => this.log(x));



    /** Excercise to handle error as a 2nd parameter in subscribe*/        
        // var observable = Observable.throw( new Error("Something went wrong !"));
        // observable.subscribe(x => this.log(x),
        // error => this.log(error))
        
    
    /** Excercise to retry the failure, if any. ALTHOUGH retry didn't work in this code snippent. Removing retry is working. */
        // var counter = 0;
        // var ajaxCall = Observable.of('url')
        //                 .flatMap(() => {
                            
        //                     if(++counter < 2){
                                
        //                         return Observable.throw(new Error("Request Failed !"))
        //                     }
        //                     return Observable.of([
        //                         {
        //                             userId: 1,
        //                             userName: "Chandan Kumar"
        //                         },
        //                         {
        //                             userId: 2,
        //                             userName: "Ryan Noth"
        //                         }
        //                     ])
        //                 })
        // ajaxCall
        //     .retry(3)
        //     .subscribe(x => this.log(x),
        //                     (error) => console.error(error))


    /**Excercise to catch the exception and use it if you need default implementation */
        // var userStream = Observable.throw(new Error("Request Failed !"));
        // userStream
        // .catch( err => return Observable.of([1,2,3]))
        // .subscribe(x => this.log(x))


    /** Excercise to handle timeout error */
        // var remoteDataStream = Observable.of([2,3,4])
        //                     .delay(6000);
        
        // remoteDataStream
        //     .timeout(2000)
        //     .subscribe(x => this.log(x),
        //                 (error) => this.log(error));


    /**Excercise to show the completion of the request as a 3rd parameter in subscribe method */
        // Observable.throw(new Error("Request Failed !"))
        // .subscribe(x => this.log(x), 
        //         (err) => this.log(err),
        //         () => this.log('Request Completed !'))

    /**Excercise to show the completion of the request as a 3rd parameter in subscribe method */
        // Observable.fromArray([1,2,3])
        // .subscribe(
        //     x => this.log(x),
        //     err => this.log(err),
        //     () => this.log('Completed')
        // );

    /**Excercise to show the completion of the request as a 3rd parameter in subscribe method */
        // Observable.of([
        //     {
        //         userId: 1,
        //         userName: "Chandan"
        //     },
        //     {
        //         userId: 2,
        //         userName: "Kumar"
        //     }
        // ])
        // .subscribe(
        //     x => this.log(x),
        //     (err) => this.log(err),
        //     () => this. log('Request Completed !')
        // )
    }

    log(x){
        console.log(x)
    }
}