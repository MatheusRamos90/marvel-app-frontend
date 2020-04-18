import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../../core/services/marvel.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

    public characters: any[];

    public cols = [
        {field: 'name', header: 'Personagem'},
        {field: 'description', header: 'Descrição'}
    ];

    constructor(private marvelService: MarvelService,  private router: Router ) {}

    ngOnInit() {
        this.getCharacters();
    }

    getCharacters() {
        this.marvelService.getCharacters().subscribe((data) => {
            this.characters = data;
        });
    }

    onDescribe(character: any) {
        this.router.navigate([`/description/${character.id}/${character.slug}`]);
    }

}