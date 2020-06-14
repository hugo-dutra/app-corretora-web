import { DependenteService } from './../dependente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Dependente } from '../dto/dependente.dto';
import { TelefoneDependente } from '../dto/telefone-dependente.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  public telefonesDependente = new Array<TelefoneDependente>();
  public telefoneDependente = new TelefoneDependente();
  private bnf_id: number;
  private clt_id: number;
  public dependente = new Dependente();

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dependenteService: DependenteService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((parametros: any) => {
      this.bnf_id = JSON.parse(parametros['bnf_id']);
      this.clt_id = JSON.parse(parametros['clt_id']);
      this.dependente.bnf_id = this.bnf_id;
    });
  }

  public salvar(): void {
    this.dependenteService.inserir(this.dependente).then(novoDependente => {
      this.telefonesDependente = this.telefonesDependente.map(telefoneDependente => {
        telefoneDependente.dpd_id = novoDependente.id;
        return telefoneDependente;
      })
      this.dependenteService.inserirTelefones(this.telefonesDependente).then(() => { }).catch(reason => {
        console.log(reason);
      });
      console.log(novoDependente);
    }).catch(reason => {
      console.log(reason);
    });
  }

  public listar(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        clt_id: JSON.stringify(this.clt_id),
        bnf_id: JSON.stringify(this.bnf_id)
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
