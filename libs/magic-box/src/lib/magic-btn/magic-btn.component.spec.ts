import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicBtnComponent } from './magic-btn.component';

describe('MagicBtnComponent', () => {
  let component: MagicBtnComponent;
  let fixture: ComponentFixture<MagicBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
