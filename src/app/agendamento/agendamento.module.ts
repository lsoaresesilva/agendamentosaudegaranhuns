import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';

import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SolicitacaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    CalendarModule,
    PanelModule

  ],
  exports:[SolicitacaoComponent]
})
export class AgendamentoModule { }
