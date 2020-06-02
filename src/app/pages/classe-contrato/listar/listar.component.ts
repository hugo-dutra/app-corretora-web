import { ClasseContratoService } from './../classe-contrato.service';
import { ClasseContrato } from './../dto/classe-contrato.dto';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public classesContrato = new Array<ClasseContrato>();
  constructor(
    private classeContratoService: ClasseContratoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.classeContratoService.listar().then((classesContrato: ClasseContrato[]) => {
      this.classesContrato = classesContrato;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(classeContrato: ClasseContrato): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        classeContrato: JSON.stringify(classeContrato)
      },
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(classeContrato: ClasseContrato): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        classeContrato: JSON.stringify(classeContrato)
      },
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
