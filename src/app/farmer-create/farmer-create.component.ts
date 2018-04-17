import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';

@Component({
  selector: 'app-farmer-create',
  templateUrl: './farmer-create.component.html',
  styleUrls: ['./farmer-create.component.scss']
})
export class FarmerCreateComponent implements OnInit {

  @Input() farmReceived: Farm;

  @Output() farmerEvent = new EventEmitter<Farmer>();

  createdFarmer: Farmer = new Farmer();

  //createdFarm: Farm = this.farm;

  // formulaire Fermier
    farmername: string;
    farmerage: number = 35;
    farmergender: string;
    farmerDisabled: boolean = true;
    

  constructor(){ }

  ngOnInit() {
    
  }

  saveFarmer() {

    this.createdFarmer.name = this.farmername;
    this.createdFarmer.age = this.farmerage;
    this.createdFarmer.gender = this.farmergender;
    this.createdFarmer.farmid = this.farmReceived.id;

    //on ajoute le fermeir a la ferme 
    this.farmReceived.farmer = this.createdFarmer;

    /* test */
    console.log("la ferme locale :", this.farmReceived);
    console.log("le fermier locale :", this.createdFarmer);

  }

  sendFarmer() {
    this.farmerEvent.emit(this.createdFarmer);
  }




}
