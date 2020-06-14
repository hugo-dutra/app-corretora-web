import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { InserirComponent } from './inserir/inserir.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';


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
export class UsuarioRoutingModule { }
