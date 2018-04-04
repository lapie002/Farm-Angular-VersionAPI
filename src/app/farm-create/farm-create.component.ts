import { Component, OnInit, Input  } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

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

  // ferme
  @Input() name: string;
  @Input() address: string;

  farmDisabled: boolean = true;
  farms = FARMS;

  // Fermier
  @Input() farmername: string;
  @Input() farmerage: number = 35;
  @Input() farmergender: string;
  farmerDisabled: boolean = true;


  constructor(private formBuilder: FormBuilder,private router: Router){ }

  ngOnInit(){

  }

  onValidateFarm(){

    const farmName = this.name;
    const farmAddress = this.address;

    const farmerName = this.farmername;
    const farmerAge = this.farmerage;
    let farmerGender = this.farmergender;

    let newFarmer = new Farmer(farmerName, farmerAge, farmerGender);

    let newFarm = new Farm(farmName, farmAddress, newFarmer);

    this.farms.push(newFarm);

  }

  toggleDisabledFarm() {

       this.farmDisabled = !this.farmDisabled;


   }

   toggleDisabledFarmer(){
     this.farmerDisabled = !this.farmerDisabled;

     console.log(this.disabled);
     console.log(this.name);
     console.log(this.address);
     console.log(this.farms);
   }




}
