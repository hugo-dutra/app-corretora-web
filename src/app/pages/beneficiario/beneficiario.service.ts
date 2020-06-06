import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../config/config'
import { Utils } from '../../shared/utils';
import { Beneficiario } from './dto/beneficiario.dto';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {


  constructor(private http: HttpClient) { }
  private rotaBase = 'beneficiario';

  public inserir(beneficiario: Beneficiario): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.post(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, beneficiario, headers).toPromise();
  }

  public listar(clt_id: number): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.get(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}/${clt_id}`, headers).toPromise();
  }

  public alterar(beneficiario: Beneficiario): Promise<any> {
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), };
    return this.http.patch(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, beneficiario, headers).toPromise();
  }

  public excluir(beneficiario: Beneficiario): Promise<any> {
    const id = beneficiario.id;
    const headers = { headers: new HttpHeaders().append('Content-type', 'application/json').append('Authorization', localStorage.getItem('token')), body: { id: id } };
    return this.http.delete(`${environment.protocol}://${environment.host}:${environment.port}/${this.rotaBase}`, headers).toPromise();
  }


}
