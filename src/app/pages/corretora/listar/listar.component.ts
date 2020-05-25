import { Corretora } from './../dto/corretora.dto';
import { Component, OnInit } from '@angular/core';
import { CorretoraService } from '../corretora.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [CorretoraService]
})
export class ListarComponent implements OnInit {
  constructor(private corretoraService: CorretoraService) { }

  ngOnInit(): void {

  }

  public listarPorId(): void {
    let corretora = new Corretora();
    corretora.id = 1;
    this.corretoraService.listarPorId(corretora).then((corretora) => {
      console.log(corretora);
    })
  }

}
