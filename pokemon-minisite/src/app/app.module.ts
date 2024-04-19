import { NgModule} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
    declarations:[AppComponent],
    imports:[HttpClientModule],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule {}