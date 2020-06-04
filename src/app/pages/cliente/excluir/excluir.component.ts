import { Component, OnInit } from '@angular/core';
import { Cliente } from '../dto/cliente.dto';
import { Utils } from '../../../shared/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

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

  public excluir(): void {
    this.clienteService.excluir(this.cliente).then((retorno: any) => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
    }).catch(reason => {
      console.log(reason);
    });
  }

}
