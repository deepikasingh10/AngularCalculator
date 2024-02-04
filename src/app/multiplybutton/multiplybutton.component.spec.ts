import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplybuttonComponent } from './multiplybutton.component';

describe('MultiplybuttonComponent', () => {
  let component: MultiplybuttonComponent;
  let fixture: ComponentFixture<MultiplybuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplybuttonComponent]
    });
    fixture = TestBed.createComponent(MultiplybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
