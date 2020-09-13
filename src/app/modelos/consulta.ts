import { PrioridadeConsulta } from './enum/prioridadeConsulta';
import { StatusConsulta } from './enum/statusConsulta';
import { Especialidade } from './enum/especialidade';

export default class Consulta{
  dataSolicitacao;
  dataAgendamento;
  prioridade: PrioridadeConsulta;
  status: StatusConsulta = StatusConsulta.AGENDADO;
  especialidade:Especialidade;
}
