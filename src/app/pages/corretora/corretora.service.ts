import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corretora } from './dto/corretora.dto';
import { enviroment } from '../../config/config'

@Injectable({
  providedIn: 'root'
})
export class CorretoraService {

  constructor(private http: HttpClient) { }

  public inserir(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/corretora`, corretora, headers).toPromise();
  }

  public listarPorId(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/corretora/${corretora.id}`).toPromise();
  }

  public alterar(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/corretora`, corretora).toPromise();
  }

  public excluir(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: corretora.id } };
    return this.http.delete(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/corretora`, headers).toPromise();
  }

}
