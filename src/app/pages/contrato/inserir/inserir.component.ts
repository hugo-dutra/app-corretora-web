import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente/dto/cliente.dto';
import { Administradora } from '../../administradora/dto/administradora.dto';
import { ClasseContrato } from '../../classe-contrato/dto/classe-contrato.dto';
import { Operadora } from '../../operadora/dto/operadora.dto';
import { ModalidadePlano } from '../../modalidade-plano/dto/modalidade-plano.dto';
import { TipoComissao } from '../../tipo-comissao/dto/tipo-comissao.dto';
import { TipoContrato } from '../../tipo-contrato/dto/tipo-contrato.dto';
import { TipoPagamento } from '../../tipo-pagamento/dto/tipo-pagamento.dto';
import { AdministradoraService } from '../../administradora/administradora.service';
import { ClasseContratoService } from '../../classe-contrato/classe-contrato.service';
import { OperadoraService } from '../../operadora/operadora.service';
import { ModalidadePlanoService } from '../../modalidade-plano/modalidade-plano.service';
import { TipoComissaoService } from '../../tipo-comissao/tipo-comissao.service';
import { TipoContratoService } from '../../tipo-contrato/tipo-contrato.service';
import { TipoPagamentoService } from '../../tipo-pagamento/tipo-pagamento.service';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {
  public administradoras = new Array<Administradora>();
  public classesContrato = new Array<ClasseContrato>();
  public operadoras = new Array<Operadora>();
  public modalidadesPlano = new Array<ModalidadePlano>();
  public tiposComissao = new Array<TipoComissao>();
  public tiposContrato = new Array<TipoContrato>();
  public tiposPagamento = new Array<TipoPagamento>();



  public cliente = new Cliente()
  constructor(
    private activeRoute: ActivatedRoute,
    private administradoraService: AdministradoraService,
    private classeContratoService: ClasseContratoService,
    private operadoraService: OperadoraService,
    private modalidadePlanoService: ModalidadePlanoService,
    private tipoComissaoService: TipoComissaoService,
    private TipoContratoService: TipoContratoService,
    private TipoPagamentoService: TipoPagamentoService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((cliente: Cliente) => {
      this.cliente = JSON.parse(cliente['cliente']);
    });
    this.listarDadosAuxiliares();
  }

  public listarDadosAuxiliares(): void {
    this.administradoraService.listar().then((administradoras: any[]) => {
      this.administradoras = administradoras;
      console.log(this.administradoras);
      this.classeContratoService.listar().then((classesContrato: any[]) => {
        this.classesContrato = classesContrato;
        console.log(this.classesContrato);
        this.operadoraService.listar().then((operadoras: any[]) => {
          this.operadoras = operadoras;
          console.log(this.operadoras);
          this.tipoComissaoService.listar().then((tiposComissao: any[]) => {
            this.tiposComissao = tiposComissao;
            console.log(this.tiposComissao);
            this.TipoContratoService.listar().then((tiposContrato: any[]) => {
              this.tiposContrato = tiposContrato;
              console.log(this.tiposContrato);
              this.TipoPagamentoService.listar().then((tiposPagamento: any[]) => {
                this.tiposPagamento = tiposPagamento;
                console.log(this.tiposPagamento);
              }).catch(reason => {
                console.log(reason);
              });
            }).catch(reason => {
              console.log(reason);
            });
          }).catch(reason => {
            console.log(reason);
          });
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

}
