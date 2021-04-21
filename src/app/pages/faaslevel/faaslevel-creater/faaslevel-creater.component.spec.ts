import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaaslevelCreaterComponent } from './faaslevel-creater.component';

describe('FaaslevelCreaterComponent', () => {
  let component: FaaslevelCreaterComponent;
  let fixture: ComponentFixture<FaaslevelCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaaslevelCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaaslevelCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
