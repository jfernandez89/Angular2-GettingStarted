//Import Decorator component from tha angular core.
import { Component } from '@angular/core';

//We are using a Decorator, to add additional metadata to the class.
@Component({
    selector: 'pm-app', //This is the name that we use as a Directive in the Template
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>` //When we want to use more than one html line we use this ` according with ES5
})
//Export modifier allows to import the class.
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}