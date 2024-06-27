import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancebookComponent } from './financebook.component';

describe('FinancebookComponent', () => {
  let component: FinancebookComponent;
  let fixture: ComponentFixture<FinancebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
