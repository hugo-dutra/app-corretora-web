import { UsuarioService } from './../pages/usuario/usuario.service';
import { CorretoraService } from './../pages/corretora/corretora.service';
import { Component, OnInit } from '@angular/core';
import { Corretora } from '../pages/corretora/dto/corretora.dto';
import { Usuario } from '../pages/usuario/dto/usuario.dto';

@Component({
  selector: 'ngx-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  providers: [CorretoraService, UsuarioService],
})
export class CreatePageComponent implements OnInit {
  public corretora = new Corretora();
  public usuario = new Usuario()
  public confirmarSenhaAdministrador: string;

  constructor(private corretoraService: CorretoraService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  public criarNovaCorretora(): void {
    this.corretoraService.inserir(this.corretora).then((response: Corretora) => {
      this.usuario.cta_id = response.id;
      this.usuario.per_id = 1;
      this.usuarioService.inserir(this.usuario).then(response => {
        console.log(response);
      }).catch(reason => {
        console.log(reason);
      })
    }).catch(reason => {
      console.log(reason)
    });
  }





}
