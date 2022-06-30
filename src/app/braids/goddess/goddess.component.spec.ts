import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoddessComponent } from './goddess.component';

describe('GoddessComponent', () => {
  let component: GoddessComponent;
  let fixture: ComponentFixture<GoddessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoddessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoddessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
