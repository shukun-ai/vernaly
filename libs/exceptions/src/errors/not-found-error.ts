import { HttpError } from '../http-error';
import { InterpolationMap } from '../http-error.type';

export class NotFoundError extends HttpError {
  constructor(message: string, interpolationMap?: InterpolationMap) {
    super(404, message, interpolationMap);
  }
}
