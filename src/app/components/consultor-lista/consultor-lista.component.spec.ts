import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorListaComponent } from './consultor-lista.component';

describe('ConsultorListaComponent', () => {
  let component: ConsultorListaComponent;
  let fixture: ComponentFixture<ConsultorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
