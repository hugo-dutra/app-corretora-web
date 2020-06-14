import { TipoContratoService } from './../tipo-contrato.service';
import { Component, OnInit } from '@angular/core';
import { TipoContrato } from '../dto/tipo-contrato.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss'],
  providers: [TipoContratoService]
})
export class InserirComponent implements OnInit {

  public tipoContrato = new TipoContrato()
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoContratoService: TipoContratoService) { }

  ngOnInit(): void {

  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.tipoContrato.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.tipoContratoService.inserir(this.tipoContrato).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
