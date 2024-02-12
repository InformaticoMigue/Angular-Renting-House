import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../assets/types/house';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseRentingService {

  private http: HttpClient = inject(HttpClient)
  private url: string = "./assets/houses.json"


  getAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.url)
  }

  getHousesByCity(city: string): Observable<House[]> {
    return this.getAllHouses().pipe(
      map(houses => houses.filter(house => house.city.toLowerCase().trim() === city.toLowerCase().trim()))
    )
  }

  find(id: number): Observable<House | undefined> {
    return this.getAllHouses().pipe(
      map(houses => houses.find(house => house.id === id))
    )
  }




}
