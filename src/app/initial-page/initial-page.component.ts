import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logar(): void {
    this.router.navigate(['logar']);
  }

  public criar(): void {
    this.router.navigate(['nova']);
  }



}
