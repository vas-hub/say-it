import { IComparatorFn } from '../../concepts/comparator';

export const by =
  <T, K extends keyof T>(
    key: K,
    compareFn: IComparatorFn<T[K]>
  ): IComparatorFn<T> =>
  (a, b) =>
    compareFn(a[key], b[key]);
