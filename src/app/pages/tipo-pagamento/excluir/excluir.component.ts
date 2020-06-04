import { TipoPagamento } from './../dto/tipo-pagamento.dto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoPagamentoService } from '../tipo-pagamento.service';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  public tipoPagamento = new TipoPagamento();
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoPagamentoService: TipoPagamentoService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((tipoPagamento: TipoPagamento) => {
      this.tipoPagamento = JSON.parse(tipoPagamento['tipoPagamento']);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
  }

  public excluir(): void {
    this.tipoPagamentoService.excluir(this.tipoPagamento).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
