import { IMapperFn } from '../../concepts/mapper';

export const toFixed =
  (precision: number): IMapperFn<number, string> =>
  (v: number) =>
    v.toFixed(precision);
