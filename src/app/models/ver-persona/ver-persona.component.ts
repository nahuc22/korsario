import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/pages/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrls: ['./ver-persona.component.css']
})
export class VerPersonaComponent implements OnInit {

  listaPersonas: Persona[];

  loading = false;

  constructor(private personaServicio: PersonaService) { 
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.personaServicio.getListPersonas().subscribe(data => {
      this.listaPersonas = data;
    }
  }
  
  
 
}
