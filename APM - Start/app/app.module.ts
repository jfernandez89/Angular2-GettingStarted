import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  providers: [{
      provide: LOCALE_ID,
      useValue: 'es-ES' // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ],
  imports: [ 
    BrowserModule,
    FormsModule, //We add this Module to use the directive ngModule
    HttpModule //Needed to use the Http Service
  ],
  declarations: [ 
    AppComponent,
    ProductListComponent, 
    ProductFilterPipe,
    StarComponent], // Adds the ProductListComponent, the name must be equal to the name that we put in the component ts file. Replacing snake-case to camel-case */ 
  bootstrap: [ AppComponent ] //Loads the AppComponent
})
export class AppModule { }
