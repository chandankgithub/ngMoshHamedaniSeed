System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent() {
                    this.authorTitle = "Title for the authors page";
                    this.authors = ["Author1", "Author2", "Author3"];
                }
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: " \n                <h2><b>Authors</b></h2>\n                {{authorTitle}}\n                <ul> \n                    <li *ngFor=\"#author of authors\">\n                        {{author}}\n                    </li>\n                </ul>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=author.component.js.map