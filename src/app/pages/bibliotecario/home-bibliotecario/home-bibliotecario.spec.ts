import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBibliotecario } from './home-bibliotecario';

describe('HomeBibliotecario', () => {
  let component: HomeBibliotecario;
  let fixture: ComponentFixture<HomeBibliotecario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBibliotecario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBibliotecario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
