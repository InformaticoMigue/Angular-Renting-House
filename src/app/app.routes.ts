import { Routes } from '@angular/router';
import { HouseDetailsComponent } from '../components/house-details/house-details.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "house/:idHouse", component:HouseDetailsComponent}
];
