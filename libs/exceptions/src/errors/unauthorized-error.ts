import { HttpError } from '../http-error';
import { InterpolationMap } from '../http-error.type';

export class UnauthorizedError extends HttpError {
  constructor(message: string, interpolationMap?: InterpolationMap) {
    super(401, message, interpolationMap);
  }
}
