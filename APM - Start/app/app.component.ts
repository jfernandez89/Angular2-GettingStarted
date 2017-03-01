//Import Decorator component from tha angular core.
import { Component } from '@angular/core';

//Import the service file, must be imported in each file which use it
import { ProductService } from './products/product.service';

//We are using a Decorator, to add additional metadata to the class.
@Component({
    selector: 'pm-app', //This is the name that we use as a Directive in the Template
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>`,//When we want to use more than one html line we use this ` according with ES5
    providers: [ ProductService ] //If we add the service as a provider it is accesible for all subcomponents
})
//Export modifier allows to import the class.
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}