import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'administradora',
      loadChildren: () => import('./administradora/administradora.module')
        .then(m => m.AdministradoraModule),
    },
    {
      path: 'beneficiario',
      loadChildren: () => import('./beneficiario/beneficiario.module')
        .then(m => m.BeneficiarioModule),
    },
    {
      path: 'cliente',
      loadChildren: () => import('./cliente/cliente.module')
        .then(m => m.ClienteModule),
    },
    {
      path: 'contrato',
      loadChildren: () => import('./contrato/contrato.module')
        .then(m => m.ContratoModule),
    },
    {
      path: 'classe-contrato',
      loadChildren: () => import('./classe-contrato/classe-contrato.module')
        .then(m => m.ClasseContratoModule),
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'corretora',
      loadChildren: () => import('./corretora/corretora.module')
        .then(m => m.CorretoraModule),
    },
    {
      path: 'dependente',
      loadChildren: () => import('./dependente/dependente.module')
        .then(m => m.DependenteModule),
    },
    {
      path: 'usuario',
      loadChildren: () => import('./usuario/usuario.module')
        .then(m => m.UsuarioModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'modalidade-plano',
      loadChildren: () => import('./modalidade-plano/modalidade-plano.module')
        .then(m => m.ModalidadePlanoModule),
    },
    {
      path: 'operadora',
      loadChildren: () => import('./operadora/operadora.module')
        .then(m => m.OperadoraModule),
    },
    {
      path: 'tipo-comissao',
      loadChildren: () => import('./tipo-comissao/tipo-comissao.module')
        .then(m => m.TipoComissaoModule),
    },
    {
      path: 'tipo-contrato',
      loadChildren: () => import('./tipo-contrato/tipo-contrato.module')
        .then(m => m.TipoContratoModule),
    },
    {
      path: 'tipo-pagamento',
      loadChildren: () => import('./tipo-pagamento/tipo-pagamento.module')
        .then(m => m.TipoPagamentoModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
