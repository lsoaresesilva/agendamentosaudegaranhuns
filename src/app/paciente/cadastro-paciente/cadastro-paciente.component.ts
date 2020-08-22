import { Component, OnInit } from '@angular/core';
import { PostoSaudeService } from '../../servicos/posto-saude.service';
import PostoSaude from '../../modelos/postoSaude';
import { Observable } from 'rxjs';
import { PacienteService } from '../../servicos/paciente.service';
import Paciente from 'src/app/modelos/paciente';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  postosSaude:Observable<PostoSaude[]>;
  paciente:Paciente;

  constructor(private postoSaudeService:PostoSaudeService, private pacienteService:PacienteService, private messageService:MessageService) {
    this.paciente = new Paciente();
  }

  ngOnInit(): void {
    this.postosSaude = this.postoSaudeService.recuperarTodos();
  }

  cadastrar(){
    this.pacienteService.salvar(this.paciente).subscribe(resposta=>{
      // TODO: Fazer uma validação de cadastro por e-mail ou SMS
      // TODO: Redirecionar para tela de login
    }, err=>{
      if(err.status == 409){
        this.messageService.add({severity:'error', summary:'Falha no cadastro', detail:'Já existe um paciente cadastrado com o número do cartão SUS informado. Por favor, procure o seu posto de saúde.'})
      }
    })
  }

}
