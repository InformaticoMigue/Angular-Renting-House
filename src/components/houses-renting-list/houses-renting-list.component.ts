import { Component, OnInit, inject } from '@angular/core';
import { HousesRentingCardComponent } from '../houses-renting-card/houses-renting-card.component';
import { HouseRentingService } from '../../service/house-renting.service';
import { House } from '../../assets/types/house';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-houses-renting-list',
  standalone: true,
  imports: [HousesRentingCardComponent,SearchComponent],
  templateUrl: './houses-renting-list.component.html',
  styleUrls: ['../../styles.css']
})
export class HousesRentingListComponent implements OnInit {

  houses:House[] = []

  serviceHouseRenting: HouseRentingService = inject(HouseRentingService);
  
  ngOnInit() {    
    this.setAllHouses()
  }

  setAllHouses(){
    this.serviceHouseRenting.getAllHouses()
    .subscribe({
      next: (houses) => this.houses = houses,
      error: () => console.error("Failed to get all houses")
    })
  }

  handleFilterButton(filter:string){
    this.serviceHouseRenting.getHousesByCity(filter).subscribe({
      next: (hF) => hF.length === 0 ? this.setAllHouses() : this.houses = hF,
      error: () => console.error("Failed to get all houses by city")
    })
  }

}
