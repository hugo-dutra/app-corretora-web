import { Utils } from './../../shared/utils';
import { TipoComissao } from './dto/tipo-comissao.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../../config/config'

@Injectable({
  providedIn: 'root'
})
export class TipoComissaoService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'tipo-comissao';

  public inserir(tipoComissao: TipoComissao): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, tipoComissao, headers).toPromise();
  }

  public listar(): Promise<any> {
    const cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}/${cta_id}`, headers).toPromise();
  }

  public alterar(tipoComissao: TipoComissao): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, tipoComissao, headers).toPromise();
  }

  public excluir(tipoComissao: TipoComissao): Promise<any> {
    const id = tipoComissao.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, headers).toPromise();
  }
}
