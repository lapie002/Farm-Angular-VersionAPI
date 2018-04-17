import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FarmService } from '../services/farm.service';
import { Subscription } from 'rxjs/Subscription';
import { FarmCreateComponent } from '../farm-create/farm-create.component';
import { FarmerCreateComponent } from '../farmer-create/farmer-create.component';

import {SelectItem} from 'primeng/api';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animaldescription } from '../models/Animaldescription.model';
import { Animal } from '../models/Animal.model';
import { Fooddescription } from '../models/Fooddescription.model';
import { Food } from '../models/Food.model';


import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.scss']
})


export class FarmFormComponent implements OnInit {

  farm: Farm;
  farmer: Farmer;
  animalsArray: Array<Animal>;

  farms: Farm[] = [];

  constructor(private farmService: FarmService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit(){
    this.farmService.getFarms().subscribe(farms => this.farms = farms);
  }

  

  receiveFarm(farm: Farm) {
    this.farm = farm;
    this.farm.id = this.farms.length;
    console.log("la ferme output : ",this.farm)
  }

  receiveFarmer(farmer: Farmer) {
    this.farmer = farmer;
    console.log("le fermier output : ",this.farmer)
  }

  receiveAnimalFarm(animalsArray: Array<Animal>){
    this.animalsArray = animalsArray;
    console.log("les animaux de la ferme output : ", this.animalsArray)
  }

  onValidateFarm(){

        this.farmer.farmid = this.farm.id;

        this.farm.farmer = this.farmer;
        this.farm.animalfarm = this.animalsArray;

        this.farmService.addFarm(this.farm).subscribe(farm => {
          this.farms.push(farm);
        });
    
        this.animalsArray = [];
    
        this.router.navigate(['/farm','search']);
  }
  
}
