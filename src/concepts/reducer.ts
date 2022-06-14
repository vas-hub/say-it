export interface IReducerFn<R, T> {
  (a: R, v: T, i: number, vs: T[]): R;
}
