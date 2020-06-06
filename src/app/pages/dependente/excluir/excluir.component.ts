import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { Dependente } from '../dto/dependente.dto';
import { DependenteService } from '../dependente.service';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

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

  public excluir(): void {
    this.dependenteService.excluir(this.dependente).then((novoDependente: any) => {
      this.listar();
    }).catch((reason: any) => {
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
