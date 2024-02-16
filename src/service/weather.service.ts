import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  http: HttpClient = inject(HttpClient)
  api:string = "https://api.weatherapi.com/v1/current.json?key=b0bb2e11434845d7b36130026241602&q="

  getWeatherByLocation(location:string){
    return this.http.get(`${this.api}${location}`)
  }
}
