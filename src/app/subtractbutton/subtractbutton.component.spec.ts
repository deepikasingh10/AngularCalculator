import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractbuttonComponent } from './subtractbutton.component';

describe('SubtractbuttonComponent', () => {
  let component: SubtractbuttonComponent;
  let fixture: ComponentFixture<SubtractbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtractbuttonComponent]
    });
    fixture = TestBed.createComponent(SubtractbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
