import { Component, OnInit, Input  } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FarmService } from '../services/farm.service';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { FARMS } from '../mock-farms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.scss']
})
export class FarmCreateComponent implements OnInit {

  private farms: Array<Farm> = [];

  // formulaire ferme
  name: string;
  address: string;

  farmDisabled: boolean = true;


  // formulaire Fermier
  farmername: string;
  farmerage: number = 35;
  farmergender: string;
  farmerDisabled: boolean = true;

  //private formBuilder: FormBuilder,
  constructor(private farmService: FarmService, private router: Router){ }

  ngOnInit(){

  }

  public onValidateFarm(){

    const farmName = this.name;
    const farmAddress = this.address;

    const farmerName = this.farmername;
    const farmerAge = this.farmerage;
    let farmerGender = this.farmergender;

    let newFarmer = new Farmer(farmerName, farmerAge, farmerGender);

    let newFarm = new Farm(farmName, farmAddress);
    newFarm.farmer = newFarmer;

    //this.farms.push(newFarm);
    this.farmService.saveFarm(newFarm);

  }

  toggleDisabledFarm() {

       this.farmDisabled = !this.farmDisabled;

   }

   toggleDisabledFarmer(){
     this.farmerDisabled = !this.farmerDisabled;

     console.log(this.farmDisabled);
     console.log(this.name);
     console.log(this.address);

     //this.farms = this.farmService.emitFarms();
     //console.log(this.farms);
     this.farms = this.farmService.emitFarms();
     console.log(this.farms);

   }




}
