import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackspacebuttonComponent } from './backspacebutton.component';

describe('BackspacebuttonComponent', () => {
  let component: BackspacebuttonComponent;
  let fixture: ComponentFixture<BackspacebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackspacebuttonComponent]
    });
    fixture = TestBed.createComponent(BackspacebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
