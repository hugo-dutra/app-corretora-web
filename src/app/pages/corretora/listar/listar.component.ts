import { Utils } from './../../../shared/utils';
import { Corretora } from './../dto/corretora.dto';
import { Component, OnInit } from '@angular/core';
import { CorretoraService } from '../corretora.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [CorretoraService]
})
export class ListarComponent implements OnInit {
  constructor(
    private corretoraService: CorretoraService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public listarPorId(): void {

  }

}
