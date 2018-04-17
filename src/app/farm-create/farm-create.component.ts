import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FarmService } from '../services/farm.service';
import { Subscription } from 'rxjs/Subscription';

import {SelectItem} from 'primeng/api';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animaldescription } from '../models/Animaldescription.model';
import { Animal } from '../models/Animal.model';
import { Fooddescription } from '../models/Fooddescription.model';
import { Food } from '../models/Food.model';


import { Router } from '@angular/router';


@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.scss']
})
export class FarmCreateComponent implements OnInit {

  /* new input */
  createdFarm: Farm = new Farm();
  
  id: number;
  name: string;
  address: string;

  farmDisabled: boolean = true;
  farmerDisabled: boolean = true; 
  animalDisabled: boolean = true;

  @Output() farmEvent = new EventEmitter<Farm>();
  
  constructor(private farmService: FarmService, private router: Router){
  }

  ngOnInit(){
  }

  sendFarm() {
    this.farmEvent.emit(this.createdFarm);
  }

  public onValidateFarmForm() {
    this.createdFarm.name = this.name;
    this.createdFarm.address = this.address;
  }

  toggleDisabledFarm() {
       this.farmDisabled = !this.farmDisabled;
   }

   toggleDisabledFarmer() {
      this.farmerDisabled = !this.farmerDisabled;
      this.animalDisabled = true;
   }

   toggleDisabledAnimal() {
    this.animalDisabled = false;
   }


}
