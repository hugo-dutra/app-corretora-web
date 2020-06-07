import { TipoPagamentoService } from './../tipo-pagamento.service';
import { TipoPagamento } from './../dto/tipo-pagamento.dto';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [TipoPagamentoService]
})
export class ListarComponent implements OnInit {

  public tiposPagamento = new Array<TipoPagamento>();
  constructor(private tipoPagamentoService: TipoPagamentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.tipoPagamentoService.listar().then((tipoPagamento: TipoPagamento[]) => {
      this.tiposPagamento = tipoPagamento;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(tipoPagamento: TipoPagamento): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoPagamento: JSON.stringify(tipoPagamento)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(tipoPagamento: TipoPagamento): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        tipoPagamento: JSON.stringify(tipoPagamento)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
