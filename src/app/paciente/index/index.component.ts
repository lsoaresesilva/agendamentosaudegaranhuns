import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {

     this.items = [
     {
          label: 'Agendamento',
          items: [
            {label: 'Solicitar',  icon: 'pi pi-fw pi-plus', routerLink: [{outlets:{routerPaciente:['agendar']} }]},
            {label: 'Listar'}
          ]
      },
      {label: 'Sair'}
    ];

  }
}
