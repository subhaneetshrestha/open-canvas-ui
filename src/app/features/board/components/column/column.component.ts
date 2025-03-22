import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Badge } from 'primeng/badge';
import { Button } from 'primeng/button';

@Component({
  selector: 'clp-column',
  imports: [Badge, Button],
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  onDragEnd(event: any) {
    console.log('Drag ended', event);
  }
}
