import PostoSaude from './postoSaude';
import Usuario from './usuario';

export default interface PacienteInterface{
    nome;
    cartaoSus;
    postoSaude:PostoSaude;
    usuario:Usuario;
    validar():boolean;
}
