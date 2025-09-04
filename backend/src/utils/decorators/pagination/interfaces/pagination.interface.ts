export interface IPagination {
  page?: number;
  size?: number;
  offset: number;
}

export type PaginatedResource<T> = {
  totalItems: number;
  items: T[];
  page: number;
  size: number;
};
