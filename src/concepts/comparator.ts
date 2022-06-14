export interface IComparatorFn<T> {
  (a: T, b: T): number;
}
