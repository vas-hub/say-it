import { IMapperFn } from '../../concepts/mapper';

export const extendingWith =
  <T, K extends string, M>(
    key: K,
    mapper: IMapperFn<T, M>
  ): IMapperFn<T, T & Record<K, M>> =>
  (v: T, i: number, vs: T[]): T & Record<K, M> => {
    const mapped = { [key]: mapper(v, i, vs) } as Record<K, M>;
    return { ...v, ...mapped };
  };
