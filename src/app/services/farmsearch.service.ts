import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animal } from '../models/Animal.model';
import { Food } from '../models/Food.model';

@Injectable()
export class FarmsearchService {

  farm: Farm;
  
  constructor(){ }

  public getFarmByFarmerAge(age: number) {

    return new Promise(
      (resolve,reject)=>{
        let query = firebase.database().ref("farms").orderByKey();
        query.once("value")
          .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              // key will be "ada" the first time and "alan" the second time
              let key = childSnapshot.key;
              // childData will be the actual contents of the child
              let childData = childSnapshot.val();

              if(childData.farmer.age === age){ 
                resolve(childData); 
              }

          });
        });
      }
    );
  }

  public getFarmByFarmerAddress(address: string) {

    return new Promise(
      (resolve,reject)=>{
        let query = firebase.database().ref("farms").orderByKey();
        query.once("value")
          .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              // key will be "ada" the first time and "alan" the second time
              let key = childSnapshot.key;
              // childData will be the actual contents of the child
              let childData = childSnapshot.val();

              if(childData.address === address){ resolve(childData); }

          });
        });
      }
    );
  }



}
