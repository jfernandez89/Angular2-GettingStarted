import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, Router } from '@angular/router'; //Needed to use Guard CanActivate

//The guard prevents some action previous / before navigate (See types)
@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        
        //Get and saves the id product from the url
        let id = +route.url[1].path;

        if(isNaN(id) || id < 1){

            //Usually navigates to an error page.
            alert('Invalid product Id');

            // Start a new navigation to redirect to list page
            this._router.navigate(['/products']);
            
            //Abort current navigation
            return false;
        }
        //Activate the route
        return true;
    }
}