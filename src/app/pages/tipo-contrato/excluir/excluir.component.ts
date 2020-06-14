import { TipoContratoService } from './../tipo-contrato.service';
import { Component, OnInit } from '@angular/core';
import { TipoContrato } from '../dto/tipo-contrato.dto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
  providers: [TipoContratoService],
})
export class ExcluirComponent implements OnInit {

  public tipoContrato = new TipoContrato();
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private tipoContratoService: TipoContratoService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((tipoContrato: TipoContrato) => {
      this.tipoContrato = JSON.parse(tipoContrato['tipoContrato']);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
  }

  public excluir(): void {
    this.tipoContratoService.excluir(this.tipoContrato).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
