//Needed to declare the custom components
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

//Imports
import { ProductListComponent } from './product-list-component';
import { ProductDetailComponent } from './product-detail.component'; 
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard-service';
import { StarComponent } from '../shared/star.component';
import { LOCALE_ID } from '@angular/core';


@NgModule({
    declarations: 
    [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent 
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([ //Despite of use forRoot we use forChild if we are not in the main module
            {path: 'products', component: ProductListComponent },
            {
                path: 'product/:id', 
                canActivate:[ProductDetailGuard], //Indicates which guard is asign to this route
                component: ProductDetailComponent 
            }
            ]),
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-ES'
        },
            ProductDetailGuard
    ]   
})

export class ProductModule {

}