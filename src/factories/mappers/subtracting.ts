import { IMapperFn } from '../../concepts/mapper';

export const subtracting =
  (diff: number): IMapperFn<number, number> =>
  (v: number) =>
    v - diff;
