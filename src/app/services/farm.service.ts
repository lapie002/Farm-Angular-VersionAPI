import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Farm } from '../models/Farm.model';
import { Farmer } from '../models/Farmer.model';
import { Animal } from '../models/Animal.model';
import { Food } from '../models/Food.model';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}*/


@Injectable()
export class FarmService {

  private farmsUrl = 'api/farms';  // URL to web api
  private farmersUrl = 'api/farmers';  // URL to web api

  farmer: Farmer;



  constructor(private http: HttpClient,
              private messageService: MessageService){ }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
          return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
          };
      }

    /** Log a FarmService message with the MessageService */
    private log(message: string) {
          this.messageService.clear();
          this.messageService.addMessage('FarmService: ' + message);
      }


      /** GET farms from the server */
      public getFarms(): Observable<Farm[]>{
        return this.http.get<Farm[]>(this.farmsUrl)
        .pipe(
          tap(farms => this.log(`fetched farms`)),
          catchError(this.handleError('getFarms', []))
        );
      }


      /** GET farm by id. Will 404 if id not found */
      public getFarm(id: number): Observable<Farm>{

        const url = `${this.farmsUrl}/${id}`;

        return this.http.get<Farm>(url)
          .pipe(
            tap(_ => this.log(`fetched farm id=${id}`)),
            catchError(this.handleError<Farm>(`getFarm id=${id}`))
          );
      }

      /** POST: add a new farm to the server */
      public addFarm(farm: Farm): Observable<any>{

        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post<Farm>(this.farmsUrl, farm, httpOptions)
          .pipe(
            tap((farm: Farm) => this.log(`added farm w/ id=${farm.id}`)),
            catchError(this.handleError<Farm>('addFarm'))
          );
      }

      /** POST: add a new farm to the server */
      public addFarmer(farmer: Farmer): Observable<any>{
              const httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
              };
    
              return this.http.post<Farmer>(this.farmersUrl, farmer, httpOptions)
                .pipe(
                  tap((farmer: Farmer) => this.log(`added farm w/ farm id=${farmer.farmid}`)),
                  catchError(this.handleError<Farm>('addFarm'))
                );
      }


      /* GET farm whose address contains search term */
      public searchFarmByAddress(term: string): Observable<Farm[]>{

        return this.http.get<Farm[]>(`api/farms/?address=${term}`).pipe(
          tap(_ => this.log(`found farm matching "${term}"`)),
          catchError(this.handleError<Farm[]>('searchFarmByAddress'))
        );
      }

      /* GET farm whose farmer's age contains search age */
      public searchFarmByFarmerAge(age: number): Observable<Farmer[]>{

        //this.http.get<Farmer[]>(`api/farmers/?age=${age}`).subscribe(farmer => this.farmer = farmer[0]));
        //console.log('farmer Obj : ');
        //this.http.get<Farmer[]>(`api/farmers/?age=${age}`).subscribe(res => this.farmer = res[0]) );
        // console.log('contenu de la requete sur fermier');
        // return this.http.get<Farmer[]>(`api/farmers/?age=${age}`).subscribe((res) => this.farmer = res[0] );

        //console.log('farmer farm id : ');
        //console.log(this.farmer.farmid);

        //return this.getFarm(this.farmer.farmid);

        return this.http.get<Farmer[]>(`api/farmers/?age=${age}`).pipe(
          tap(_ => this.log(`found farmer matching age :"${age}"`)),
          catchError(this.handleError<Farmer[]>('searchFarmByFarmerAge'))
        );

      }

      /* GET farm whose farmer's name contains search name */
      public searchFarmByFarmerName(term: string): Observable<Farm>{
        if (!term.trim()) {
          // if not search term, return empty farm Object.
          let f = new Farm();
          return of(f);
        }

        this.http.get<Farm>(`api/farms/?farmer/?name=${term}`).subscribe(res => console.log(res));

        return this.http.get<Farm>(`api/farms/?farmer/?name=${term}`).pipe(
          tap(_ => this.log(`found farm matching "${term}"`)),
          catchError(this.handleError<Farm>('searchFarmByAddress'))
        );
      }
}
