import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';
import { Badge } from 'primeng/badge';
import { Card } from 'primeng/card';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: 'clp-board',
  imports: [Button, AvatarGroup, Avatar, Badge, Card, DragDropModule],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {}
