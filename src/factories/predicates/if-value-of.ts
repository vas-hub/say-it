import { IPredicateFn } from '../../concepts/predicate';

export const ifValueOf =
  <T, K extends keyof T>(
    key: K,
    predicate: IPredicateFn<T[K]>
  ): IPredicateFn<T> =>
  (v: T, i: number, vs: T[]): v is T =>
    predicate(
      v[key],
      i,
      vs.map(v => v[key])
    );

export const where = ifValueOf;
