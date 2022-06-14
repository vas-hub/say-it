import { IMapperFn } from '../../concepts/mapper';

export const setting =
  <T, K extends keyof T>(key: K, mapper: IMapperFn<T, T[K]>): IMapperFn<T, T> =>
  (v: T, i: number, vs: T[]): T => {
    return { ...v, [key]: mapper(v, i, vs) };
  };
