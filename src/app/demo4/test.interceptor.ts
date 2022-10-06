import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  private index = 0;
  private names = ['Alain', 'Gertrude', 'Bob', 'Alice'];
  constructor() {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (httpRequest.url === 'http://127.0.0.1:8080/names') {
      return of(
        new HttpResponse({
          body: { name: this.names[this.index++ % this.names.length] },
          status: 200,
        })
      );
    } else {
      return next.handle(httpRequest);
    }
  }
}
