import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    //Selector property is only necesary if the it is a nested component.
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {

    pageTitle: string = 'Product Detail';
    product: IProduct;
    
}
