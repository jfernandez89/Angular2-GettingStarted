import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list-component.html' //The route must be relative to the index
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
}