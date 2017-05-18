import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ArchiveComponent} from './archive.component';
import {ArchiveDetailComponent} from './archive-detail.component';

@RouteConfig(
    [
        { path: '/home', name:'Home', component:ArchiveComponent, useAsDefault:true},
        { path: '/archives/:year/:month', name:'Archives', component:ArchiveDetailComponent},
        { path: '/*other', name:'Other', redirectTo:['Home']}
    ])
@Component({
    selector: 'my-app',
    // templateUrl: '/app/app.component.html'
    template: `
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[ArchiveDetailComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}