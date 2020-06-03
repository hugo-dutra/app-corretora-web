import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoPagamentoRoutingModule } from './tipo-pagamento-routing.module';
import { InserirComponent } from './inserir/inserir.component';
import { ListarComponent } from './listar/listar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';


@NgModule({
  declarations: [InserirComponent, ListarComponent, AlterarComponent, ExcluirComponent],
  imports: [
    CommonModule,
    TipoPagamentoRoutingModule
  ]
})
export class TipoPagamentoModule { }
