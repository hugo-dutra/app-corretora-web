import { environment } from './../../config/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dependente } from './dto/dependente.dto';
import { TelefoneDependente } from './dto/telefone-dependente.dto';


@Injectable({
  providedIn: 'root'
})
export class DependenteService {

  constructor(private http: HttpClient) { }
  private rotaBase = 'dependente';

  public inserir(dependente: Dependente): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, dependente, headers).toPromise();
  }

  public inserirTelefones(telefones: TelefoneDependente[]): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${environment.protocol}://${environment.host}:${environment.port}/telefone-${this.rotaBase}`, telefones, headers).toPromise();
  }

  public listar(bnf_id: number): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}/${bnf_id}`, headers).toPromise();
  }

  public listarTelefones(dpd_id: number): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${environment.protocol}://${environment.host}:${environment.port}/telefone-${this.rotaBase}/${dpd_id}`, headers).toPromise();
  }

  public alterar(bependente: Dependente): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, bependente, headers).toPromise();
  }

  public excluir(bependente: Dependente): Promise<any> {
    const id = bependente.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, headers).toPromise();
  }

  public excluirTelefone(dependente: Dependente): Promise<any> {
    const id = dependente.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id } };
    return this.http.delete(`${environment.protocol}://${environment.host}:${environment.port}/telefone-${this.rotaBase}`, headers).toPromise();
  }
}
