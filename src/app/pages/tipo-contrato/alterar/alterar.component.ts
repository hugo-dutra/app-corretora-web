import { TipoContratoService } from './../tipo-contrato.service';
import { TipoContrato } from './../dto/tipo-contrato.dto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss'],
  providers: [TipoContratoService],
})
export class AlterarComponent implements OnInit {

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

  public salvar(): void {
    this.tipoContratoService.alterar(this.tipoContrato).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
