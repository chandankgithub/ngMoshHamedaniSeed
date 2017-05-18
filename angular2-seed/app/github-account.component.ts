import { Component, OnInit } from 'angular2/core';
import { GitHubUserProfileComponent } from './github-userprofile.component';
import { GitHubFollowerComponent } from './github-follower.component';
import { IUserProfile, IFollower,IAccount } from './GitHubTypes';
import { GitHubAccountService } from './github-account.service';
import { HTTP_PROVIDERS } from 'angular2/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/forkJoin';


@Component({
    selector: 'github-account',
    template: `
        <div class="account-wrapper">
            <div *ngIf="isLoading" >
                    <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
                    <span class="loaderMsg">Getting user and their followers...</span>
                </div>
            <div *ngIf="!isLoading">
                <github-userprofile 
                    [login]="account.user_profile.login"
                    [avatar_url]="account.user_profile.avatar_url">
                    
                </github-userprofile>
                <div class="login">
                        Followers
                </div>
                <div 
                        *ngFor="#follower of account.followers"
                        class="follower-wrapper">
                    <github-follower 
                                [follower_name]="follower.follower_name"
                                [avatar_url]="follower.avatar_url"> 
                        </github-follower>
                </div>
            </div>
        </div>
    `,
    styles: [`
            .account-wrapper{
                padding: 25px;
            }
            .login{
                font-size: 30px;
                font-weight: bold;
            }
            .follower-wrapper{
                padding: 10px;
            }
            .loaderMsg{
                font-size: 20px;
            }
    `],
    directives: [GitHubUserProfileComponent, GitHubFollowerComponent],
    providers: [GitHubAccountService, HTTP_PROVIDERS]
})
export class GitHubAccountComponent implements OnInit {
    userProfile: any;
    account:IAccount;
    isLoading:boolean = true;

    constructor(private _service: GitHubAccountService) {
        this.userProfile = {
            login: '',
            avatar_url:'',
            followers:[]
        };
        
        this.account={
            user_profile:{
                avatar_url:'',
                login:''
            },
            followers:[]
            
        }
    }
    ngOnInit() {
        
        Observable.forkJoin(this._service.getUserProfile(), this._service.getUserFollowers())
            .delay(2000)
            .subscribe(data => {
                        this.isLoading=false;
                        this.bindUserAccount(data[0], data[1])
                        },
                        (err) => console.log(err),
                        () => console.log('Done'));

        // Observable.fromArray([1,2,3])
        // .delay(5000)
        // .subscribe(x => console.log(x));
    }

    bindUserAccount(data1, data2) {

         var up = <IUserProfile> {
                                    login: data1.login,
                                    avatar_url:data1.avatar_url
                                }
        this.account.user_profile=up;

        for(var i =0; i <data2.length; i++){
            var follower = <IFollower> { 
                                follower_name: data2[i].login,
                                avatar_url: data2[i].avatar_url
                            }; 
            
            this.account.followers.push(follower);
        }

    }
}