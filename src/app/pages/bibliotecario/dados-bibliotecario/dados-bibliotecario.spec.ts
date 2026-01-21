import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosBibliotecario } from './dados-bibliotecario';

describe('DadosBibliotecario', () => {
  let component: DadosBibliotecario;
  let fixture: ComponentFixture<DadosBibliotecario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosBibliotecario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosBibliotecario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
