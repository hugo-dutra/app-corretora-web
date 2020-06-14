import { Utils } from './../../shared/utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoContrato } from './dto/tipo-contrato.dto';
import { Injectable } from '@angular/core';
import { environment } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class TipoContratoService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'tipo-contrato';

  public inserir(tipoContrato: TipoContrato): Promise<any> {
    console.log(tipoContrato);
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, tipoContrato, headers).toPromise();
  }

  public listar(): Promise<any> {
    const cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}/${cta_id}`, headers).toPromise();
  }

  public alterar(tipoContrato: TipoContrato): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, tipoContrato, headers).toPromise();
  }

  public excluir(tipoContrato: TipoContrato): Promise<any> {
    const id = tipoContrato.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, headers).toPromise();
  }

}
