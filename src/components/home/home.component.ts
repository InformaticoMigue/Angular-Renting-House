import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HousesRentingListComponent } from '../houses-renting-list/houses-renting-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HousesRentingListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['../../styles.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
