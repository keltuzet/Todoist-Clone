import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpParamsObjectModel {
  [param: string]: string | string[];
}

export interface HttpHeadersObjectModel {
  [param: string]: string | string[];
}

export type CommonHttpParams = HttpParams | HttpParamsObjectModel;
export type CommonHttpHeaders = HttpHeaders | HttpHeadersObjectModel;

export interface MethodGetBaseHttpOptions {
  headers?: CommonHttpHeaders;
  params?: CommonHttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
  responseType?: 'json';
  observe?: 'body';
}

export interface MethodGetHttpOptions extends MethodGetBaseHttpOptions {
  id?: string | number;
  spinnerName?: string;
}
