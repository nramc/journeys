import {ErrorHandler, inject, Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {
  private readonly router = inject(Router);

  handleError(err: Error) {
    if (err && err instanceof HttpErrorResponse) {
      this.handleHttpError(err);
    }
    return throwError(() => err)
  }


  private handleHttpError(err: HttpErrorResponse) {
    switch (err.status) {
      case 401:
        this.router.navigate(['/login'], {queryParams: {'q': 'unauthenticated'}})
          .then(() => console.log('Authentication required, redirected to login page'));
        break;
      case 403:
        this.router.navigate(['/accessDenied'], {queryParams: {'q': 'unauthorized'}})
          .then(() => console.log('Authentication required, redirected to login page'));
        break;
      default:
        console.log('no http handler defined');
    }
  }
}
