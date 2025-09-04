import { Sorting } from './decorators/sortingParams/interfaces/sorting.interface';

export const getOrder = (
  sort: Sorting | undefined,
): { [key: string]: 1 | -1 } => {
  if (!sort || !sort.property) {
    return {};
  }

  const direction = sort.direction === 'asc' ? 1 : -1;
  return { [sort.property]: direction } as { [key: string]: 1 | -1 };
};
