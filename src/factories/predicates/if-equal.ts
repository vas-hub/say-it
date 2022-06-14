import { IPredicateFn } from '../../concepts/predicate';

export const ifEqual =
  <T>(ref: T): IPredicateFn<T> =>
  (v: T): v is T =>
    v === ref;

export const isEqualTo = ifEqual;
export const is = ifEqual;
