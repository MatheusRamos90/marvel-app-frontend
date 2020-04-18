import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {nonNull} from '../../../../utils/utils';
import {MarvelService} from '../../../../core/services/marvel.service';
import {Character} from '../../../../core/entities/Character';

@Component({
    templateUrl: './description.component.html'
})
export class DescriptionComponent implements OnInit {

    public characters: Character;

    constructor(
        private marvelService: MarvelService,
        private route: ActivatedRoute,
        private router: Router  ) {}

    ngOnInit() {
        const idCharacter = this.route.snapshot.paramMap.get('id');
        const slugCharacter = this.route.snapshot.paramMap.get('slug');

        if (nonNull(idCharacter, slugCharacter)) {
            this.loadDescribeCharacter(parseInt(idCharacter), slugCharacter);
        } else {
            this.router.navigate([`/`]);
        }
    }

    private loadDescribeCharacter(id: number, slug: string) {
        this.marvelService.getMedias(id, slug).subscribe((data) => {
            this.characters = data;

            if (this.characters == null) {
                this.router.navigate([`/`]);
            }
        });
    }

    onBack() {
        this.router.navigate([`/`]);
    }

}