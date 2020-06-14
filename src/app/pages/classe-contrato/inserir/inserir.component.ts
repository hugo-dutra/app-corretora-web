import { TipoContrato } from './../../tipo-contrato/dto/tipo-contrato.dto';
import { ClasseContrato } from './../dto/classe-contrato.dto';
import { ClasseContratoService } from './../classe-contrato.service';
import { TipoContratoService } from './../../tipo-contrato/tipo-contrato.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss'],
  providers: [TipoContratoService]
})
export class InserirComponent implements OnInit {

  public classeContrato = new ClasseContrato()
  public tiposContrato = new Array<TipoContrato>();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoContratoService: TipoContratoService,
    private classeContratoService: ClasseContratoService) { }

  ngOnInit(): void {
    this.listarTiposContrato();
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.classeContrato.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.classeContratoService.inserir(this.classeContrato).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    });
  }

  public listarTiposContrato(): void {
    this.tipoContratoService.listar().then(tiposContrato => {
      this.tiposContrato = tiposContrato;
    }).catch(reason => {
      console.log(reason);
    })
  }

}
