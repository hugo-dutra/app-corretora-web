import { OperadoraService } from './../operadora.service';
import { Operadora } from './../dto/operadora.dto';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public operadoras = new Array<Operadora>();
  constructor(
    private operadoraService: OperadoraService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.operadoraService.listar().then((operadoras: Operadora[]) => {
      this.operadoras = operadoras;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(operadora: Operadora): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        operadora: JSON.stringify(operadora)
      },
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(operadora: Operadora): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        operadora: JSON.stringify(operadora)
      },
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
