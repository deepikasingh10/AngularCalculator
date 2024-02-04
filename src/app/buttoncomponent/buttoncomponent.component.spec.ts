import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncomponentComponent } from './buttoncomponent.component';

describe('ButtoncomponentComponent', () => {
  let component: ButtoncomponentComponent;
  let fixture: ComponentFixture<ButtoncomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtoncomponentComponent]
    });
    fixture = TestBed.createComponent(ButtoncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
