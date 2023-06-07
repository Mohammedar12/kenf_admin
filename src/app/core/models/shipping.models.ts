export interface Shipping {
    id: string;
    company: string;
    price: number;
    time: Date;
}
export interface SearchResult {
    tables: Shipping[];
    total: number;
}
