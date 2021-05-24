import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzParentComponent } from './quizz-parent.component';

describe('QuizzParentComponent', () => {
  let component: QuizzParentComponent;
  let fixture: ComponentFixture<QuizzParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
