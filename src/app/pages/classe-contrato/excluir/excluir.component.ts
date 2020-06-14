import { Component, OnInit } from '@angular/core';
import { TipoContratoService } from '../../tipo-contrato/tipo-contrato.service';
import { ClasseContrato } from '../dto/classe-contrato.dto';
import { TipoContrato } from '../../tipo-contrato/dto/tipo-contrato.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { ClasseContratoService } from '../classe-contrato.service';
import { Utils } from '../../../shared/utils';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
  providers: [TipoContratoService]
})
export class ExcluirComponent implements OnInit {


  public classeContrato = new ClasseContrato()
  public tiposContrato = new Array<TipoContrato>();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoContratoService: TipoContratoService,
    private classeContratoService: ClasseContratoService) { }

  ngOnInit(): void {
    this.listarTiposContrato().then(() => {
      this.activeRoute.queryParams.subscribe((classeContrato: ClasseContrato) => {
        this.classeContrato = JSON.parse(classeContrato['classeContrato']);
      });
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public excluir(): void {
    this.classeContratoService.excluir(this.classeContrato).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
    }).catch(reason => {
      console.log(reason);
    });
  }

  public listarTiposContrato(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.tipoContratoService.listar().then(tiposContrato => {
        this.tiposContrato = tiposContrato;
        resolve();
      }).catch(reason => {
        console.log(reason);
      });
    });

  }



}
