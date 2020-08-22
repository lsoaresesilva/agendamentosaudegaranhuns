import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostoSaudeService } from '../servicos/posto-saude.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[PostoSaudeService]
})
export class PacienteModule { }
