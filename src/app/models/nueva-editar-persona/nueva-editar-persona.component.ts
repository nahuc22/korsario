import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nueva-editar-persona',
  templateUrl: './nueva-editar-persona.component.html',
  styleUrls: ['./nueva-editar-persona.component.css']
})
export class NuevaEditarPersonaComponent implements OnInit {

  persona: FormGroup;
  idPersona = 0;
  accion = 'Crear';

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {

    this.persona = this.fb.group({
        nombre : ['', Validators.required],
       apellido: ['', Validators.required],
            dni: ['', Validators.required]
    });

    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.idPersona = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void{

    this.esEditar();
  }

  // tslint:disable-next-line:typedef
  guardarPersona() {
  console.log(this.persona);
  }

  esEditar() {
    if (this.idPersona > 0) {
      this.accion = 'Editar';
      this.persona.patchValue({
        nombre: 'Nahuel',
        apellido: 'Castilla',
        dni: '40238335'
      });
    }
  }
}
