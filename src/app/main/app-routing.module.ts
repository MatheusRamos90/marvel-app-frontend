import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from '../features/views/characters/characters.component';
import {DescriptionComponent} from '../features/views/characters/description/description.component';
import {PageNotFoundComponent} from '../features/views/errors/page-not-found.component';

const routes: Routes = [
    { path: '', component: CharactersComponent },
    { path: 'description/:id/:slug', component: DescriptionComponent },
    { path: '',   redirectTo: '', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
