import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro-paciente.component';
import { AcessoComponent } from './login/acesso/acesso.component';
import { IndexComponent } from './paciente/index/index.component';
import { SolicitacaoComponent } from './agendamento/solicitacao/solicitacao.component';

const routes: Routes = [
  { path: '', component: AcessoComponent },
  {
    path: 'paciente', component: IndexComponent,
    children: [
      {
        path: 'agendar',
        component: SolicitacaoComponent,
        outlet:"routerPaciente"
      }
    ]
  },
  { path: 'paciente/cadastrar', component: CadastroPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
