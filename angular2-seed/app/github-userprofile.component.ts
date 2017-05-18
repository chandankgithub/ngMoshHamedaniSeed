import {
            Component, 
            Input
        } from 'angular2/core';


@Component({
    selector:'github-userprofile',
    template: `
            <div>
                <div class="login">
                   @{{login}}
                </div>
                <div>
                    <img class="media-object img-circle avatar" src={{avatar_url}} />
                </div>
            </div>
    `,
    styles:[
        `
            .login{
                font-size: 30px;
                font-weight: bold;
            }
            .avatar {
                width:100;
                height:100;
                border-­‐radius:100%;
                padding-top:10px;
            }
        `
    ]
})
export class GitHubUserProfileComponent{
    @Input() login: string;
    @Input() avatar_url: string;
    
}