import { TelefoneBeneficiario } from './../dto/telefone-beneficiario.dto';
import { Component, OnInit } from '@angular/core';
import { Beneficiario } from '../dto/beneficiario.dto';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BeneficiarioService } from '../beneficiario.service';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  public telefonesBeneficiario = new Array<TelefoneBeneficiario>();
  public telefoneBeneficiario = new TelefoneBeneficiario();
  public beneficiario = new Beneficiario();
  constructor(
    private beneficiarioService: BeneficiarioService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((beneficiario: Beneficiario) => {
      this.beneficiario = JSON.parse(beneficiario['beneficiario']);
      this.beneficiario.data_nascimento = <Date><unknown>this.beneficiario.data_nascimento.toString().split('T')[0];
      this.listarTelefone(this.beneficiario.id);
    });
  }

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.beneficiario.clt_id)
      },
      skipLocationChange: true,
    };
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path.split('?')[0]}`], navigationExtras);
  }

  public listarTelefone(bnf_id: number): void {
    this.beneficiarioService.listarTelefones(bnf_id).then(telefones => {
      this.telefonesBeneficiario = telefones;
    }).catch(reason => {
      console.log(reason);
    })
  }

  public salvar(): void {
    this.beneficiarioService.alterar(this.beneficiario).then(novoBeneficiario => {
      this.telefonesBeneficiario = this.telefonesBeneficiario.map(telefoneCliente => {
        telefoneCliente.bnf_id = this.beneficiario.id;
        return telefoneCliente;
      })
      this.beneficiarioService.excluirTelefone(this.beneficiario).then(() => {
        this.beneficiarioService.inserirTelefones(this.telefonesBeneficiario).then(() => {
          this.listar();
        }).catch(reason => {
          console.log(reason);
        });
      }).catch(reason => {
        console.log(reason);
      });
    }).catch(reason => {
      console.log(reason);
    });
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
