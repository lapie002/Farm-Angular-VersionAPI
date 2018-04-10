import { Component, OnInit } from '@angular/core';
import { FarmsearchService } from '../services/farmsearch.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

//import { Subscription } from 'rxjs/Subscription';



import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animaldescription } from '../models/Animaldescription.model';
import { Animal } from '../models/Animal.model';
import { Fooddescription } from '../models/Fooddescription.model';
import { Food } from '../models/Food.model';




@Component({
  selector: 'app-farm-search',
  templateUrl: './farm-search.component.html',
  styleUrls: ['./farm-search.component.scss']
})
export class FarmSearchComponent implements OnInit {

  farmradiosearch: string;

  farmsearchbyaddress: string;
  farmsearchbyage: number;

  farm: Farm;
  farmer: Farmer;

  farmSearched: boolean = false;
  
  

  constructor(private farmsearchService: FarmsearchService, private router: Router){
    this.farm = new Farm('test','35');
  }

  ngOnInit() {
  }

  public toggleDisplayFarmByAddress(){

    this.farm = new Farm('','');
    this.farmer = new Farmer('',0,'');
    this.farm.farmer = this.farmer; 

    let addressOfFarm = this.farmsearchbyaddress.toString();

    this.farmsearchService.getFarmByFarmerAddress(addressOfFarm).then(
      (farm: Farm)=>{
        this.farm = farm;
        this.farmSearched = true;
      }
    );

  }



  public toggleDisplayFarmByAge(){

    this.farm = new Farm('','');
    this.farmer = new Farmer('', '', '');
    this.farm.farmer = this.farmer; 

    let farmerAge = this.farmsearchbyage;
    
    this.farmsearchService.getFarmByFarmerAge(farmerAge).then(
      (farm: Farm)=>{
        this.farm = farm;
        this.farmSearched = true;
      }
    );
  }
  


}
