import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { LoadingComponent } from '@features/loading/loading.component';

@Component({
  imports: [LoadingComponent],
  templateUrl: './callback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallbackComponent implements OnInit {
  readonly #authService = inject(AuthService);

  ngOnInit(): void {
    this.#authService.handleRedirectCallback();
  }
}
