import { Routes } from '@angular/router';
import { HouseDetailsComponent } from '../components/house-details/house-details.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { MapComponent } from '../components/map/map.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: "house/:idHouse", component:HouseDetailsComponent},
    {path: "login", component:LoginComponent},
    {path: "map", component: MapComponent}
];
