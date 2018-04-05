import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animal } from '../models/Animal.model';
import { Food } from '../models/Food.model';


import { FARMS } from '../mock-farms';
import { ANIMAUX } from '../mock-animals';


@Injectable()
export class FarmService {

  private farms: Array<Farm> = FARMS;
  private animaux: Array<Animal> = ANIMAUX;

  constructor(){ }

  public emitFarms(): Array<Farm>{
    return this.farms;
  }

  public emitAnimaux(): Array<Animal>{
    return this.animaux;
  }

  /**
   * save a new farm
   * @param farm
   * @return void
   */
  public saveFarm(farm: Farm){
    this.farms.push(farm);
  }

    /**
   * save a new animal
   * @param animal
   * @return void
   */
  public addAnimal(animal: Animal){
    this.animaux .push(animal);
  }



}
