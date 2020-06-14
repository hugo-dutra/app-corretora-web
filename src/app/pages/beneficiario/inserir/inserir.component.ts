import { BeneficiarioService } from './../beneficiario.service';
import { Beneficiario } from './../dto/beneficiario.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TelefoneBeneficiario } from '../dto/telefone-beneficiario.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  public telefonesBeneficiario = new Array<TelefoneBeneficiario>();
  public telefoneBeneficiario = new TelefoneBeneficiario();
  public clt_id: number;
  public beneficiario = new Beneficiario();

  constructor(
    private beneficiarioService: BeneficiarioService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((clt_id: any) => {
      this.clt_id = JSON.parse(clt_id['clt_id']);
      this.beneficiario.clt_id = this.clt_id;
    });
  }

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path.split('?')[0]}`], navigationExtras);
  }

  public salvar(): void {
    this.beneficiarioService.inserir(this.beneficiario).then(novoBeneficiario => {
      this.telefonesBeneficiario = this.telefonesBeneficiario.map(telefoneBeneficiario => {
        telefoneBeneficiario.bnf_id = novoBeneficiario.id;
        return telefoneBeneficiario;
      })
      this.beneficiarioService.inserirTelefones(this.telefonesBeneficiario).then(() => { }).catch(reason => {
        console.log(reason);
      });
      console.log(novoBeneficiario);
    }).catch(reason => {
      console.log(reason);
    })
  }

  public adicionarTelefone(): void {
    let novoTelefone = new TelefoneBeneficiario();
    novoTelefone.observacao = this.telefoneBeneficiario.observacao;
    novoTelefone.telefone = this.telefoneBeneficiario.telefone;
    novoTelefone.whatsapp = this.telefoneBeneficiario.whatsapp;
    this.telefonesBeneficiario.push(novoTelefone);
    console.log(this.telefonesBeneficiario);
  }

  public excluirTelefone(telefone: TelefoneBeneficiario): void {
    this.telefonesBeneficiario = this.telefonesBeneficiario.filter(telefoneFiltrado => {
      return telefoneFiltrado.telefone != telefone.telefone;
    })
  }

}
