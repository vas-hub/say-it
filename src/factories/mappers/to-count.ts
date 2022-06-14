import { IMapperFn } from '../../concepts/mapper';

export const toCount =
  <T>(): IMapperFn<T[], number> =>
  (collection: T[]) =>
    collection.length;
