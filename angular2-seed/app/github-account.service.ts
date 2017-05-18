import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import { Observable}from 'rxjs/Observable';
import {IUserProfile, IFollower} from './GitHubTypes';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubAccountService{
    private _url_userprofile: string = "https://api.github.com/users/octocat";
    private _url_userfollowers: string = "https://api.github.com/users/octocat/followers";

    constructor(private _http: Http){

    }
    
    getUserProfile(): Observable<IUserProfile> {
        return this._http.get(this._url_userprofile)
                    .map(response => <IUserProfile>response.json());
    }

    getUserFollowers(userName?: string) : Observable<IFollower>{
        return this._http.get(this._url_userfollowers)
                    .map(response => response.json());
    }
}