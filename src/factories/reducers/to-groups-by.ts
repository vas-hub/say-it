type Group<T> = [any, T[]];

export const toGroupsBy =
  <T, K extends keyof T>(key: K) =>
  (groups: Group<T>[], item: T) => {
    const group = groups.find(group => group[0] === item[key]);
    if (group) {
      group[1].push(item);
    } else groups.push([item[key], [item]]);

    return groups;
  };
