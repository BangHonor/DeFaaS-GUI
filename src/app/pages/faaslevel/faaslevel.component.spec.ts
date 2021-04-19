import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaaslevelComponent } from './faaslevel.component';

describe('FaaslevelComponent', () => {
  let component: FaaslevelComponent;
  let fixture: ComponentFixture<FaaslevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaaslevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaaslevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
