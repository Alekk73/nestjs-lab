import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class BasicGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();

    if (!req.headers['x-auth']) return false;

    return true;
  }
}
