import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalidadePlano } from './dto/modalidade-plano.dto';
import { Utils } from '../../shared/utils';
import { enviroment } from '../../config/config'

@Injectable({
  providedIn: 'root'
})
export class ModalidadePlanoService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'modalidade-plano';

  public inserir(modalidadePlano: ModalidadePlano): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, modalidadePlano, headers).toPromise();
  }

  public listarPorOperadoraId(ope_id: number): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}/operadora/${ope_id}`, headers).toPromise();
  }

  public listar(): Promise<any> {
    const cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;

    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}/${cta_id}`, headers).toPromise();
  }

  public alterar(modalidadePlano: ModalidadePlano): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, modalidadePlano, headers).toPromise();
  }

  public excluir(modalidadePlano: ModalidadePlano): Promise<any> {
    const id = modalidadePlano.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, headers).toPromise();
  }
}
