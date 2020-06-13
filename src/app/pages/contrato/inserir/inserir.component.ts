import { ActivatedRoute, Router } from '@angular/router';
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
import { NgxSpinnerService } from 'ngx-spinner';
import { Contrato } from '../dto/contrato.dto';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/dto/usuario.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {
  public administradoras = new Array<Administradora>();
  public administradora = new Administradora();

  public classesContrato = new Array<ClasseContrato>();
  public classeContrato = new ClasseContrato();

  public operadoras = new Array<Operadora>();
  public operadora = new Operadora();

  public modalidadesPlano = new Array<ModalidadePlano>();
  public modalidadePlano = new ModalidadePlano();

  public tiposComissao = new Array<TipoComissao>();
  public tipoComissao = new TipoComissao();

  public tiposContrato = new Array<TipoContrato>();
  public tipoContrato = new TipoContrato();

  public tiposPagamento = new Array<TipoPagamento>();
  public tipoPagamento = new TipoPagamento();

  public contrato = new Contrato();
  public usuarios = new Array<Usuario>();
  public ope_id: number;

  public cliente = new Cliente()
  constructor(
    private activeRoute: ActivatedRoute,
    private administradoraService: AdministradoraService,
    private classeContratoService: ClasseContratoService,
    private operadoraService: OperadoraService,
    private modalidadePlanoService: ModalidadePlanoService,
    private tipoComissaoService: TipoComissaoService,
    private tipoContratoService: TipoContratoService,
    private tipoPagamentoService: TipoPagamentoService,
    private usuarioService: UsuarioService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((cliente: Cliente) => {
      this.cliente = JSON.parse(cliente['cliente']);
    });
    this.listarDadosAuxiliares();
  }

  public listarDadosAuxiliares(): void {
    this.spinner.show();
    this.administradoraService.listar().then((administradoras: any[]) => {
      this.administradoras = administradoras;
      this.operadoraService.listar().then((operadoras: any[]) => {
        this.operadoras = operadoras;
        this.tipoComissaoService.listar().then((tiposComissao: any[]) => {
          this.tiposComissao = tiposComissao;
          this.tipoContratoService.listar().then((tiposContrato: any[]) => {
            this.tiposContrato = tiposContrato;
            this.tipoPagamentoService.listar().then((tiposPagamento: any[]) => {
              this.tiposPagamento = tiposPagamento;
              this.usuarioService.listarPorCorretoraId().then((usuarios: any[]) => {
                this.usuarios = usuarios;
                this.spinner.hide();
              }).catch(reason => {
                console.log(reason);
                this.spinner.hide();
              });
            }).catch(reason => {
              console.log(reason);
              this.spinner.hide();
            });
          }).catch(reason => {
            console.log(reason);
            this.spinner.hide();
          });
        }).catch(reason => {
          console.log(reason);
          this.spinner.hide();
        });
      }).catch(reason => {
        console.log(reason);
        this.spinner.hide();
      });
    }).catch(reason => {
      console.log(reason);
      this.spinner.hide();
    });
  }

  public listar(): void {
    this.router.navigate(['pages/cliente']);
  }

  public listarModalidades(): void {
    this.spinner.show();
    this.modalidadePlanoService.listarPorOperadoraId(this.ope_id).then((modalidadesPlano: any[]) => {
      this.spinner.hide();
      this.modalidadesPlano = modalidadesPlano;
    }).catch(reason => {
      console.log(reason);
      this.spinner.hide();
    });
  }

  public listarClassesContrato(): void {
    this.spinner.show();
    this.classeContratoService.listarPorTipoDeContratoId(this.contrato.tco_id).then((classesContrato: any[]) => {
      this.spinner.hide();
      this.classesContrato = classesContrato;
    }).catch(reason => {
      console.log(reason);
      this.spinner.hide();
    });
  }

  public salvar(): void {
    console.log(this.contrato);
  }

}
