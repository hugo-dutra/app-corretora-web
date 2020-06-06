import { BeneficiarioService } from './../beneficiario.service';
import { Beneficiario } from './../dto/beneficiario.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Cliente } from '../../cliente/dto/cliente.dto';
import { Dependente } from '../../dependente/dto/dependente.dto';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public beneficiarios = new Array<Beneficiario>();
  public clt_id: number;
  constructor(
    private beneficiarioService: BeneficiarioService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((clt_id: any) => {
      this.clt_id = JSON.parse(clt_id['clt_id']);
      this.listar(this.clt_id);
    });
  }

  public inserir(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id)
      },
    };
    this.router.navigate([`${this.router.url.split('?')[0]}/inserir`], navigationExtras);
  }

  public listar(clt_id: number): void {
    this.beneficiarioService.listar(clt_id).then(beneficiarios => {
      this.beneficiarios = beneficiarios;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(beneficiario: Beneficiario): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        beneficiario: JSON.stringify(beneficiario)
      },
    };
    this.router.navigate([`${this.router.url.split('?')[0]}/alterar`], navigationExtras);
  }

  public excluir(beneficiario: Beneficiario): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        beneficiario: JSON.stringify(beneficiario)
      },
    };
    this.router.navigate([`${this.router.url.split('?')[0]}/excluir`], navigationExtras);
  }

  public clientes(): void {
    this.router.navigate([`pages/cliente`]);
  }

  public dependente(beneficiario: Beneficiario): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(beneficiario.id)
      },
    };
    this.router.navigate([`pages/dependente`], navigationExtras);
  }

}
