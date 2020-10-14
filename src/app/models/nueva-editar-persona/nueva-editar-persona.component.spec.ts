import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEditarPersonaComponent } from './nueva-editar-persona.component';

describe('NuevaEditarPersonaComponent', () => {
  let component: NuevaEditarPersonaComponent;
  let fixture: ComponentFixture<NuevaEditarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaEditarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEditarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
