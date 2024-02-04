import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentilebuttonComponent } from './percentilebutton.component';

describe('PercentilebuttonComponent', () => {
  let component: PercentilebuttonComponent;
  let fixture: ComponentFixture<PercentilebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentilebuttonComponent]
    });
    fixture = TestBed.createComponent(PercentilebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
