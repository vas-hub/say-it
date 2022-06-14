import { IMapperFn, IUnaryMapperFn } from '../concepts/mapper';

export const toUnary =
  <T, M>(mapper: IMapperFn<T, M>): IUnaryMapperFn<T, M> =>
  v =>
    mapper(v, 0, [v]);
