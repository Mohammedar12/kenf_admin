export interface MarketCategory {
    id: string;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: MarketCategory[];
    total: number;
}
