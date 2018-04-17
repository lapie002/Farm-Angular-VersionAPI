import { Component, OnInit, Input } from '@angular/core';

import { Animaldescription } from '../models/Animaldescription.model';
import { Animal } from '../models/Animal.model';
import { Fooddescription } from '../models/Fooddescription.model';
import { Food } from '../models/Food.model';

@Component({
  selector: 'app-animals-display',
  templateUrl: './animals-display.component.html',
  styleUrls: ['./animals-display.component.scss']
})
export class AnimalsDisplayComponent implements OnInit {

  @Input() animals: Array<Animal>;

  constructor() { }

  ngOnInit() {
    
  }

}
