import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoPagamento } from './dto/tipo-pagamento.dto';
import { enviroment } from '../../config/config'
import { Utils } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TipoPagamentoService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'tipo-pagamento';

  public inserir(tipoPagamento: TipoPagamento): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, tipoPagamento, headers).toPromise();
  }

  public listar(): Promise<any> {
    const cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}/${cta_id}`, headers).toPromise();
  }

  public alterar(tipoPagamento: TipoPagamento): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, tipoPagamento, headers).toPromise();
  }

  public excluir(tipoPagamento: TipoPagamento): Promise<any> {
    const id = tipoPagamento.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, headers).toPromise();
  }

}
