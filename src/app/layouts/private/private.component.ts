import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { Breadcrumb } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'clp-private',
  imports: [RouterOutlet, Breadcrumb, RouterLink, NgClass, NavbarComponent],
  templateUrl: './private.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent {
  items: MenuItem[] = [
    { label: 'Workspace', routerLink: '/workspace' },
    { label: 'Pokemon Battle Simulator', routerLink: '/workspace/pokemon-battle-simulator' },
  ];

  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
}
