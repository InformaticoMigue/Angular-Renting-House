import { Component, OnInit, inject } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import { HouseRentingService } from '../../service/house-renting.service';
import { Router } from '@angular/router';
import { WeatherService } from '../../service/weather.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['../../styles.css']
})
export class MapComponent implements OnInit {

  serviceHouseRenting: HouseRentingService = inject(HouseRentingService)
  router: Router = inject(Router)
  wheatherService: WeatherService = inject(WeatherService)

  ngOnInit() {
    const map = new Map('map').setView([37.09024, -95.712891], 5);

    tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 12,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(map);

    this.getAllHouses().subscribe(houses => {
      for (const house of houses) {
        this.wheatherService.getWeatherByLocation(house.city).subscribe(w => {
          
          const m = marker([house.coords.lat, house.coords.long]).addTo(map).on('click', () => {
            this.router.navigate([`/house/${house.id}`]);
          })
          const [currentLocation, currentWeather] = Object.values(w);

          m.bindTooltip(this.setTooltip(currentLocation,currentWeather));
        });
      
      }
    })

  }

  setTooltip(currentLocation:any, currentWeather:any):string{
    return `<div>
              <h1>${currentLocation.name}</h1>
              <img src="${currentWeather.condition.icon}" de la imagen">
              <p>Minium Weather ${currentWeather.temp_c}</p>
              <p>Maxium Weather ${currentWeather.temp_f}</p>
           </div>`
  }

  getAllHouses() {
    return this.serviceHouseRenting.getAllHouses();
  }

}
