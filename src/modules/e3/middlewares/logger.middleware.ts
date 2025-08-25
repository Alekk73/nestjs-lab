import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const method = req.method;
    const url = req.baseUrl;

    console.log('URL: ' + url);
    console.log('Metodo: ' + method);

    next();
  }
}
