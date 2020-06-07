import { TipoComissaoService } from './../tipo-comissao.service';
import { Component, OnInit } from '@angular/core';
import { TipoComissao } from '../dto/tipo-comissao.dto';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [TipoComissaoService]
})
export class ListarComponent implements OnInit {

  public tiposComissao = new Array<TipoComissao>();
  constructor(private tipoComissaoService: TipoComissaoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.tipoComissaoService.listar().then((tiposComissao: TipoComissao[]) => {
      this.tiposComissao = tiposComissao;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(tipoComissao: TipoComissao): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoComissao: JSON.stringify(tipoComissao)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(tipoComissao: TipoComissao): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoComissao: JSON.stringify(tipoComissao)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
