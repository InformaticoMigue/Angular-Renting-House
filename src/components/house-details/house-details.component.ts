import { Component, OnInit, inject } from '@angular/core';
import { House } from '../../assets/types/house';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseRentingService } from '../../service/house-renting.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['../../styles.css']
})
export class HouseDetailsComponent implements OnInit {

  house!:House
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)
  houseRentingService: HouseRentingService = inject(HouseRentingService)

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idHouse = +params.get("idHouse")!;      
      this.houseRentingService.find(idHouse).subscribe({
        next: (h) => h == undefined ? this.router.navigate(["/"]) : this.house = h,
        error: () => "Error in get house"
      })
    })    
  }



}
