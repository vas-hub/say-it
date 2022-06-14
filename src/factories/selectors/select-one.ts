import { IMapperFn, IMapperSelector } from '../../concepts/mapper';

type Case<T, M> = [string, IMapperFn<T, M>];

export const selectOne =
  <T, M>(
    def: IMapperFn<T, M>,
    ...cases: Case<T, M>[]
  ): IMapperSelector<string, T, M> =>
  (key: string): IMapperFn<T, M> => {
    const c = cases.find(c => c[0] === key);
    if (!c) return def;
    return c[1];
  };
