import { TipoComissaoService } from './../tipo-comissao.service';
import { Component, OnInit } from '@angular/core';
import { TipoComissao } from '../dto/tipo-comissao.dto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {


  public tipoComissao = new TipoComissao();
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoComissaoService: TipoComissaoService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((tipoComissao: TipoComissao) => {
      this.tipoComissao = JSON.parse(tipoComissao['tipoComissao']);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
  }

  public excluir(): void {
    this.tipoComissaoService.excluir(this.tipoComissao).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }
}
