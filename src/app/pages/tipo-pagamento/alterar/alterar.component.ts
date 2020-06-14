import { TipoPagamento } from './../dto/tipo-pagamento.dto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoPagamentoService } from '../tipo-pagamento.service';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

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

  public salvar(): void {
    this.tipoPagamentoService.alterar(this.tipoPagamento).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
