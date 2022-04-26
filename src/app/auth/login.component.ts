import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";

import { OidcSecurityService } from "angular-auth-oidc-client";
import { Router } from "@angular/router";

@Component({
  selector: "new-auth",
  styles: [
    "#iframe {  position:absolute;left: 0px;width: 100%; top: 0px;height: 100%; }",
  ],
  template: ` <div>Нужна авторизация</div> `,
})
export class NewLoginComponent implements OnInit {
  constructor(
    public oidcSecurityService: OidcSecurityService,
    private router: Router,
    @Inject(DOCUMENT) document
  ) {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      if (!auth) {
        const spinner = document.getElementById("nb-global-spinner");
        spinner.style.display = "none";

        this.oidcSecurityService.authorize({
          urlHandler: (authUrl: string) => {
            window.open(authUrl, "_self", "toolbar=0,location=0,menubar=0");
          },
        });
      }

      this.router.navigateByUrl("/");
    });
  }

  ngOnInit(): void {
    const spinner = document.getElementById("nb-global-spinner");
    spinner.style.display = "none";
  }

  logout() {
    this.oidcSecurityService.logoff();
  }
}
