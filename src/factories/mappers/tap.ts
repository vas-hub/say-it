import { IMapperFn } from '../../concepts/mapper';

export const tap =
  <T>(fn: (v: T, i: number, vs: T[]) => void): IMapperFn<T, T> =>
  (v: T, i: number, vs: T[]) => {
    fn(v, i, vs);
    return v;
  };
