import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const farms = [
      { 
        id: 0, 
        name: "nom de la ferme", 
        address: "adresse de la ferme", 
        farmer: 
        {
          farmid: 0,
          name: "macdonald",
          age: 36,
          gender: "male"
        },
        animalfarm: 
        [
          {
            name: "papapig", 
            calories: 0,
            type: {id:1, description:"Pig"},
            foodpackage: 
            [
              {
                quantity: 3,
                type: {id: 1, description: "Carrots", calories: 13}
              }
            ]
          }
        ]
      },
      { 
        id: 1, 
        name: "nom de la ferme", 
        address: "adresse de la ferme", 
        farmer: 
        {
          farmid: 1,
          name: "roger",
          age: 38,
          gender: "male"
        },
        animalfarm: 
        [
          {
            name: "papapig", 
            calories: 0,
            type: {id:1, description:"Pig"},
            foodpackage: 
            [
              {
                quantity: 3,
                type: {id: 1, description: "Carrots", calories: 13}
              }
            ]
          }
        ]
      }
    ];

    const farmers = [
      {
        farmid: 0,
        name: "macdonald",
        age: 36,
        gender: "male"
      },
      {
        farmid: 1,
        name: "roger",
        age: 38,
        gender: "male"
      }
    ];

    return {farms, farmers};

  }
}
