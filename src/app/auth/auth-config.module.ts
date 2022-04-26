import { APP_INITIALIZER, NgModule } from "@angular/core";
import { AuthModule, OidcConfigService } from "angular-auth-oidc-client";

import { environment } from "../../environments/environment";

const oidc = environment.oidc;

export function configureAuth(
  oidcConfigService: OidcConfigService
): () => Promise<any> {
  return () =>
    oidcConfigService.withConfig({
      stsServer: oidc.stsServer,
      redirectUrl: oidc.redirectUrl,
      postLogoutRedirectUri: oidc.redirectUrl,
      clientId: oidc.clientId,
      scope: "openid profile roles", // 'openid profile ' + your scopes
      responseType: "code",
      silentRenew: true,
      silentRenewUrl: window.location.origin + "/silent-renew.html",
      renewTimeBeforeTokenExpiresInSeconds: 10,
    });
}

@NgModule({
  imports: [AuthModule.forRoot()],
  exports: [AuthModule],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
})
export class AuthConfigModule {}
