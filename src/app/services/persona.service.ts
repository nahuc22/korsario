import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../pages/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  myAppUrl  = 'https://localhost:44389/api/productoapi';

  htppOptions = {
    headers: new HttpHeaders({
      'Content Type': 'aplication/json'
    })
  };

  constructor(private http: HttpClient ) { }


  getListPersonas(): Observable<Persona[]> {

    return this.http.get<Persona[]>(this.myAppUrl);

  }

  borrarPersona(id:number ): Observable<Persona> {
    return this.http.delete<Persona>(this.myAppUrl + id)

  }

  guardarPersona(persona: Persona):Observable<Persona> {
    return this.http.post<Persona>(this.myAppUrl, persona, this.htppOptions);
  }

  cargarPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.myAppUrl + id);
  }

  actualizarPersona(id:number, persona:Persona):Observable<Persona> {
    return this.http.put<Persona>(this.myAppUrl + persona, this.htppOptions);

  }
}
