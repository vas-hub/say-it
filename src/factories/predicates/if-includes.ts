import { IPredicateFn } from '../../concepts/predicate';

export const ifIncludes =
  <T>(v: T): IPredicateFn<T[]> =>
  (target: T[]): target is T[] =>
    target.includes(v);

export const includes = ifIncludes;
