import { IPredicateFn } from '../../concepts/predicate';

export const ifGreaterThan =
  (v: number): IPredicateFn<number> =>
  (target: number): target is number =>
    target < v;
