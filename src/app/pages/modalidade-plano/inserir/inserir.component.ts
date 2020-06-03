import { OperadoraService } from './../../operadora/operadora.service';
import { ModalidadePlanoService } from './../modalidade-plano.service';
import { ModalidadePlano } from './../dto/modalidade-plano.dto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Utils } from '../../../shared/utils';
import { Operadora } from '../../operadora/dto/operadora.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss'],
  providers: [OperadoraService]
})
export class InserirComponent implements OnInit {
  public operadoras = new Array<Operadora>();
  public modalidadePlano = new ModalidadePlano()
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private modalidadePlanoService: ModalidadePlanoService,
    private operadoraService: OperadoraService) { }

  ngOnInit(): void {
    this.listarOperadoras();
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.modalidadePlanoService.inserir(this.modalidadePlano).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    })
  }

  public listarOperadoras(): void {
    this.operadoraService.listar().then(operadoras => {
      this.operadoras = operadoras;
    }).catch(reason => {
      console.log(reason);
    })
  }

}
