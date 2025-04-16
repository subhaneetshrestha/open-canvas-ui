import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { Avatar } from 'primeng/avatar';
import { Menu } from 'primeng/menu';
import { IconField } from 'primeng/iconfield';
import { InputText } from 'primeng/inputtext';
import { InputIcon } from 'primeng/inputicon';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'clp-navbar',
  imports: [Avatar, IconField, InputText, InputIcon, Menu, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly #authService = inject(AuthService);
  menuItems = signal<MenuItem[]>([
    {
      label: 'View Profile',
      routerLink: 'user'
    },
    {
      label: 'Settings',
      routerLink: 'user/settings'
    },
    {
      separator: true,
    },
    {
      label: 'Sign out',
      command: (_) => this.#authService.logout(),
    }
  ]);
}
