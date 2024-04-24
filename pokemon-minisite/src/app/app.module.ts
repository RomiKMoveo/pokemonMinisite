import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPokemonByTypeAndNamePipe } from './pipes/filter-pokemon.pipe';





@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent, 
        PokemonListComponent,
        FilterPokemonByTypeAndNamePipe
      
    ],
    imports:[
        BrowserModule, 
        CommonModule,
        MatDialogModule,
        FormsModule,
        RouterModule
    ],
    providers:[
        HttpClientModule,  
    ],
    bootstrap:[AppComponent],

})
export class AppModule {}