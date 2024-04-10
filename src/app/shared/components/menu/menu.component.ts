import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      // {label: 'New', icon: 'pi pi-fw pi-plus'},
      // {label: 'Open', icon: 'pi pi-fw pi-download'},
      // {label: 'Undo', icon: 'pi pi-fw pi-pi-refresh'},
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: ' pi pi-cog',
        items: [
          {
            label:'Otro elemento',
            icon: ' pi pi-cog',
          }
        ]
      }
    ];
  }

}
