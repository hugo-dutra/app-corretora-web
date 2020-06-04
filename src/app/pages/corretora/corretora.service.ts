import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corretora } from './dto/corretora.dto';
import { environment } from '../../config/config'

@Injectable({
  providedIn: 'root'
})
export class CorretoraService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'corretora';

  public inserir(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, corretora, headers).toPromise();
  }

  public listarPorId(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}/${corretora.id}`).toPromise();
  }

  public alterar(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, corretora).toPromise();
  }

  public excluir(corretora: Corretora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: corretora.id } };
    return this.http.delete(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, headers).toPromise();
  }

}
