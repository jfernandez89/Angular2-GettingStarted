import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; //Import files

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'; //Import files
import { ProductListComponent } from './products/product-list-component';
import { ProductDetailGuard } from './products/product-guard-service';
import { ProductDetailComponent } from './products/product-detail.component'; //Import files
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  providers: [{
      provide: LOCALE_ID,
      useValue: 'es-ES' // 'de-DE' for Germany, 'fr-FR' for France ...
    },
    ProductDetailGuard //Add the guard as a provider
  ],
  imports: [ 
    BrowserModule,
    FormsModule, //We add this Module to use the directive ngModule
    HttpModule, //Needed to use the Http Service
    RouterModule.forRoot([ //Configure our navigation, most specific rout must stay in first place
      {path: 'products', component: ProductListComponent },
      {
        path: 'product/:id', 
        canActivate:[ProductDetailGuard], //Indicates which guard is asign to this route
        component: ProductDetailComponent 
      },
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' }, //Default route
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }, //Wildcard route, usually 404
    ]) 
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent, //Added as a new component
    ProductListComponent, 
    ProductDetailComponent, //Added as a new component
    ProductFilterPipe,
    StarComponent], // Adds the ProductListComponent, the name must be equal to the name that we put in the component ts file. Replacing snake-case to camel-case */ 
  bootstrap: [ AppComponent ] //Loads the AppComponent
})
export class AppModule { }
