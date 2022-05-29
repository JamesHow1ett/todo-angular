import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABtnComponent } from './a-btn.component';

describe('ABtnComponent', () => {
  let component: ABtnComponent;
  let fixture: ComponentFixture<ABtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ABtnComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
