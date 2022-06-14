import { IMapperSelector } from '../../concepts/mapper';
import { pipe } from '../mappers/pipe';

export const pipeSelectors =
  <K extends string, T, I, M>(
    a: IMapperSelector<K, T, I>,
    b: IMapperSelector<K, I, M>
  ): IMapperSelector<K, T, M> =>
  (key: K) =>
    pipe(a(key), b(key));
