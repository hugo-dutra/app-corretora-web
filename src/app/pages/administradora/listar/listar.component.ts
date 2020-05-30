import { AdministradoraService } from './../administradora.service';
import { Component, OnInit } from '@angular/core';
import { Administradora } from '../dto/administradora.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public administradoras = new Array<Administradora>();
  constructor(
    private administradoraService: AdministradoraService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  public inserir(): void {
    this.router.navigate([`${this.router.url}/inserir`])
  }

  public listar(): void {
    this.administradoraService.listar().then((administradoras: Administradora[]) => {
      this.administradoras = administradoras;
      console.log(this.administradoras);
    }).catch(reason => {
      console.log(reason);
    });
  }

  public alterar(administradora: Administradora): void {
    console.log(administradora);
  }

  public excluir(administradora: Administradora): void {
    console.log(administradora);
  }

}
