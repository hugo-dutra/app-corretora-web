import { Component, OnInit } from '@angular/core';
import { TipoComissao } from '../dto/tipo-comissao.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoComissaoService } from '../tipo-comissao.service';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  public tipoComissao = new TipoComissao()
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoContratoService: TipoComissaoService) { }

  ngOnInit(): void {
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.tipoComissao.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.tipoContratoService.inserir(this.tipoComissao).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
