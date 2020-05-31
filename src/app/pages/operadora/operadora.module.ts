import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadoraRoutingModule } from './operadora-routing.module';
import { InserirComponent } from './inserir/inserir.component';
import { ListarComponent } from './listar/listar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';


@NgModule({
  declarations: [InserirComponent, ListarComponent, AlterarComponent, ExcluirComponent],
  imports: [
    CommonModule,
    FormsModule,
    OperadoraRoutingModule
  ]
})
export class OperadoraModule { }
