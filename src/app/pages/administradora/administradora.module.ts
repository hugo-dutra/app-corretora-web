import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradoraRoutingModule } from './administradora-routing.module';
import { InserirComponent } from './inserir/inserir.component';
import { ListarComponent } from './listar/listar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InserirComponent, ListarComponent, AlterarComponent, ExcluirComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdministradoraRoutingModule
  ]
})
export class AdministradoraModule { }
