import { Component, OnInit } from '@angular/core';
import { Operadora } from '../../operadora/dto/operadora.dto';
import { ModalidadePlano } from '../dto/modalidade-plano.dto';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalidadePlanoService } from '../modalidade-plano.service';
import { OperadoraService } from '../../operadora/operadora.service';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  public operadoras = new Array<Operadora>();
  public modalidadePlano = new ModalidadePlano();
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private modalidadePlanoService: ModalidadePlanoService,
    private operadoraService: OperadoraService) { }

  ngOnInit(): void {
    this.listarOperadoras().then(() => {
      this.activeRoute.queryParams.subscribe((modalidadePlano: ModalidadePlano) => {
        this.modalidadePlano = JSON.parse(modalidadePlano['modalidadePlano']);
      });
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.modalidadePlanoService.alterar(this.modalidadePlano).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
    }).catch(reason => {
      console.log(reason);
    })
  }

  public listarOperadoras(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.operadoraService.listar().then(operadoras => {
        this.operadoras = operadoras;
        resolve()
      }).catch(reason => {
        console.log(reason);
      });
    });
  }

}
