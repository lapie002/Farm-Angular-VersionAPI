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
  selector: 'app-animals-create',
  templateUrl: './animals-create.component.html',
  styleUrls: ['./animals-create.component.scss']
})
export class AnimalsCreateComponent implements OnInit {

  @Input()  farmReceived: Farm;
  @Output() animalsEvent = new EventEmitter< Array<Animal>>();

  farms: Farm[] = [];
  animalsArray: Array<Animal>   = [];
  foodPackage: Array<Food> = [];
  
  // formulaire Animal
    animalname: string;
    selectedDescription: Animaldescription;

  // Tableau Animaldescription Pig Chicken Cow...
    animaltype: Animaldescription[];

    animalAdded: boolean = false;

  //tooggle disable button add animal 
    animalDisabled: boolean = true;

  // Tableau foodType Carrots Rocks Grain...
    selectedFood: Fooddescription;
    foodQte: number = 0;


    foodtype: Fooddescription[]; 

  constructor(private farmService: FarmService, private router: Router) {
    this.ngOnInit();
   }

  ngOnInit() {
    this.animaltype = [
      {id: 1 , description: 'Pig'},
      {id: 2 , description: 'Chicken'},
      {id: 3 , description: 'Cow'}
    ];

    this.foodtype = [
      {id: 1, description: 'Carrots', calories: 13},
      {id: 2, description: 'Rocks', calories: 3},
      {id: 3, description: 'Grain', calories: 40}
    ];

    this.animalsArray = [];
  }

  sendAnimals() {
    this.animalsEvent.emit(this.animalsArray);
  }



  onAddAnimalFoodPackage(){

    let newFood: Food =  new Food();

    let foodQuantity = this.foodQte;
    let foodSelection = this.selectedFood;

    newFood.quantity = foodQuantity;
    newFood.type = foodSelection;

    this.foodPackage.push(newFood);
  }


  onAddAnimal(){
    /** recuperation des param via le formulaire animal */
    let newAnimal: Animal =  new Animal();

    newAnimal.name = this.animalname; 
    newAnimal.calories = 0; 
    newAnimal.type = this.selectedDescription;
    newAnimal.foodpackage = this.foodPackage;

    this.animalsArray.push(newAnimal);

    //ensuite on vide le food package
    this.foodPackage = [];

    this.animalAdded = true;

    this.animalDisabled = !this.animalDisabled;

    // on remet les inputs de l animal a vide.
    this.animalname = '';
    
    this.foodQte = 0;
    
  }



  public onValidateFarm() {

    //this.farm.farmer = this.farmer;
    this.farmReceived.animalfarm = this.animalsArray;

    this.farmService.addFarm(this.farmReceived).subscribe(farm => {
      this.farms.push(farm);
    });

    console.log("la ferme : ", this.farmReceived);
    console.log("le fermier via ferme: ", this.farmReceived.farmer);
    //console.log("le fermier via fermier: ", this.farmer);


    this.animalsArray = [];

    // remetre les variables a true. 
    //this.farmDisabled = true;
    //this.farmerDisabled = true;
    this.animalDisabled = true;

    //remettre les variable des inputs a vide
    //this.name = '';
    //this.address = '';

    //this.farmername = '';
    //this.farmerage = 35;
    //this.farmergender = '';

    this.animalname = '';
    
    this.foodQte = 0;

    this.animalAdded = false;
    
    this.router.navigate(['/farm']);

  }

  toggleDisabledFood() {
    console.log(this.foodPackage);
    this.animalDisabled = false;
  }

  toggleDisabledAnimal() {
    this.animalDisabled = false;
   }

}
