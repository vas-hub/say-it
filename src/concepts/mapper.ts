export interface IMapperFactoryFn<T, M, A = any> {
  (...args: A[]): IUnaryMapperFn<T, M>;
}

export interface IMapperFn<T, M> {
  (v: T, i: number, vs: T[]): M;
}
export interface IUnaryMapperFn<T, M> {
  (v: T): M;
}

export type RecordOfMappers<T, O extends object> = {
  [P in keyof O]: IMapperFn<T, O[P]>;
};

export interface IMapperSelector<K extends string, T, M> {
  (key: K): IMapperFn<T, M>;
}
