import { Router, ActivatedRoute } from '@angular/router';
import { Operadora } from './../dto/operadora.dto';
import { Component, OnInit } from '@angular/core';
import { OperadoraService } from '../operadora.service';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss'],
  providers: [OperadoraService],
})
export class AlterarComponent implements OnInit {

  public operadora = new Operadora();
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private operadoraService: OperadoraService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((operadora: Operadora) => {
      this.operadora = JSON.parse(operadora['operadora']);
    });
  }

  public listar(): void {
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
  }

  public salvar(): void {
    this.operadoraService.alterar(this.operadora).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
