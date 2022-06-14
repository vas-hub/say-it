import { IMapperFn } from '../../concepts/mapper';

export const identity =
  <T>(): IMapperFn<T, T> =>
  (v: T) =>
    v;
