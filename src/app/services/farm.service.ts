import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { FARMS } from '../mock-farms';

@Injectable()
export class FarmService {

  //farms: Farm[] = [];
  private farms: Array<Farm> = FARMS;

  constructor(){ }

  public emitFarms(): Array<Farm>{
    return this.farms;
  }

  /**
   * save a new farm
   * @param farm
   * @return farms list of farms updated
   */
  public saveFarm(farm: Farm){
    this.farms.push(farm);
    //return this.farms;
  }



}
