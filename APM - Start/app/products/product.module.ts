//Needed to declare the custom components
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

//Imports
import { ProductListComponent } from './product-list-component';
import { ProductDetailComponent } from './product-detail.component'; 
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard-service';
import { LOCALE_ID } from '@angular/core';

//Custom Module
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: 
    [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    imports: [
        SharedModule,
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