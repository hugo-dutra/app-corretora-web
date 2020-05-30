import { Utils } from './../shared/utils';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../pages/usuario/dto/usuario.dto';

@Component({
  selector: 'ngx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginService]
})
export class LoginPageComponent implements OnInit {
  public usuario = new Usuario();
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public logar(): void {
    this.loginService.logar(this.usuario).then(dadosUsuario => {
      Utils.gravarDadosUsuarioLogado(dadosUsuario);
      this.router.navigate(['pages/dashboard'])
    }).catch(reason => {
      console.log(reason);
    });
  }

}
