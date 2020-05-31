import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Administradora } from '../dto/administradora.dto';
import { AdministradoraService } from '../administradora.service';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
  providers: [AdministradoraService],
})
export class ExcluirComponent implements OnInit {
  public administradora = new Administradora();
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private administradoraService: AdministradoraService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((administradora: Administradora) => {
      this.administradora = JSON.parse(administradora['administradora']);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
  }

  public excluir(): void {
    this.administradoraService.excluir(this.administradora).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }


}
