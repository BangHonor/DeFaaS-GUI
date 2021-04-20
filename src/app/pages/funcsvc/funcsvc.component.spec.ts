import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncsvcComponent } from './funcsvc.component';

describe('FuncsvcComponent', () => {
  let component: FuncsvcComponent;
  let fixture: ComponentFixture<FuncsvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncsvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncsvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
