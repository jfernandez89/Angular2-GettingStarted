import { Component, OnInit } from '@angular/core'; //If we added the import previously, we can add another dependency typing a ,
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id, //Allows to put relative path in our components
    templateUrl: 'product-list-component.html', //The route must be relative to the index.
    styleUrls: ['product-list-component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];

    //Constructor
    constructor(private _productService: ProductService){
        //We use the private variable in this component to acces to the services functions.
    }

    //Methods

    /**
     * Change the current status of showImage
     */
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    /**
     * This is a obligatory method if we implement OnInit interface.
     * It start when the component is initialized
     */
    ngOnInit(): void{
        //Retrieves the list products from the service.
        this.products = this._productService.getProducts();
    }

    /**
     * This functions recives a message from a nested component (Star) when we click on a star
     * Emit a message and this function get the message by the binding property done in the template
     */
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List ' + message;
    }
}