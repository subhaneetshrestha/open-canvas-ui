import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { PublicNavbarComponent } from '@shared/components/public-navbar/public-navbar.component';

@Component({
  imports: [PublicNavbarComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly #_platformId = inject(PLATFORM_ID);
  #_authService = isPlatformBrowser(this.#_platformId)
    ? inject(AuthService, { optional: true })
    : null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.#_platformId)) this.#_authService?.loginWithRedirect();
  }
}
