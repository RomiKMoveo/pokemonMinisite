import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent, 
        PokemonListComponent
    ],
    imports:[
        BrowserModule, 
        CommonModule,
        MatDialogModule 
    ],
    providers:[
        HttpClientModule,  
    ],
    bootstrap:[AppComponent],

})
export class AppModule {}