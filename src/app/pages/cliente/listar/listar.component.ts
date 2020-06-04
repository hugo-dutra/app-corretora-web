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
  public textoFiltro: string = "";
  public clientes = new Array<Cliente>();
  public timeOutFilter: any;

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

  public limparTimeOut(): void {
    clearTimeout(this.timeOutFilter);
  }

  public filtrar(event: Event): void {
    this.textoFiltro = (<HTMLInputElement>event.target).value;
    if (this.textoFiltro != "") {
      const keyCode = (<KeyboardEvent>event).keyCode;
      if (keyCode == 13) {
        this.clienteService.filtrar(this.textoFiltro).then((clientes: Cliente[]) => {
          this.clientes = clientes;
        }).catch(reason => {
          console.log(reason);
        });
      }
    } else {
      this.listar();
    }
  }

  public filtrarBotao(): void {
    if (this.textoFiltro != "") {
      this.clienteService.filtrar(this.textoFiltro).then((clientes: Cliente[]) => {
        this.clientes = clientes;
      }).catch(reason => {
        console.log(reason);
      });
    } else {
      this.listar();
    }
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

  public detalhar(cliente: Cliente): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        cliente: JSON.stringify(cliente)
      },
    };
    this.router.navigate([`${this.router.url}/detalhar`], navigationExtras);
  }

}
