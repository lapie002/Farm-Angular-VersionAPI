import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SpinnerModule} from 'primeng/spinner';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';


/* les components du projet */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmSearchComponent } from './farm-search/farm-search.component';

/* les services du projet */
import { FarmService } from './services/farm.service';

const appRoutes: Routes = [
  { path: 'farm', component: FarmCreateComponent },
  { path: 'farm/search', component: FarmSearchComponent },
  { path: '', component: FarmCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FarmCreateComponent,
    FarmSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    SpinnerModule,
    DropdownModule,
    RadioButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FarmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
