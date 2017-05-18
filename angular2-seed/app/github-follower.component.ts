import {Component, Input, OnInit} from 'angular2/core';

@Component({
    selector: 'github-follower',
    template:`
            <div>
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="media-object img-circle" style='float:left;width:100px;height:100px; margin-right:10px;' src={{avatar_url}} />
                        {{follower_name}}
                    </div>
                 </div>
            </div>
    `,
    styles: [`
            
            .avatar {
                width:100;
                height:100;
                border-­‐radius:100%;
                padding-top:10px;
            }

            .follower-name{
                    font-size: 20px;
            }
    `]
})
export class GitHubFollowerComponent implements OnInit{

    @Input() follower_name: string;
    @Input() avatar_url: string;

    ngOnInit(){

    }
}