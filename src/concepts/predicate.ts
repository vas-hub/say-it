export interface IPredicateFn<T> {
  (v: T, i: number, vs: T[]): v is T;
}
