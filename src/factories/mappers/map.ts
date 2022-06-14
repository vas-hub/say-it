import { IMapperFactoryFn, IMapperFn } from '../../concepts/mapper';
import { pipe } from './pipe';

export const map =
  <T, I, M, A>(
    a: IMapperFn<T, I>,
    factory: IMapperFactoryFn<I, M, A>,
    b: IMapperFn<T, A>
  ) =>
  (v: T, i: number, vs: T[]) =>
    pipe(a, factory(b(v, i, vs)))(v, i, vs);

export const mapping = map;

export const defer =
  <T, I, M, A>(factory: IMapperFactoryFn<I, M, A>, b: IMapperFn<T, A>) =>
  (v: T, i: number, vs: T[]) =>
    factory(b(v, i, vs));
