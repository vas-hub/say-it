import { IMapperFn } from '../../concepts/mapper';
import { IReducerFn } from '../../concepts/reducer';
import { isEqualTo } from '../predicates/if-equal';
import { ifValueOf } from '../predicates/if-value-of';

export const toFrequencyDistribution =
  <T>(toKey: IMapperFn<T, string>): IReducerFn<[string, number][], T> =>
  (dis, v, i, vs) => {
    const key = toKey(v, i, vs);
    const bin = dis.find(ifValueOf(0, isEqualTo(key)));
    if (bin) {
      bin[1]++;
      return dis;
    }

    return [...dis, [key, 1]];
  };

export const toFeq = toFrequencyDistribution;
