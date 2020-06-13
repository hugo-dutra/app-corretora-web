import { Component, OnInit } from '@angular/core';
import { Cliente } from '../dto/cliente.dto';
import { Utils } from '../../../shared/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.scss']
})
export class DetalharComponent implements OnInit {

  public cliente = new Cliente();
  public listaUF = Utils.listarUF();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((cliente: Cliente) => {
      this.cliente = JSON.parse(cliente['cliente']);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
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
