import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

//Creates a Decorator to call the pipe in our template
@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform { //Necessary implement this interface to do a custom pipe
    
    //This is a obligatory method if we implement PipeTransform interface.
    transform(value: IProduct[], filterBy: string): IProduct[] {

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }   
}