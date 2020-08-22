import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { URL_REST } from '../../environments/environment';
import Paciente from '../modelos/paciente';
import Usuario from '../modelos/usuario';
import { PerfilUsuario } from '../modelos/perfilUsuario';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  PATH = "pacientes";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  salvar(paciente:Paciente){
    paciente.usuario = new Usuario(paciente.cartaoSus, paciente.cartaoSus, PerfilUsuario.PACIENTE);

    if(paciente == null){
      throw new Error("Não é possível cadastrar um paciente sem dados.");
    }

    return this.http.post<Paciente>(URL_REST+this.PATH, JSON.stringify(paciente), this.httpOptions);
  }
}
