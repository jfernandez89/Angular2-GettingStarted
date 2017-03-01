//Need to use interface
import { IProduct } from './product';

//Needed for simple a Service
import { Injectable } from '@angular/core'

//Needed for http request
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //special sintax

//Needed for handling exceptions
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

//This decorator is optional in a service, unless you have a dependency.
@Injectable() 
export class ProductService {

    //Attibutes
    private _productUrl = 'api/products/products.json';

    //Constructor
    constructor (private _http: Http){
        //We must work with the private _http parameter
    }

    //### Methods ###

    /**
     * This method return a list of products ( Observable<IProduct[]> )
     */
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json()) //Convert the response to IProduct[]
            .do(data => console.log('All: ' + JSON.stringify(data))) //Show in console all data
            .catch(this.handleError); //Call the function.
    }

    /***
     * This function handle the posible errors
     */
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}