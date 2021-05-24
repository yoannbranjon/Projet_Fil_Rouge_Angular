import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalInfosParentComponent } from './practical-infos-parent.component';

describe('PracticalInfosParentComponent', () => {
  let component: PracticalInfosParentComponent;
  let fixture: ComponentFixture<PracticalInfosParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalInfosParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalInfosParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
