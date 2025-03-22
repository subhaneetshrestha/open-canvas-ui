import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DragDropModule } from 'primeng/dragdrop';
import { Card } from 'primeng/card';

@Component({
  selector: 'clp-card',
  imports: [DragDropModule, Card],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
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

  cardClick() {
    console.log('Card clicked!');
    // Add your click logic here
  }
}
