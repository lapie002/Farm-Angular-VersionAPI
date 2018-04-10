import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animal } from '../models/Animal.model';
import { Food } from '../models/Food.model';


@Injectable()
export class FarmService {

  farms: Farm[] = [];

  private animaux: Array<Animal> = [];

  farmsSubject = new Subject<Farm[]>();

  constructor(){ }

  public emitFarms(){
    this.farmsSubject.next(this.farms);
  }

  public emitAnimaux(): Array<Animal>{
    return this.animaux;
  }

  public getFarms(){
    firebase.database().ref('/farms').on(
      'value',(data)=>{
                this.farms = data.val() ? data.val() : [];
                this.emitFarms();
      }
    );
  }

  /**
   * save a new farm
   * @param farm
   * @return void
   */
  public createNewFarm(farm: Farm){
    
    this.farms.push(farm);

    this.saveFarms();
    this.emitFarms();

    //on vide le tableau des animaux
    this.animaux = [];


  }

    /**
   * save a new animal
   * @param animal
   * @return void
   */
  public addAnimal(animal: Animal){
    this.animaux.push(animal);
  }

  saveFarms(){
    firebase.database().ref('/farms').set(this.farms);
  }


}
