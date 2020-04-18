import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CharactersModule} from '../features/views/characters/characters.module';
import {FeaturesModule} from '../features/views/features.module';
import {ComponentsModule} from '../features/components/components.module';
import {DataViewModule} from 'primeng/dataview';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'primeng/shared';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {CharactersComponent} from '../features/views/characters/characters.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CharactersModule,
    ComponentsModule,
    FeaturesModule,
    DataViewModule,
    CommonModule,
    SharedModule,
    TableModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
