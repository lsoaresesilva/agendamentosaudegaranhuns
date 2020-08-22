import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { URL_REST } from '../../environments/environment';
import PostoSaude from '../modelos/postoSaude';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostoSaudeService {

  PATH = "postos";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http:HttpClient) { }

  recuperarTodos():Observable<PostoSaude[]>{
    return this.http.get<PostoSaude[]>(URL_REST+this.PATH);
  }
}
