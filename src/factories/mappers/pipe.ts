import { IMapperFn } from '../../concepts/mapper';

export const pipe =
  <T, I, M>(a: IMapperFn<T, I>, b: IMapperFn<I, M>): IMapperFn<T, M> =>
  (v: T, i, vs: T[]) =>
    b(a(v, i, vs), i, []);
