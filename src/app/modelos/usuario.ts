import { PerfilUsuario } from './perfilUsuario';

export default class Usuario{


  constructor(public login, public senha, public perfilUsuario: PerfilUsuario){

  }
}
