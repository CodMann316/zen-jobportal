import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSeekerComponent } from './signup-seeker.component';

describe('SignupSeekerComponent', () => {
  let component: SignupSeekerComponent;
  let fixture: ComponentFixture<SignupSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSeekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
