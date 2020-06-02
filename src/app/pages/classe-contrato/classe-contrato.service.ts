import { Injectable } from '@angular/core';
import { ClasseContrato } from './dto/classe-contrato.dto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { enviroment } from '../../config/config'
import { Utils } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ClasseContratoService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'classe-contrato';

  public inserir(classeContrato: ClasseContrato): Promise<any> {
    console.log(classeContrato);
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, classeContrato, headers).toPromise();
  }

  public listar(): Promise<any> {
    const cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}/${cta_id}`, headers).toPromise();
  }

  public alterar(classeContrato: ClasseContrato): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, classeContrato, headers).toPromise();
  }

  public excluir(classeContrato: ClasseContrato): Promise<any> {
    const id = classeContrato.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${enviroment.protocol}://${enviroment.host}:${enviroment.port}/${this.rotaBase}`, headers).toPromise();
  }

}
