import { IMapperFn } from '../../concepts/mapper';

export const each =
  <T, M>(mapper: IMapperFn<T, M>): IMapperFn<T[], M[]> =>
  (v: T[]): M[] =>
    v.map(mapper);

export const eachTo = each;
