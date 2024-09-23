import { HttpError } from '../http-error';
import { InterpolationMap } from '../http-error.type';

export class BadRequestError extends HttpError {
  constructor(message: string, interpolationMap?: InterpolationMap) {
    super(400, message, interpolationMap);
  }
}
