import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  readonly apiURL: string = "https://localhost:3000/cars";
  
  constructor(protected httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiURL);
  }
}