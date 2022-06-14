import { IPredicateFn } from '../../concepts/predicate';

export const ifBoth =
  <T>(a: IPredicateFn<T>, b: IPredicateFn<T>): IPredicateFn<T> =>
  (v: T, i: number, vs: T[]): v is T =>
    a(v, i, vs) && b(v, i, vs);
