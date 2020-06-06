import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../dto/beneficiario.dto';
import { BeneficiarioService } from '../beneficiario.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'ngx-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  public beneficiario = new Beneficiario();
  constructor(
    private beneficiarioService: BeneficiarioService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((beneficiario: Beneficiario) => {
      this.beneficiario = JSON.parse(beneficiario['beneficiario']);
      this.beneficiario.data_nascimento = <Date><unknown>this.beneficiario.data_nascimento.toString().split('T')[0];
    });
  }

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.beneficiario.clt_id)
      },
    };
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path.split('?')[0]}`], navigationExtras);
  }

  public excluir(): void {
    this.beneficiarioService.excluir(this.beneficiario).then(novoBeneficiario => {
      this.listar();
    }).catch(reason => {
      console.log(reason);
    })
  }

}
