"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let HelloAngular2 = class HelloAngular2 {
    constructor() {
        this.message = "Click Me";
    }
    onClick() {
        this.message = "Hello, WTC's Angular 2 Component";
    }
    showUser(userName) {
        this.message = "Hey, This is WTC's angular2 component" + userName;
    }
};
HelloAngular2 = __decorate([
    core_1.Component({
        selector: 'wtc-hello-angular2',
        styles: [`
       .theme-color {
            color: green;
        }
    `],
        template: `<div class="theme-color">
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
    }), 
    __metadata('design:paramtypes', [])
], HelloAngular2);
exports.HelloAngular2 = HelloAngular2;
//# sourceMappingURL=helloangular2.component.js.map