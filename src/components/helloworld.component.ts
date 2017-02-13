import {Component} from '@angular/core';

@Component({
    selector: 'wtc-hello-world',
    styles: [`
       .theme-color {
            color: blue;
        }
    `],
    template: `<div class="theme-color">
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class HelloWorld {

    message = "Click me";

    onClick() {
        this.message = "Hey, This is WTC's angular2 component";
    }

}
