import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class BasicInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const start = performance.now();

    // Llama al handle (controlador) para ejecutar la siguente operación (tap) en este caso
    return next.handle().pipe(
      // Modifica la respuesta una vez que el controlador termina
      tap(() => {
        const end = performance.now();
        const duration = end - start;

        console.log({
          message: 'Request timing',
          method: request.method,
          url: request.originalUrl,
          duration: `${duration.toFixed(2)} ms`,
          timestamp: new Date().toISOString(),
        });
      }),
    );
  }
}
