import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../../shared/components/toast.service';

const ERROR_MESSAGES: Record<number, string> = {
  400: 'Requête invalide.',
  401: 'Session expirée. Veuillez vous reconnecter.',
  403: 'Accès refusé.',
  404: 'Ressource introuvable.',
  409: 'Conflit : numéro déjà existant.',
  422: 'Fonds insuffisants.',
  500: 'Erreur serveur. Réessayez plus tard.',
};

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const msg = err.error?.message ?? ERROR_MESSAGES[err.status] ?? 'Une erreur est survenue.';
      toast.error(msg);
      return throwError(() => err);
    })
  );
};
