import {NgModule} from '@angular/core';
import {ToolbarComponent} from './ToolbarComponent/toolbar.component';
import {FooterComponent} from './FooterComponent/footer.component';

@NgModule({
    imports: [],
    exports: [
        ToolbarComponent,
        FooterComponent
    ],
    declarations: [
        ToolbarComponent,
        FooterComponent
    ]
})
export class ComponentsModule { }