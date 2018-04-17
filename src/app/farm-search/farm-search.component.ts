import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { FarmService } from '../services/farm.service';
import { Router } from '@angular/router';


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

  /** input provenant du formulaire */
  farmradiosearch: string;

  farmsearchbyaddress: string;
  farmsearchbyage: number;
  /*test by farmers name*/ 
  farmsearchbyfamername: string;

  farmSearched: boolean = false;

  public farm: Farm;
  public farmer: Farmer;
  numId: number;

  /***test avec une Observable */
  farmers$: Observable<Farmer[]>;
  private searchFarmer = new Subject<Farmer[]>();

  constructor(private farmService: FarmService, private router: Router){}

  ngOnInit() {
  }

  public toggleDisplayFarmByAddress() {
    this.farmSearched = true;
    this.farmService.searchFarmByAddress(this.farmsearchbyaddress).subscribe(farm => this.farm = farm[0]);
  }
/*
  public toggleDisplayFarmByAge() {
    this.farmSearched = true;
    this.farmService.searchFarmByFarmerAge(this.farmsearchbyage).subscribe( farm => this.farm = farm[0]);
  }
*/

  public getFarmerResponse(){

    //test : renvoie bien un Objet Farmer 
    //this.farmService.searchFarmByFarmerAge(this.farmsearchbyage).subscribe(res => console.log(res[0]));
    
    this.farmService.searchFarmByFarmerAge(this.farmsearchbyage).subscribe(res => this.farmer = res[0]);
    

    console.log("methode getFramer");
    console.log(this.farmer.farmid);

  }

  public toggleDisplayFarmByAge(){

  
    //this.getFarmerResponse();
    this.farmers$ = this.searchFarmer.pipe(

        // wait 300ms after each keystroke before considering the term
        debounceTime(100),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        switchMap((farmers: Farmer[]) => this.farmService.searchFarmByFarmerAge(this.farmsearchbyage)),

      );

      console.log('what you get from the Observable :');
      console.log(this.farmers$.subscribe());
      


    this.numId = this.farmer.farmid;

    this.farmService.getFarm(this.numId).subscribe(farm => this.farm = farm);

    console.log('Farm Objet:');
    console.log(this.farm);

    this.farmSearched = true;
  }

  public toggleDisplayFarmByFarmerName(){
    this.farmSearched = true;
    this.farmService.searchFarmByFarmerName(this.farmsearchbyfamername).subscribe( farm => this.farm = farm[0]);
  }

}
