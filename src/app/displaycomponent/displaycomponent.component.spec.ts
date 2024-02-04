import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycomponentComponent } from './displaycomponent.component';

describe('DisplaycomponentComponent', () => {
  let component: DisplaycomponentComponent;
  let fixture: ComponentFixture<DisplaycomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaycomponentComponent]
    });
    fixture = TestBed.createComponent(DisplaycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
