export interface Product {
  id: number,
  status: string, // {‘active’, ‘archive’}
  sum: number,
  qty: number,
  volume: number,
  name: string,
  delivery_date: string,
  currency: string,
  total_sum?: number
}
