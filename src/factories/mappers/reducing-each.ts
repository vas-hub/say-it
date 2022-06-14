import { IMapperFn } from '../../concepts/mapper';
import { IReducerFn } from '../../concepts/reducer';

export const reducingEach =
  <R, T>(reducer: IReducerFn<R, T>, initValue: R): IMapperFn<T[], R> =>
  (v: T[]): R =>
    v.reduce(reducer, initValue);
