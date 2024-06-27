import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookscategoriesComponent } from './bookscategories.component';

describe('BookscategoriesComponent', () => {
  let component: BookscategoriesComponent;
  let fixture: ComponentFixture<BookscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookscategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
