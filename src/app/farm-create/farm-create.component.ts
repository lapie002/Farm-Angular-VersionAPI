import { Component, OnInit, Input  } from '@angular/core';
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
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.scss']
})
export class FarmCreateComponent implements OnInit {

  farms: Farm[] = [];
  farmsSubscription: Subscription;

  animals: Array<Animal>   = [];
  foodPackage: Array<Food> = [];

  // formulaire ferme
    name: string;
    address: string;
    farmDisabled: boolean = true;

  // formulaire Fermier
    farmername: string;
    farmerage: number = 35;
    farmergender: string;
    farmerDisabled: boolean = true;

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

  


  constructor(private farmService: FarmService, private router: Router){

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

    //this.animals = this.farmService.emitAnimaux();
    this.animals = [];

   }

  ngOnInit(){

  }

  public onAddAnimalFoodPackage(){
     
    let newFood: Food =  new Food();

    let foodQuantity = this.foodQte;
    let foodSelection = this.selectedFood;

    newFood.quantity = foodQuantity;
    newFood.type = foodSelection;

    this.foodPackage.push(newFood);

  }

  public onAddAnimal(){

    /** recuperation des param via le formulaire animal */
    let newAnimal: Animal =  new Animal();

    newAnimal.name = this.animalname; 
    newAnimal.calories = 0; 
    newAnimal.type = this.selectedDescription;
    newAnimal.foodpackage = this.foodPackage;

    this.farmService.addAnimal(newAnimal);
    this.animals = this.farmService.emitAnimaux();

    //ensuite on vide le food package
    this.foodPackage = [];

    this.animalAdded = true;
    this.animalDisabled = !this.animalDisabled;
    

  }

  public onValidateFarm(){

    /**recuperation des param via le formulaire fermier */
    let farmName = this.name;
    let farmAddress = this.address;

    let farmerName = this.farmername;
    let farmerAge = this.farmerage;
    let farmerGender = this.farmergender;

    let newFarmer = new Farmer(farmerName, farmerAge, farmerGender);

    let newFarm = new Farm(farmName, farmAddress);

    newFarm.farmer = newFarmer;

    newFarm.animalfarm = this.animals;

    this.farmService.createNewFarm(newFarm);

    /* utile pour les test : console.log des element des tableaux animaux et fermes.
    this.farmsSubscription = this.farmService.farmsSubject.subscribe(
      (farms: Farm[])=> { this.farms = farms;}
    );

    this.farmService.getFarms();
    this.farmService.emitFarms();
    */
    //this.onEmptyAnimals();
    //this.onEmptyFarms();

    this.animals = [];

    // remetre les variables a true. 
    this.farmDisabled = true;
    this.farmerDisabled = true;
    this.animalDisabled = true;

    //remettre les variable des inputs a vide
    this.name = '';
    this.address = '';

    this.farmername = '';
    this.farmerage = 35;
    this.farmergender = '';

    this.animalname = '';
    //this.selectedDescription.description = "select animal";

    //this.selectedFood.description = "type";
    this.foodQte = 0;

    this.animalAdded = false;
    

    this.router.navigate(['/farm']);


  }

  onEmptyFarms(){
    this.farms = [];
  }

  onEmptyAnimals(){
    this.animals = [];
  }

  toggleDisabledFarm() {

       this.farmDisabled = !this.farmDisabled;

   }

   toggleDisabledFarmer(){

    this.farmerDisabled = !this.farmerDisabled;
    this.animalDisabled = true;

   }

   toggleDisabledAnimal() {

    this.animalDisabled = true;

   }

   toggleDisabledFood(){

     console.log(this.foodPackage);
     this.animalDisabled = false;
   }

   methodeTestToDisplayResult(){

      /**test */
      console.log("La ferme");
      console.log(this.farms);
      console.log("Les animaux");
      console.log(this.animals);

   }

   methodeTestDataMockPersist(){

    //this.farms = this.farmService.emitFarms();
    console.log(this.farms);
    console.log(this.animals);

   }



}
