import { Usuario } from '../pages/usuario/dto/usuario.dto';

export class Utils {
  public static gravarDadosUsuarioLogado(dados: Usuario): void {
    localStorage.setItem('usuarioLogado', JSON.stringify(dados));
  }

  public static recuperarDadosUsuarioLogado(): Usuario {
    return JSON.parse(localStorage.getItem('usuarioLogado'));
  }
}