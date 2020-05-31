import { Component, OnInit } from '@angular/core';
import { TipoComissao } from '../dto/tipo-comissao.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoComissaoService } from '../tipo-comissao.service';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {
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

  public salvar(): void {
    this.tipoComissaoService.alterar(this.tipoComissao).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }


}
