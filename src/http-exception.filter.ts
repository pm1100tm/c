import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const err = exception.getResponse() as
      | { message: any; statusCode: number }
      | { error: string; statusCode: 400; message: string[] };

    console.log(exception);

    if (typeof err !== 'string' && err.statusCode === 400) {
      const errorForm = {
        success: false,
        code: status,
        data: err.message,
      };
      return response.status(status).json(errorForm);
    }

    response.status(status).json({
      success: false,
      code: status,
      data: err,
    });
  }
}
