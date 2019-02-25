import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupReactFormComponent } from './signup-react-form.component';

describe('SignupReactFormComponent', () => {
  let component: SignupReactFormComponent;
  let fixture: ComponentFixture<SignupReactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupReactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
