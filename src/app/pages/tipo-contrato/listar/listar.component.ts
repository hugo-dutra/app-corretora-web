import { TipoContrato } from './../dto/tipo-contrato.dto';
import { TipoContratoService } from './../tipo-contrato.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [TipoContratoService]
})
export class ListarComponent implements OnInit {
  public tiposContrato = new Array<TipoContrato>();
  constructor(private tipoContratoService: TipoContratoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.tipoContratoService.listar().then((tiposContrato: TipoContrato[]) => {
      this.tiposContrato = tiposContrato;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(tipoContrato: TipoContrato): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoContrato: JSON.stringify(tipoContrato)
      },
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(tipoContrato: TipoContrato): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoContrato: JSON.stringify(tipoContrato)
      },
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
