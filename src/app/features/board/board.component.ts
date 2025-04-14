import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';

import { ColumnComponent } from '@features/board/components/column/column.component';
import { CardComponent } from '@features/board/components/card/card.component';
@Component({
  selector: 'clp-board',
  imports: [Button, AvatarGroup, Avatar, ColumnComponent, CardComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  isDragging = false;
  startX = 0;
  startY = 0;
  readonly dragThreshold = 5; // Pixels of movement to consider it a drag

  onMouseDown(event: MouseEvent) {
    this.isDragging = false;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  onMouseUp(event: MouseEvent) {
    if (!this.isDragging) {
      // If not dragging, treat it as a click
      this.cardClick();
    }
    this.isDragging = false; // Reset dragging state
  }

  onDragStart(event: any) {
    this.isDragging = true; // Set dragging state when drag starts
    console.log('Drag started', event);
  }

  onDragEnd(event: any) {
    this.isDragging = false; // Reset dragging state when drag ends
    console.log('Drag ended', event);
  }

  cardClick() {
    console.log('Card clicked!');
    // Add your click logic here
  }
}
