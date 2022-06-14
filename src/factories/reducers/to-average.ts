import { IReducerFn } from '../../concepts/reducer';

export const toAverage =
  (): IReducerFn<number, number> =>
  (avg: number, v: number, i: number, vs: number[]) =>
    avg + v / vs.length;
