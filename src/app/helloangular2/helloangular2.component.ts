/**
 * User interaction Angular2 component
 */
import {Component} from '@angular/core';

@Component({
    selector: 'wtc-hello-angular2',
    styles: [`
       .theme-color {
            color: green;
        }
    `],
    template: `<div class="theme-color">
                  <h1 (click)="onClick()">{{message}}</h1>
               </div>`
})
export class HelloAngular2 {
    
    /**
     * Shows the default message with application
     */
    message = "Click Me";
    
    /**
     * Changes the text message as soon as user click on Click me
     */
    onClick() {
        this.message = "Hello, WTC's Angular 2 Component";
    }

    /**
     * Accepts username and returns message
     * @param userName - The userName
     */
    showUser(userName: string) {
        this.message = "Hey, This is WTC's angular2 component"+userName;
    }

}
