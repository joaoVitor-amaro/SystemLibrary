import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarConta } from './ativar-conta';

describe('AtivarConta', () => {
  let component: AtivarConta;
  let fixture: ComponentFixture<AtivarConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtivarConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivarConta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
