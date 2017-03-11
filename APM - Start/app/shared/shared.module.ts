//Needed to declare the custom components
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Imports
import { StarComponent } from '../shared/star.component';

@NgModule({
    declarations: [StarComponent],
    imports: [CommonModule], 
    exports: [ //this modules && component there will be visible for another modules
       CommonModule,
       FormsModule,
       StarComponent
    ]
})
export class SharedModule {

}