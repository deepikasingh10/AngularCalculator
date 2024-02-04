import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividebuttonComponent } from './dividebutton.component';

describe('DividebuttonComponent', () => {
  let component: DividebuttonComponent;
  let fixture: ComponentFixture<DividebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividebuttonComponent]
    });
    fixture = TestBed.createComponent(DividebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
