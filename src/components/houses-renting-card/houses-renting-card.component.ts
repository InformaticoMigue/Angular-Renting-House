import { Component, OnInit, Input } from '@angular/core';
import { House } from '../../assets/types/house';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-houses-renting-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './houses-renting-card.component.html',
  styleUrls: ['../../styles.css']
})
export class HousesRentingCardComponent implements OnInit {

  @Input()
  house!:House

  constructor() { }

  ngOnInit() {
  }

}
