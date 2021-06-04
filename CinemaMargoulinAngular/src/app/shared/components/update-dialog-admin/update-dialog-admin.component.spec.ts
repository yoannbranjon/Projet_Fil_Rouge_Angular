import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogAdminComponent } from './update-dialog-admin.component';

describe('UpdateDialogAdminComponent', () => {
  let component: UpdateDialogAdminComponent;
  let fixture: ComponentFixture<UpdateDialogAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDialogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
