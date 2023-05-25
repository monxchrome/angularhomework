export interface IPagination<C> {
  total_items: number;
  total_pages: number;
  prev: string;
  next: string;
  items: C[]
}
