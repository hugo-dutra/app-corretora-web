import { DependenteService } from './../dependente.service';
import { Component, OnInit } from '@angular/core';
import { Dependente } from '../dto/dependente.dto';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { TelefoneDependente } from '../dto/telefone-dependente.dto';

@Component({
  selector: 'ngx-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {

  public telefonesDependente = new Array<TelefoneDependente>();
  public telefoneDependente = new TelefoneDependente();
  public dependente = new Dependente();
  public bnf_id: number;
  public clt_id: number;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dependenteService: DependenteService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((parametros: any) => {
      this.bnf_id = JSON.parse(parametros['bnf_id']);
      this.clt_id = JSON.parse(parametros['clt_id']);
      this.dependente = JSON.parse(parametros['dependente']);
      this.listarTelefone(this.dependente.id);
      this.dependente.data_nascimento = <Date><unknown>this.dependente.data_nascimento.toString().split('T')[0];
    });
  }

  public listarTelefone(dpd_id: number): void {
    this.dependenteService.listarTelefones(dpd_id).then(telefones => {
      this.telefonesDependente = telefones;
    }).catch(reason => {
      console.log(reason);
    });
  }

  public salvar(): void {
    this.dependenteService.alterar(this.dependente).then(novoDependente => {
      this.telefonesDependente = this.telefonesDependente.map(telefoneDependente => {
        telefoneDependente.dpd_id = this.dependente.id;
        return telefoneDependente;
      })
      this.dependenteService.excluirTelefone(this.dependente).then(() => {
        this.dependenteService.inserirTelefones(this.telefonesDependente).then(() => {
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

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id),
      },
      skipLocationChange: true,
    };
    this.router.navigate([`pages/${this.activeRoute.parent.routeConfig.path.split('?')[0]}`], navigationExtras);
  }

  public adicionarTelefone(): void {
    let novoTelefone = new TelefoneDependente();
    novoTelefone.observacao = this.telefoneDependente.observacao;
    novoTelefone.telefone = this.telefoneDependente.telefone;
    novoTelefone.whatsapp = this.telefoneDependente.whatsapp;
    this.telefonesDependente.push(novoTelefone);
    console.log(this.telefonesDependente);
  }

  public excluirTelefone(telefone: TelefoneDependente): void {
    this.telefonesDependente = this.telefonesDependente.filter(telefoneFiltrado => {
      return telefoneFiltrado.telefone != telefone.telefone;
    })
  }

}
