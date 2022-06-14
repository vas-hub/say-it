import { IMapperFn } from '../../concepts/mapper';

export const toStruct =
  <T, O extends Record<string, any>>(mappers: {
    [P in keyof O]: IMapperFn<T, O[P]>;
  }): IMapperFn<T, O> =>
  (v: T, i: number, vs: T[]): O =>
    Object.keys(mappers).reduce(
      (r, k) => ({ ...r, [k]: mappers[k](v, i, vs) }),
      {} as O
    );

export const toObject = toStruct;
