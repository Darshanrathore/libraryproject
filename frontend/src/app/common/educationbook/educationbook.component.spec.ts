import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationbookComponent } from './educationbook.component';

describe('EducationbookComponent', () => {
  let component: EducationbookComponent;
  let fixture: ComponentFixture<EducationbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
