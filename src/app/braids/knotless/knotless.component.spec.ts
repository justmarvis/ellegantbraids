import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotlessComponent } from './knotless.component';

describe('KnotlessComponent', () => {
  let component: KnotlessComponent;
  let fixture: ComponentFixture<KnotlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotlessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
