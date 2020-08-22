import PacienteInterface from './pacienteInterface';
export default class Paciente implements PacienteInterface{

  nome;
  cartaoSus;
  postoSaude;
  usuario;

  constructor(){

  }

  validar(): boolean{
    if(this.nome !== '' && this.cartaoSus !== '' && this.postoSaude !== '') {
      return true;
    }
    return false;
  }
}
