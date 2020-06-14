import { OperadoraService } from './../operadora.service';
import { Operadora } from './../dto/operadora.dto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
  providers: [OperadoraService]
})
export class ExcluirComponent implements OnInit {

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

  public excluir(): void {
    this.operadoraService.excluir(this.operadora).then(retorno => {
      this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path}`]);
    }).catch(reason => {
      console.log(reason);
    })
  }

}
