import { AdministradoraService } from './../administradora.service';
import { Utils } from './../../../shared/utils';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Administradora } from '../dto/administradora.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {
  public administradora = new Administradora()
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private administradoraService: AdministradoraService) { }

  ngOnInit(): void {
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`])
  }

  public salvar(): void {
    this.administradora.cta_id = Utils.recuperarDadosUsuarioLogado().cta_id;
    this.administradoraService.inserir(this.administradora).then(retorno => {
      console.log(retorno);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
