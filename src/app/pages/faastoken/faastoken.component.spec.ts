import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaastokenComponent } from './faastoken.component';

describe('FaastokenComponent', () => {
  let component: FaastokenComponent;
  let fixture: ComponentFixture<FaastokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaastokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaastokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
