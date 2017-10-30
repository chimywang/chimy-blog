
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../service/AuthService";

export class AuthIntercepter implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // get the auth header from the service
    const authHeader = this.auth.getAuthorizationHeader();
    // clone this request to add the header.
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    // const authReq = req.clone({setHeaders: {Authorization: authHeader}});
    return next.handle(authReq);
  }
}
