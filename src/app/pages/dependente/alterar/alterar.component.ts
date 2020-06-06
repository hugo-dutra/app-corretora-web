import { DependenteService } from './../dependente.service';
import { Component, OnInit } from '@angular/core';
import { Dependente } from '../dto/dependente.dto';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  public dependente = new Dependente();
  public bnf_id: number;
  public clt_id: number;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dependenteService: DependenteService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((parametros: any) => {
      this.bnf_id = JSON.parse(parametros['bnf_id']);
      this.clt_id = JSON.parse(parametros['clt_id']);
      this.dependente = JSON.parse(parametros['dependente']);
      this.dependente.data_nascimento = <Date><unknown>this.dependente.data_nascimento.toString().split('T')[0];
    });
  }

  public salvar(): void {
    this.dependenteService.alterar(this.dependente).then(novoDependente => {
      this.listar();
    }).catch(reason => {
      console.log(reason);
    });
  }

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id),
      },
    };
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path.split('?')[0]}`], navigationExtras);
  }

}
