import { identity } from './identity';
import { tap } from './tap';

export const log = <T>(isOn = true, prefix?: string) =>
  isOn ? tap((v: T, i) => console.log(prefix || '', i, v)) : identity<T>();
