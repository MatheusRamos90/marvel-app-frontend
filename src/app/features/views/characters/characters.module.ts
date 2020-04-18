import {NgModule} from '@angular/core';
import {DescriptionComponent} from './description/description.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        DescriptionComponent
    ],
    declarations: [
        DescriptionComponent
    ]
})
export class CharactersModule { }