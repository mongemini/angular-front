import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";

const apis = environment.apis;

@Injectable({
  providedIn: "root",
})
export class ApiHttpService {
  protected http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  get(apiName: string, path: string): Observable<any> {
    return this.http.get<any>(`${apis[apiName]}${path}`);
  }

  post(apiName: string, path: string, body: object): Observable<any> {
    return this.http.post<any>(`${apis[apiName]}${path}`, body);
  }

  delete(apiName: string, path: string, body: object): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      body: body,
    };
    return this.http.delete<any>(`${apis[apiName]}${path}`, options);
  }
}
