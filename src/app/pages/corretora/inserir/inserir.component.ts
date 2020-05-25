import { Component, OnInit } from '@angular/core';
import { CorretoraService } from '../corretora.service';
import { Corretora } from '../dto/corretora.dto';

@Component({
  selector: 'ngx-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss'],
  providers: [CorretoraService]
})
export class InserirComponent implements OnInit {

  public email: string;
  public nome: string;
  public telefone: string;

  constructor(private corretoraService: CorretoraService) { }

  ngOnInit(): void {
  }

  public inserir(): void {
    const corretora = new Corretora();
    corretora.email = this.email;
    corretora.nome = this.nome;
    corretora.telefone = this.telefone;
    this.corretoraService.inserir(corretora).then((value: any) => {
      console.log(value);
    });
  }

}
