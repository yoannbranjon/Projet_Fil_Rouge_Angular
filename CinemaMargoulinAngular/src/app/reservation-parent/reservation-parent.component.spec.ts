import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationParentComponent } from './reservation-parent.component';

describe('ReservationParentComponent', () => {
  let component: ReservationParentComponent;
  let fixture: ComponentFixture<ReservationParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
