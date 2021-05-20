import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunccodeCreaterComponent } from './funccode-creater.component';

describe('FunccodeCreaterComponent', () => {
  let component: FunccodeCreaterComponent;
  let fixture: ComponentFixture<FunccodeCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunccodeCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunccodeCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
