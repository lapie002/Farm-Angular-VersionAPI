import { Animaldescription } from './Animaldescription.model';
import { Fooddescription } from './Fooddescription.model';
import { Food } from './Food.model';


export class Animal{

  name: string;
  calories: number;
  type: Animaldescription;
  foodpackage: Array<Food>;

  constructor(){}


}