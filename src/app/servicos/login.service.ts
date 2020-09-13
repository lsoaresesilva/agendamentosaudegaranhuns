import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Usuario from '../modelos/usuario';
import { URL_REST } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  PATH = "login";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  constructor(private http:HttpClient) { }

  logar(usuario:Usuario){
    usuario.senha = usuario.login; // TODO: por enquanto a senha é igual ao cartão do SUS. Remover isto quando a senha existir no formulário.
    return this.http.post(URL_REST+this.PATH, JSON.stringify(usuario), this.httpOptions);
  }
}
