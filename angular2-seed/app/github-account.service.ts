import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import { Observable}from 'rxjs/Observable';
import {IUserProfile, IFollower} from './GitHubTypes';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubAccountService{
    private base_url: string = "https://api.github.com/users/";
    constructor(private _http: Http){

    }
    
    getUserProfile(username:string): Observable<IUserProfile> {
        return this._http.get(this.base_url + username)
                    .map(response => <IUserProfile>response.json());
    }

    getUserFollowers(username: string) : Observable<IFollower[]>{
        return this._http.get(this.base_url + username + "/followers")
                    .map(response => response.json());
    }
}