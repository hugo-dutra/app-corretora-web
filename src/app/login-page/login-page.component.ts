import { Utils } from './../shared/utils';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../pages/usuario/dto/usuario.dto';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private loginService: LoginService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.usuario.email = 'hugo.dutra@hotmail.com';
    this.usuario.senha = '123';
  }

  public logar(): void {
    this.spinner.show();
    this.loginService.logar(this.usuario).then(dadosUsuario => {
      Utils.gravarDadosUsuarioLogado(dadosUsuario);
      this.spinner.hide();
      this.router.navigate(['pages/dashboard']).then(() => { })
        .catch(() => {
          this.spinner.hide();
        });
    }).catch(reason => {
      console.log(reason);
      this.spinner.hide();
    });
  }

}
