import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    //This decorator allows to read the information (starRating) from the parent component to the nested one
    @Input() rating: number;
    starWidth: number;
    //This decorator allows to give information from the nested component to its parent in this case a string
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    /**
     * This is a obligatory method if we implement OnChanges interface.
     */
    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5; 
    }

    /**
     * This function launch a message with the rating information, when we clicked on a star.
     */
    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); //We use ` ES5
    }
}