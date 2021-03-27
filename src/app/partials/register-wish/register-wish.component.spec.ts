import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWishComponent } from './register-wish.component';

describe('RegisterComponent', () => {
  let component: RegisterWishComponent;
  let fixture: ComponentFixture<RegisterWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
