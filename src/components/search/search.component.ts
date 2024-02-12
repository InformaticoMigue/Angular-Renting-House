import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['../../styles.css']
})
export class SearchComponent implements OnInit {

  @Output()
  submitForm = new EventEmitter<string>()

  formBuilder: FormBuilder = inject(FormBuilder)
  searchForm:FormGroup = new FormGroup({})


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['Filter by city', [
        Validators.required
      ]]
    })
  }

  onSubmit() {   
    this.submitForm.emit(this.searchForm.controls["search"].value)       
  }

}
