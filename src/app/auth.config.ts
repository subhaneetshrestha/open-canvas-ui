import { provideAuth0 } from '@auth0/auth0-angular';

import { environment } from '@environment/environment';

export const provideAuth0Config = () =>
  provideAuth0({
    clientId: environment.auth.clientId,
    domain: environment.auth.domain,
    authorizationParams: {
      redirect_uri: typeof window !== 'undefined' ? window.location.origin + '/authorize' : '',
    },
    useRefreshTokens: true,
  });
