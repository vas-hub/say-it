import { IPredicateFn } from '../../concepts/predicate';

export const ifIndexIsBetween =
  <T>(range: [number, number]): IPredicateFn<T> =>
  (v: T, i: number): v is T =>
    range[0] <= i && range[1] >= i;
