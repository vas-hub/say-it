import { IPredicateFn } from '../../concepts/predicate';

export const ifIn =
  <T>(collection: T[]): IPredicateFn<T> =>
  (target: T): target is T =>
    collection.includes(target);

export const isIn = ifIn;
