import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostoSaudeService } from '../servicos/posto-saude.service';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [IndexComponent,
    CadastroPacienteComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    MenubarModule
  ],
  exports:[CadastroPacienteComponent, IndexComponent],
  providers:[]
})
export class PacienteModule { }
