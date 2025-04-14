import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Badge } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'clp-column',
  imports: [
    Badge,
    ButtonModule,
    Popover,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    CommonModule,
  ],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png',
      email: 'bernardo@email.com',
      role: 'Editor',
    },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
  ];

  onDragEnd(event: any) {
    console.log('Drag ended', event);
  }
}
