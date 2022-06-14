export const toSlice =
  <T extends Record<string, any>, K extends keyof T, ID extends keyof T>(
    id: ID,
    key: K
  ) =>
  (slice: Record<T[ID], T[K]>, v: T) => ({ ...slice, [v[id]]: v[key] });
