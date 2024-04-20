import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';



@NgModule({
    declarations:[
        AppComponent, 
        PokemonListComponent
    ],
    imports:[
        BrowserModule, 
        CommonModule, 
        HttpClientModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule {}