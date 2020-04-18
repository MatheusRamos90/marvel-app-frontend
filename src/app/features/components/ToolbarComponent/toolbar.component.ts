import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

    constructor(private router: Router) {}

    @Input('titleBrandWeigth') titleBrandWeigth: string;
    @Input('titleBrandLight') titleBrandLight: string;
    @Input('nameParticipant') nameParticipant: string;

    onHome() {
        this.router.navigate([`/`]);
    }

}