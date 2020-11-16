import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVideoPlaceholderComponent } from './profile-video-placeholder.component';

describe('ProfileVideoPlaceholderComponent', () => {
  let component: ProfileVideoPlaceholderComponent;
  let fixture: ComponentFixture<ProfileVideoPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileVideoPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVideoPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
