import { IReducerFn } from '../../concepts/reducer';

export const toSum = (): IReducerFn<number, number> => (s: number, a: number) =>
  s + a;
