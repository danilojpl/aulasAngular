import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPaisesComponent } from './ex-paises.component';

describe('ExPaisesComponent', () => {
  let component: ExPaisesComponent;
  let fixture: ComponentFixture<ExPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
