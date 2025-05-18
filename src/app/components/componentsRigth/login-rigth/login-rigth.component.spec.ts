import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRigthComponent } from './login-rigth.component';

describe('LoginRigthComponent', () => {
  let component: LoginRigthComponent;
  let fixture: ComponentFixture<LoginRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRigthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
