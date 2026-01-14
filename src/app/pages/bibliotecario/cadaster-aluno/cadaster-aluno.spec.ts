import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadasterAluno } from './cadaster-aluno';

describe('CadasterAluno', () => {
  let component: CadasterAluno;
  let fixture: ComponentFixture<CadasterAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadasterAluno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadasterAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
