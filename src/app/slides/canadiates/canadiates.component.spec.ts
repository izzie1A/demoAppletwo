import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadiatesComponent } from './canadiates.component';

describe('CanadiatesComponent', () => {
  let component: CanadiatesComponent;
  let fixture: ComponentFixture<CanadiatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanadiatesComponent]
    });
    fixture = TestBed.createComponent(CanadiatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
