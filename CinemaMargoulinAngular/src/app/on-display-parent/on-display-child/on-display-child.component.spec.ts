import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDisplayChildComponent } from './on-display-child.component';

describe('OnDisplayChildComponent', () => {
  let component: OnDisplayChildComponent;
  let fixture: ComponentFixture<OnDisplayChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDisplayChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDisplayChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
