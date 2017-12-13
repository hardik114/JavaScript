import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports: [ BrowserModule,FormsModule, HttpClientModule ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
 
})
export class AppModule { }


