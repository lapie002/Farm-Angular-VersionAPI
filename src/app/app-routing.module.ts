import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* les components du projet */

import { FarmFormComponent } from './farm-form/farm-form.component';
import { FarmCreateComponent } from './farm-create/farm-create.component';
import { FarmSearchComponent } from './farm-search/farm-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/farm', pathMatch: 'full' },
  { path: 'farm', component: FarmFormComponent },
  { path: 'farm/search', component: FarmSearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
