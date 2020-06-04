import { Utils } from './../../shared/utils';
import { Operadora } from './dto/operadora.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../config/config'; 3
@Injectable({
  providedIn: 'root'
})
export class OperadoraService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'operadora';

  public inserir(operadora: Operadora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, operadora, headers).toPromise();
  }

  public listar(): Promise<any> {
    const cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}/${cta_id}`, headers).toPromise();
  }

  public alterar(operadora: Operadora): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, operadora, headers).toPromise();
  }

  public excluir(operadora: Operadora): Promise<any> {
    const id = operadora.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, headers).toPromise();
  }
}
