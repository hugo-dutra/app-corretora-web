import { CreatePageComponent } from './create-page/create-page.component';
import { ExtraOptions, RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { InitialPageComponent } from './initial-page/initial-page.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginPageComponent } from './login-page/login-page.component';


export const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent
  },
  {
    path: 'nova',
    component: CreatePageComponent
  },
  {
    path: 'inicial',
    component: InitialPageComponent
  },
  {
    path: 'logar',
    component: LoginPageComponent,
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '**', redirectTo: 'inicial' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
  }


}
