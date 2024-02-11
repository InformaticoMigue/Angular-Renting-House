/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HousesRentingListComponent } from './houses-renting-list.component';

describe('HousesRentingListComponent', () => {
  let component: HousesRentingListComponent;
  let fixture: ComponentFixture<HousesRentingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesRentingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesRentingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
