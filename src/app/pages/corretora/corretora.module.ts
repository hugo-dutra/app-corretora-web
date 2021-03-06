import { CorretoraService } from './corretora.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorretoraRoutingModule } from './corretora-routing.module';
import { ListarComponent } from './listar/listar.component';
import { InserirComponent } from './inserir/inserir.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { AlterarComponent } from './alterar/alterar.component';


@NgModule({
  declarations: [ListarComponent, InserirComponent, ExcluirComponent, AlterarComponent],
  imports: [
    CommonModule,
    CorretoraRoutingModule,
    FormsModule,
  ],
})
export class CorretoraModule { }
