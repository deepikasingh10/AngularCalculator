import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualbuttonComponent } from './equalbutton.component';

describe('EqualbuttonComponent', () => {
  let component: EqualbuttonComponent;
  let fixture: ComponentFixture<EqualbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EqualbuttonComponent]
    });
    fixture = TestBed.createComponent(EqualbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
