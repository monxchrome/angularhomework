import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../app/services/auth.service";

export const isAuthGuard: CanActivateFn = (route, state) => {
  let res = !!inject(AuthService).getAccessToken()

  if(!res) {
    inject(Router).navigate(['auth', 'login'])
  }

  return res;
};
