import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunccodeComponent } from './funccode.component';

describe('FunccodeComponent', () => {
  let component: FunccodeComponent;
  let fixture: ComponentFixture<FunccodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunccodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunccodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
