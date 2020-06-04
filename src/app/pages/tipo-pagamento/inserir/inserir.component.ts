import { TipoPagamento } from './../dto/tipo-pagamento.dto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoPagamentoService } from '../tipo-pagamento.service';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss'],
  providers: [TipoPagamentoService]
})
export class InserirComponent implements OnInit {

  public tipoPagamento = new TipoPagamento()
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoPagamentoService: TipoPagamentoService) { }

  ngOnInit(): void {

  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.tipoPagamento.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.tipoPagamentoService.inserir(this.tipoPagamento).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
