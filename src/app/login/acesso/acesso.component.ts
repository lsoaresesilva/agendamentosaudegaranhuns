import { Component, OnInit } from '@angular/core';
import Usuario from '../../modelos/usuario';
import { LoginService } from '../../servicos/login.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  usuario:Usuario;



  constructor(private loginService: LoginService, private messageService: MessageService, private router: Router) {

    this.usuario = new Usuario(null, null, null);

  }

  ngOnInit(): void {
  }

  cadastrar(){
    this.router.navigate(['paciente/cadastrar']);
  }

  logar(){
    this.loginService.logar(this.usuario).subscribe(resposta=>{
      localStorage.setItem('usuarioLogado', this.usuario.login);
      this.router.navigate(['paciente']);
    }, err=>{
      if( err.status == 401){
        this.messageService.add({severity:'error', summary:'Não foi possível entrar no sistema.', detail:'Os dados informados são inválidos. Procure o atendente do seu posto de saúde.'})
      }

    })
  }

}
