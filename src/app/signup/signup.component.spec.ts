import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignupComponent } from './signup.component';

describe('TestSignupComponent', () => {
  let component: TestSignupComponent;
  let fixture: ComponentFixture<TestSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
