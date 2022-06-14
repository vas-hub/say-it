import { IReducerFn } from '../../concepts/reducer';

export const toUniq =
  <T>(): IReducerFn<T[], T> =>
    (collection: T[], v: T) => {
      if (collection.includes(v)) return collection;
      return [...collection, v];
    };
