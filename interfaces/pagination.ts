export interface PaginationInterface {
  itemsCount: number;
  pageSize: number;
  currentPage?: number;
  onPageChange?: any;
  onNext?: any;
  onPrevious?: any;
}
