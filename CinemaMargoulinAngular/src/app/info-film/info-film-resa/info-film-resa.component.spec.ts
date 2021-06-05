import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFilmResaComponent } from './info-film-resa.component';

describe('InfoFilmResaComponent', () => {
  let component: InfoFilmResaComponent;
  let fixture: ComponentFixture<InfoFilmResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFilmResaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFilmResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
