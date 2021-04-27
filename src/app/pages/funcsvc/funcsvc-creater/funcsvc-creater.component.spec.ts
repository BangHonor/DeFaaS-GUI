import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncsvcCreaterComponent } from './funcsvc-creater.component';

describe('FuncsvcCreaterComponent', () => {
  let component: FuncsvcCreaterComponent;
  let fixture: ComponentFixture<FuncsvcCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncsvcCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncsvcCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
