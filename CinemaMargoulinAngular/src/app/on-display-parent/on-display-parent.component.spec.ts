import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDisplayParentComponent } from './on-display-parent.component';

describe('OnDisplayParentComponent', () => {
  let component: OnDisplayParentComponent;
  let fixture: ComponentFixture<OnDisplayParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDisplayParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDisplayParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
