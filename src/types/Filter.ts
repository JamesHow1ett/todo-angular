export type FilterInput = 'active' | 'completed' | 'all';

export interface Filter {
  title: string
  value: FilterInput
}
