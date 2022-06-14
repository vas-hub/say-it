import { IPredicateFn } from '../../concepts/predicate';

export const ifNot =
  <T>(predicate: IPredicateFn<T>): IPredicateFn<T> =>
  (v: T, i: number, vs: T[]): v is T =>
    !predicate(v, i, vs);

export const isNot = ifNot;
export const ifIsNot = ifNot;
