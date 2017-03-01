//Import Decorator component from tha angular core.
import { Component } from '@angular/core';

//Import the service file, must be imported in each file which use it
import { ProductService } from './products/product.service';

//We are using a Decorator, to add additional metadata to the class.
@Component({
    selector: 'pm-app', //This is the name that we use as a Directive in the Template
    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        {{pageTitle}}
                    </a>
                    <ul class="nav navbar-nav">
                        <li>
                            <!-- Use the directive routerLink, recieves an array with a string -->
                            <a [routerLink]="['/welcome']">Home</a>
                        </li>
                        <li>
                            <a [routerLink]="['/products']">Product List</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <!-- Indicates to the routerLink where to put our route -->
                <router-outlet></router-outlet>
            </div>
        </div>
    `,//When we want to use more than one html line we use this ` according with ES5
    providers: [ ProductService ] //If we add the service as a provider it is accesible for all subcomponents
})
//Export modifier allows to import the class.
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}