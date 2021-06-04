import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFilmCommentComponent } from './info-film-comment.component';

describe('InfoFilmCommentComponent', () => {
  let component: InfoFilmCommentComponent;
  let fixture: ComponentFixture<InfoFilmCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFilmCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFilmCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
