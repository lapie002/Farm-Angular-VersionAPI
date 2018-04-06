import { Farmer } from './Farmer.model';
import { Animal } from './Animal.model';

export class Farm{

  farmer: Farmer;
  animalfarm: Array<Animal>;

  constructor(public name, public address){}

}
