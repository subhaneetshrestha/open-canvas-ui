import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Avatar } from 'primeng/avatar';
import { IconField } from 'primeng/iconfield';
import { InputText } from 'primeng/inputtext';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'clp-navbar',
  imports: [Avatar, IconField, InputText, InputIcon],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
