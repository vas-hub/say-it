import { IMapperFn } from '../../concepts/mapper';
import { ifValueOf } from '../predicates/if-value-of';
import { isEqualTo } from '../predicates/if-equal';

export const searchingIn =
  <T extends { id: string }>(
    collection: T[],
    notFound: T
  ): IMapperFn<string, T> =>
  (id: string) =>
    collection.find(ifValueOf('id', isEqualTo(id))) || notFound;
