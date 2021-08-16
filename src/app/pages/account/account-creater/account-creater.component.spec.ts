import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreaterComponent } from './account-creater.component';

describe('AccountCreaterComponent', () => {
  let component: AccountCreaterComponent;
  let fixture: ComponentFixture<AccountCreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
