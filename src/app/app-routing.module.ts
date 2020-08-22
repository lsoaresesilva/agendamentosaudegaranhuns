import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro-paciente.component';

const routes: Routes = [{
  path:'cadastrar', component:CadastroPacienteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
