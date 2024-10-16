import {HttpInterceptorFn} from '@angular/common/http';
import {finalize} from "rxjs";
import {inject} from "@angular/core";
import {LoadingService} from "../../service/common/loading.service";

export const X_ASYNC_PROCESS_HTTP_HEADER = 'X-Async-Process';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (!req.headers.has(X_ASYNC_PROCESS_HTTP_HEADER)) {
    loadingService.showLoading();
  }
  return next(req).pipe(finalize(() => loadingService.hideLoading()));
};
