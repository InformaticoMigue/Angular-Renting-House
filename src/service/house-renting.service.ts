import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../assets/types/house';

@Injectable({
  providedIn: 'root'
})
export class HouseRentingService {

  private http: HttpClient = inject(HttpClient)
  private url: string = "./assets/houses.json"
  private houses:Promise<House[]>

  constructor(){
    this.houses = this.loadHousesData()
  }

  private fetchDatas(url: string) {
    return this.http.get<House[]>(url)
  }

  private loadHousesData(): Promise<House[]> {
    return new Promise((resolve, reject) => {
        this.fetchDatas(this.url).subscribe(h => {
          resolve(h);
          reject(h)
        })
      }
    )
  }

  getAllHouses(){
    return this.houses
  }

  async getHouesByCity(city:string){
    return await this.houses.then((houses) => {
      return houses.filter(h => h.city.toLowerCase() === city.toLowerCase())
    })
  }

  async find(id:number){
    return await this.houses.then((houses) => {
      return houses.find(h => h.id === id)
    })
  }




}
