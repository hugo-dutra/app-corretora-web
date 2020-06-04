import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cliente } from '../dto/cliente.dto';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public clientes = new Array<Cliente>();
  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.clienteService.listar().then((clientes: Cliente[]) => {
      this.clientes = clientes;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(cliente: Cliente): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        cliente: JSON.stringify(cliente)
      },
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(cliente: Cliente): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        cliente: JSON.stringify(cliente)
      },
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
