import { Component, OnInit } from '@angular/core';
import { Cliente } from '../dto/cliente.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Utils } from '../../../shared/utils';
import { TelefoneCliente } from '../dto/telefone-cliente.dto';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  public telefonesCliente = new Array<TelefoneCliente>();
  public telefoneCliente = new TelefoneCliente();
  public cliente = new Cliente();
  public listaUF = Utils.listarUF();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((cliente: Cliente) => {
      this.cliente = JSON.parse(cliente['cliente']);
      this.listarTelefone(this.cliente.id);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public listarTelefone(clt_id: number): void {
    this.clienteService.listarTelefones(clt_id).then(telefones => {
      this.telefonesCliente = telefones;
    }).catch(reason => {
      console.log(reason);
    })
  }

  public salvar(): void {
    this.cliente.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.cliente.usr_id = Utils.recuperarDadosUsuarioLogado().id;
    this.clienteService.alterar(this.cliente).then((retorno: any) => {
      this.telefonesCliente = this.telefonesCliente.map(telefoneCliente => {
        telefoneCliente.clt_id = this.cliente.id;
        return telefoneCliente;
      })
      this.clienteService.excluirTelefone(this.cliente).then(() => {
        this.clienteService.inserirTelefones(this.telefonesCliente).then(() => {
          this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
        }).catch(reason => {
          console.log(reason);
        });
      }).catch(reason => {
        console.log(reason);
      });
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

  public adicionarTelefone(): void {
    let novoTelefone = new TelefoneCliente();
    novoTelefone.observacao = this.telefoneCliente.observacao;
    novoTelefone.telefone = this.telefoneCliente.telefone;
    novoTelefone.whatsapp = this.telefoneCliente.whatsapp;
    this.telefonesCliente.push(novoTelefone);
    console.log(this.telefonesCliente);
  }

  public excluirTelefone(telefone: TelefoneCliente): void {
    this.telefonesCliente = this.telefonesCliente.filter(telefoneFiltrado => {
      return telefoneFiltrado.telefone != telefone.telefone;
    })
  }

}
