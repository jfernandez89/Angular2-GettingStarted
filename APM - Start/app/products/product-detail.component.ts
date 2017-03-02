import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

//Needed to navigate with two params && Needed to navigates back
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    //Selector property is only necesary if the it is a nested component.
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute, private _router: Router){
        //Needed to use the ActivatedRoute.
    }
    
    ngOnInit(): void {
        //Declares a variable which save information inside two objects
        let id = +this._route.snapshot.params['id']; //Read from the ActivatedRoute the name that we put in RouterModule.forRoot 
        this.pageTitle += `: ${id}`; //Set the value of the object into a String
    }

    /**
     * This method use the Router to navigates back to the product list.
     */
    onBack(): void {
        this._router.navigate(['/products']);
    }
}
