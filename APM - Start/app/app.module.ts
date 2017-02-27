import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list-component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    ProductListComponent ], // Adds the ProductListComponent, the name must be equal to the name that we put in the component ts file. Replacing snake-case to camel-case */ 
  bootstrap: [ AppComponent ] //Loads the AppComponent
})
export class AppModule { }
