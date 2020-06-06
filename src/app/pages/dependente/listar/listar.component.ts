import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DependenteService } from '../dependente.service';
import { Dependente } from '../dto/dependente.dto';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public bnf_id: number;
  public clt_id: number
  public dependentes = new Array<Dependente>();
  constructor(
    private activeRoute: ActivatedRoute,
    private dependenteService: DependenteService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((parametros: any) => {
      this.bnf_id = JSON.parse(parametros['bnf_id']);
      this.clt_id = JSON.parse(parametros['clt_id']);
      this.listar(this.bnf_id);
    });
  }

  public listar(bnf_id: number): void {
    this.dependenteService.listar(bnf_id).then(dependentes => {
      this.dependentes = dependentes;
    }).catch((reason: any) => {
      console.log(reason);
    });
  }

  public beneficiarios(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
      },
    };
    this.router.navigate([`pages/beneficiario`], navigationExtras);
  }

  public inserir(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id)
      },
    };
    this.router.navigate([`${this.router.url.split('?')[0]}/inserir`], navigationExtras);
  }

  public alterar(dependente: Dependente): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id),
        dependente: JSON.stringify(dependente)
      },
    };
    this.router.navigate([`${this.router.url.split('?')[0]}/alterar`], navigationExtras);
  }

  public excluir(dependente: Dependente): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id),
        dependente: JSON.stringify(dependente)
      },
    };
    this.router.navigate([`${this.router.url.split('?')[0]}/excluir`], navigationExtras);
  }

}
