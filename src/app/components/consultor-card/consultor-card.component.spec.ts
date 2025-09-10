import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorCardComponent } from './consultor-card.component';

describe('ConsultorCardComponent', () => {
  let component: ConsultorCardComponent;
  let fixture: ComponentFixture<ConsultorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
