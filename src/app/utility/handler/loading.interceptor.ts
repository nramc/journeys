import {HttpInterceptorFn} from '@angular/common/http';
import {finalize} from "rxjs";
import {inject} from "@angular/core";
import {LoadingService} from "../../service/common/loading.service";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let loadingService = inject(LoadingService);
  loadingService.showLoading();
  return next(req).pipe(finalize(() => loadingService.hideLoading()));
};
