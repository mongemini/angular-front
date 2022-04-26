import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private oidcSecurityService: OidcSecurityService;

  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestToForward = req;
    this.oidcSecurityService = this.injector.get(OidcSecurityService);
    const token = this.oidcSecurityService.getToken();
    if (token !== "") {
      const tokenValue = "Bearer " + token;
      requestToForward = req.clone({
        setHeaders: { Authorization: tokenValue },
      });
    }

    return next.handle(requestToForward);
  }
}
