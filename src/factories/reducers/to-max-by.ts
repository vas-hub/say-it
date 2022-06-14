import { IReducerFn } from '../../concepts/reducer';

export const toMaxBy =
  <T, K extends keyof T>(key: K): IReducerFn<T, T> =>
  (max: T, v: T) =>
    max[key] < v[key] ? v : max;
