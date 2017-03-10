//Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; 

//Custom modules
import { ProductModule } from './products/product.module';

//Components
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'; 

@NgModule({
  imports:[ 
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([ 
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' }, 
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }, 
    ]),
    ProductModule //Add the custom module 
  ],
  declarations: 
  [ 
    AppComponent,
    WelcomeComponent 
  ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { }
