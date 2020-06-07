import { DependenteService } from './../dependente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Dependente } from '../dto/dependente.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  private bnf_id: number;
  private clt_id: number;
  public dependente = new Dependente();
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dependenteService: DependenteService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((parametros: any) => {
      this.bnf_id = JSON.parse(parametros['bnf_id']);
      this.clt_id = JSON.parse(parametros['clt_id']);
      this.dependente.bnf_id = this.bnf_id;
    });
  }

  public salvar(): void {
    this.dependenteService.inserir(this.dependente).then(novoDependente => {
      console.log(novoDependente);
    }).catch(reason => {
      console.log(reason);
    });
  }

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path.split('?')[0]}`], navigationExtras);
  }

}
