import { IMapperFn } from '../../concepts/mapper';

export const to =
  <T, K extends keyof T>(key: K): IMapperFn<T, T[K]> =>
  (v: T) =>
    v[key];
