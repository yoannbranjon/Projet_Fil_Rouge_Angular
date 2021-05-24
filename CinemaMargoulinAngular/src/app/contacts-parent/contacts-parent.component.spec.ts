import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsParentComponent } from './contacts-parent.component';

describe('ContactsParentComponent', () => {
  let component: ContactsParentComponent;
  let fixture: ComponentFixture<ContactsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
