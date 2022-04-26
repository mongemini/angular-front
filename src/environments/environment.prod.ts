/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  oidc: {
    stsServer: "http://localhost:10003",
    redirectUrl: "http://localhost:4200",
    clientId: "CoreId",
  },
  apis: {
    info: "http://172.0.0.0:8888/api/info/",
  },
};
