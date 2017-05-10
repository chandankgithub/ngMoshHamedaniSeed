import {Component}  from 'angular2/core'

@Component({
    selector:'authors',
    template: ` 
                <h2><b>Authors</b></h2>
                {{authorTitle}}
                <ul> 
                    <li *ngFor="#author of authors">
                        {{author}}
                    </li>
                </ul>
                `
})
export class AuthorComponent{
   private authorTitle: string ="Title for the authors page" ;
   private authors;
   constructor(){
       this.authors =["Author1","Author2","Author3"]
   }
}
