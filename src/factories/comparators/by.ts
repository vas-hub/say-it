import { IComparatorFn } from '../../concepts/comparator';

export const by = <T, K extends keyof T>(
  key: K,
  compareFn: IComparatorFn<T[K]>
): IComparatorFn<T> => {
  return (a, b) => {
    return compareFn(a[key], b[key]);
  };
};
