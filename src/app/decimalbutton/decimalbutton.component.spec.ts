import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalbuttonComponent } from './decimalbutton.component';

describe('DecimalbuttonComponent', () => {
  let component: DecimalbuttonComponent;
  let fixture: ComponentFixture<DecimalbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecimalbuttonComponent]
    });
    fixture = TestBed.createComponent(DecimalbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
