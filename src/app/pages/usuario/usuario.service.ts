import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './dto/usuario.dto';
import { environment } from '../../config/config'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }
  private rotaBase = 'usuario';

  public inserir(usuario: Usuario): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http
      .post(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, usuario, headers).toPromise();
  }

}
