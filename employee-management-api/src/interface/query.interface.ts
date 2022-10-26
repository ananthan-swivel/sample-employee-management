export interface getQuery {
  search: string;
  page: number;
  limit: number;
  sort_by: string;
  sort_dir: 'asc' | 'desc';
}
