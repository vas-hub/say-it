import { IReducerFn } from '../../concepts/reducer';

export const toClusters =
  <T>(): IReducerFn<T[], T> =>
  (collection: T[], v: T) => {
    if (collection[collection.length - 1] === v) return collection;
    return [...collection, v];
  };
