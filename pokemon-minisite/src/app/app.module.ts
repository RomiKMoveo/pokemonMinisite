import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
//import {RouterModule, RouterOutlet} from '@angular/router';


import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPokemonByTypeAndNamePipe } from './pipes/filter-pokemon.pipe';
import { MyMapComponent } from './components/my-map/my-map.component';
import { MatFormFieldModule } from '@angular/material/form-field';





@NgModule({
    declarations:[
        AppComponent, 
        PokemonListComponent,
        FilterPokemonByTypeAndNamePipe,
        HeaderComponent,
        MyMapComponent
    ],
    imports:[
        BrowserModule, 
        CommonModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
    ],
    providers:[
        HttpClientModule,  
    ],
    bootstrap:[AppComponent],

})
export class AppModule {}