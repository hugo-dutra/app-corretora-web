import { ExcluirComponent } from './excluir/excluir.component';
import { AlterarComponent } from './alterar/alterar.component';
import { InserirComponent } from './inserir/inserir.component';
import { ListarComponent } from './listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ListarComponent,
  },
  {
    path: 'inserir',
    component: InserirComponent
  },
  {
    path: 'alterar',
    component: AlterarComponent
  },
  {
    path: 'excluir',
    component: ExcluirComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
