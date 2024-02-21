import { Component, OnInit, inject } from '@angular/core';
import { House } from '../../assets/types/house';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseRentingService } from '../../service/house-renting.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-house-details',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './house-details.component.html',
  styleUrls: ['../../styles.css']
})
export class HouseDetailsComponent implements OnInit {

  formBuilder: FormBuilder = inject(FormBuilder);
  formValorate: FormGroup = new FormGroup({});
  house!:House
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)
  houseRentingService: HouseRentingService = inject(HouseRentingService)
  icon!: string;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idHouse = +params.get("idHouse")!;      
      this.houseRentingService.find(idHouse).subscribe(h => {
        if (h == undefined) {
          this.router.navigate(["/"])
        }else{
          this.house = h;
          this.setValorateIcon(this.house.valoration)
        }
      })            
    })
    this.formValorate = this.formBuilder.group({
      validate: ['', [
        Validators.required
      ]]
    })        
  }

  onSubmit() {
    this.house.valoration = this.formValorate.value.validate
    this.setValorateIcon(this.house.valoration)
  }

  setValorateIcon(valorate: number) {
    if (valorate >= 1 && valorate <= 3) {
      this.icon = "❤️"
    }else if (valorate >= 4 && valorate <=6) {
      this.icon = "❤️❤️"
    }else {
      this.icon = "❤️❤️❤️"
    }
  }



}
