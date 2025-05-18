import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRigthComponent } from './register-rigth.component';

describe('RegisterRigthComponent', () => {
  let component: RegisterRigthComponent;
  let fixture: ComponentFixture<RegisterRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRigthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
