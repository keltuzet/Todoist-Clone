import { HttpClient } from '@angular/common/http';
import { InjectionToken, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { MethodGetHttpOptions } from './request.model';
import { SpinnerService } from '@shared/services';

export const API_URL = new InjectionToken<string>('API_URL');

export class BaseHttp {
  private http: HttpClient;
  private url: string;
  private spinnerService: SpinnerService;
  protected get apiUrl(): string {
    if (!this.url) {
      throw Error('Set "URL" for API requests in your config!');
    }
    return this.url;
  }
  protected set apiUrl(url: string) {
    this.url = url;
  }

  constructor(private injector: Injector) {
    this.url = this.injector.get(API_URL);
    this.http = this.injector.get(HttpClient);
    this.spinnerService = this.injector.get(SpinnerService);
  }

  protected get<T>(urlPathname: string, httpOptions: MethodGetHttpOptions = {}): Observable<T> {
    const { id } = httpOptions;
    const requestUrl = `${this.apiUrl}/${urlPathname}${id ? `/${id}` : ''}`;

    return this.spinnerService.wrapWithSpinner(this.http.get<T>(requestUrl, httpOptions), httpOptions.spinnerName);
  }
}
