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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.voteCount = 10;
                    this.myVote = 5;
                    this.isMenuUpDisabled = false;
                    this.isMenuDownDisabled = false;
                    this.onVote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onPositiveVoting = function () {
                    this.isMenuDownDisabled = false;
                    var currentVote = this.voteCount + this.myVote;
                    //when voting is possible
                    var upperThreshold = this.voteCount + 1;
                    if (currentVote < upperThreshold) {
                        //voting is possible
                        this.myVote += 1;
                    }
                    else if (currentVote == upperThreshold) {
                        //voting is not possible
                        this.isMenuUpDisabled = true;
                    }
                    this.onVote.emit(this.voteCount);
                };
                VoteComponent.prototype.onNegativeVoting = function () {
                    this.isMenuUpDisabled = false;
                    //voting is possible or not?
                    var lowerThreshold = this.voteCount - 1;
                    var currentVote = this.voteCount + this.myVote;
                    if (currentVote > lowerThreshold) {
                        this.myVote -= 1;
                    }
                    else if (currentVote == lowerThreshold) {
                        //voting is not possible
                        this.isMenuDownDisabled = true;
                    }
                    this.onVote.emit(this.voteCount);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "onVote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n               <div class=\"voterUI\">\n                    <i class=\"glyphicon glyphicon-menu-up\"\n                        (click)=\"onPositiveVoting()\"\n                        [class.menuup_orange]=\"(voteCount + myVote)== (voteCount + 1)\"\n                        [class.disabled]=\"isMenuUpDisabled\"\n                        >\n                    </i>\n\n                    <span>{{voteCount + myVote}}</span>\n\n                    <i class=\"glyphicon glyphicon-menu-down\"\n                        (click)=\"onNegativeVoting()\"\n                        [class.menudown_orange]=\"(voteCount + myVote) == (voteCount -1)\"\n                        [class.disabled]=\"isMenuDownDisabled\" >\n                    </i>\n                </div>\n    ",
                        styles: ["\n            .voterUI{\n                width: 20px;\n                font-size: 35px;\n                margin-left: 30px;\n                margin-top: 30px;\n            }\n            \n            .menuup_orange{\n                color:orange\n            }\n            .menudown_orange{\n                color:orange\n            }\n            .disabled{\n                pointer-events: none;\n            }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map