import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router, ) {

  }

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    return next.handle(req).pipe(
      // On catch l'erreur
      catchError((errorResponse: HttpErrorResponse) => {
        // si le statut est 404
        if (errorResponse.status === 404) {
          // on redirige sur la page login
          this.router.navigateByUrl('/page404');
        } else {
          // autrement on notifie l'utilisateur
          console.log(errorResponse);
        }

        return throwError(errorResponse);
      })
    );
  }
}
