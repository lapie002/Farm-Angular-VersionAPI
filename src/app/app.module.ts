import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmSearchComponent } from './farm-search/farm-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FarmCreateComponent,
    FarmSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
