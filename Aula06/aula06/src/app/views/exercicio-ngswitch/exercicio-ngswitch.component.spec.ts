import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNgswitchComponent } from './exercicio-ngswitch.component';

describe('ExercicioNgswitchComponent', () => {
  let component: ExercicioNgswitchComponent;
  let fixture: ComponentFixture<ExercicioNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioNgswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
