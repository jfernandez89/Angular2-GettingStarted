import { Component, OnInit } from '@angular/core'; //If we added the import previously, we can add another dependency typing a ,
import { IProduct } from './product';

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
    listFilter: string = '';
    products: IProduct[] = [ //This array can contain any type
        {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    //Methods

    /**
     * Change the current status of showImage
     */
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    /**
     * This is a obligatory method if we implement OnInit interface.
     */
    ngOnInit(): void{
        console.log('In OnInit');
    }

    /**
     * This functions recives a message from a nested component (Star) when we click on a star
     * Emit a message and this function get the message by the binding property done in the template
     */
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List ' + message;
    }
}