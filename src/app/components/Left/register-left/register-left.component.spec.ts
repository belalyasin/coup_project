import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLeftComponent } from './register-left.component';

describe('RegisterLeftComponent', () => {
  let component: RegisterLeftComponent;
  let fixture: ComponentFixture<RegisterLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
