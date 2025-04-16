import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Card } from 'primeng/card';

@Component({
  selector: 'clp-workspace-card',
  imports: [Card],
  templateUrl: './workspace-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceCardComponent {}
