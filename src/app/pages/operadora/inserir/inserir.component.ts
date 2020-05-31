import { Utils } from './../../../shared/utils';
import { Operadora } from './../dto/operadora.dto';
import { OperadoraService } from './../operadora.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss'],
  providers: [OperadoraService]
})
export class InserirComponent implements OnInit {

  public operadora = new Operadora()
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private operadoraService: OperadoraService) { }

  ngOnInit(): void {
    this.listar();
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.operadora.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.operadoraService.inserir(this.operadora).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    })
  }
}
