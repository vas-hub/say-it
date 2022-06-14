import { IMapperFn } from '../../concepts/mapper';

export const scalingBy =
  (ratio: number): IMapperFn<number, number> =>
  (v: number) =>
    v * ratio;

export const scaleBy = scalingBy;
