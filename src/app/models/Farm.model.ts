import { Farmer } from './Farmer.model';
import { Animal } from './Animal.model';

export class Farm{
  
  id: number;
  farmer: Farmer;
  animalfarm: Array<Animal>;
  name: string;
  address: string;
  
  constructor(){}

}
