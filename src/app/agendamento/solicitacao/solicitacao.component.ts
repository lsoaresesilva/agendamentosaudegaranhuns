import { Component, OnInit } from '@angular/core';
import Consulta from '../../modelos/consulta';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  consulta: Consulta;
  localeCalendario:any;
  dataSelecionada;
  horariosDisponiveis;

  constructor() {
    this.dataSelecionada = false;
    this.horariosDisponiveis = ["09:00",  "10:00", "11:00"];
    this.consulta = new Consulta();
    this.localeCalendario = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["Do","Sg","Te","Qua","Qui","Sx","Sá"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'Wk'
  };

   }

  ngOnInit(): void {
  }

  selecionarData(data){
    // TODO:  Consultar o webservice para trazer os horários disponíveis
    this.dataSelecionada = true;
  }

  selecionarHorario(horario){

  }

  agendar(): void{


  }

}
