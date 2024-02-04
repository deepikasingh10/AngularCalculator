import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearbuttonComponent } from './clearbutton.component';

describe('ClearbuttonComponent', () => {
  let component: ClearbuttonComponent;
  let fixture: ComponentFixture<ClearbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearbuttonComponent]
    });
    fixture = TestBed.createComponent(ClearbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
