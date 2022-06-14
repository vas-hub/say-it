import { IMapperFn } from '../../concepts/mapper';

export const toConstant =
  <T>(ref: T): IMapperFn<any, T> =>
  () =>
    ref;

export const c = toConstant;
export const toConst = toConstant;
