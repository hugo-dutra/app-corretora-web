import { ModalidadePlanoService } from './../modalidade-plano.service';
import { ModalidadePlano } from './../dto/modalidade-plano.dto';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public modalidadesPlano = new Array<ModalidadePlano>();
  constructor(
    private modalidadePlanoService: ModalidadePlanoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.modalidadePlanoService.listar().then((modalidadesPlano: ModalidadePlano[]) => {
      this.modalidadesPlano = modalidadesPlano;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(modalidadePlano: ModalidadePlano): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        modalidadePlano: JSON.stringify(modalidadePlano)
      },
    };
    this.router.navigate([`${this.router.url}/alterar`], navigationExtras);
  }

  public excluir(modalidadePlano: ModalidadePlano): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        modalidadePlano: JSON.stringify(modalidadePlano)
      },
    };
    this.router.navigate([`${this.router.url}/excluir`], navigationExtras);
  }

}
