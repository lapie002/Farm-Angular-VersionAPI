import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { RouterModule, Routes } from '@angular/router';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SpinnerModule} from 'primeng/spinner';
import {RadioButtonModule} from 'primeng/radiobutton';

import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeTableModule} from 'primeng/treetable';
import {TableModule} from 'primeng/table';


/* les components du projet */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmSearchComponent } from './farm-search/farm-search.component';
import { FarmFormComponent } from './farm-form/farm-form.component';

/* les services du projet */
import { FarmService } from './services/farm.service';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { FarmerCreateComponent } from './farmer-create/farmer-create.component';
import { AnimalsCreateComponent } from './animals-create/animals-create.component';
import { AnimalsDisplayComponent } from './animals-display/animals-display.component';
// import { FarmsearchService } from './services/farmsearch.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FarmCreateComponent,
    FarmSearchComponent,
    MessagesComponent,
    FarmerCreateComponent,
    AnimalsCreateComponent,
    AnimalsDisplayComponent,
    FarmFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    InputTextModule,
    ButtonModule,
    SpinnerModule,
    RadioButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    TreeTableModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [
    FarmService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
