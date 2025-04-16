import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Divider } from 'primeng/divider';

import { WorkspaceCardComponent } from '@features/workspace/components/workspace-card/workspace-card.component';

@Component({
  selector: 'clp-workspace',
  imports: [Divider, WorkspaceCardComponent],
  templateUrl: './workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceComponent {}
