export interface OrderStatus {
    id: string;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: OrderStatus[];
    total: number;
}
