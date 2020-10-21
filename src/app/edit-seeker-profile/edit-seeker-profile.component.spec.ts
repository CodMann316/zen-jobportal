import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeekerProfileComponent } from './edit-seeker-profile.component';

describe('EditSeekerProfileComponent', () => {
  let component: EditSeekerProfileComponent;
  let fixture: ComponentFixture<EditSeekerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSeekerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
