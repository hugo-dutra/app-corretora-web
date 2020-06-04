import { Component, OnInit } from '@angular/core';
import { Cliente } from '../dto/cliente.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Utils } from '../../../shared/utils';
import { rejects } from 'assert';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  public cliente = new Cliente()
  public listaUF = Utils.listarUF();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.cliente.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.cliente.usr_id = Utils.recuperarDadosUsuarioLogado().id;
    this.clienteService.inserir(this.cliente).then((retorno: any) => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    });
  }

  public consultarCep(event: Event): void {
    const cep = (<HTMLInputElement>event.target).value;
    this.clienteService.consultarCEP(cep).then(retorno => {
      this.cliente.endereco = `${retorno['bairro']} ${retorno['logradouro']} ${retorno['complemento']} `;
      this.cliente.uf = this.listaUF.filter(uf => {
        return uf.sigla == retorno['uf'];
      })[0].sigla;
      this.cliente.cidade = retorno['localidade'];
    }).catch(reason => {
      console.log(reason);
    });
  }
}
