import { IMapperFn, RecordOfMappers } from '../../concepts/mapper';

export const pickMapper =
  <T, O extends object, M>(
    def: IMapperFn<T, M>,
    mappers: RecordOfMappers<T, O>
  ) =>
  <K extends keyof O>(key: K): IMapperFn<T, O[K] | M> => {
    const mapper = mappers[key];
    if (!mapper) return def;
    return mapper;
  };
