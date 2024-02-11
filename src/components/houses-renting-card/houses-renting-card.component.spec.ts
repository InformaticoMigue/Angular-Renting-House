/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HousesRentingCardComponent } from './houses-renting-card.component';

describe('HousesRentingCardComponent', () => {
  let component: HousesRentingCardComponent;
  let fixture: ComponentFixture<HousesRentingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesRentingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesRentingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
