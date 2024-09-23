import { InterpolationMap } from './http-error.type';

export abstract class HttpError extends Error {
  statusCode: number;
  rawMessage: string;
  interpolationMap?: InterpolationMap;

  constructor(
    statusCode: number,
    message: string,
    interpolationMap?: InterpolationMap
  ) {
    const interpolation = interpolationMap
      ? ' -> ' + JSON.stringify(interpolationMap)
      : '';
    super(message + interpolation);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    this.interpolationMap = interpolationMap;
    this.rawMessage = message;
  }
}
