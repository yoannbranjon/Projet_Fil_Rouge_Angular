import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsMapComponent } from './contacts-map.component';

describe('ContactsMapComponent', () => {
  let component: ContactsMapComponent;
  let fixture: ComponentFixture<ContactsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
