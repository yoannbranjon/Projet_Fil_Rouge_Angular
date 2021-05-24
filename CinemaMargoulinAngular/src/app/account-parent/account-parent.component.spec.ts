import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountParentComponent } from './account-parent.component';

describe('AccountParentComponent', () => {
  let component: AccountParentComponent;
  let fixture: ComponentFixture<AccountParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
