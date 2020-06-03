import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalidadePlanoRoutingModule } from './modalidade-plano-routing.module';
import { InserirComponent } from './inserir/inserir.component';
import { ListarComponent } from './listar/listar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { AlterarComponent } from './alterar/alterar.component';


@NgModule({
  declarations: [InserirComponent, ListarComponent, ExcluirComponent, AlterarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalidadePlanoRoutingModule
  ]
})
export class ModalidadePlanoModule { }
