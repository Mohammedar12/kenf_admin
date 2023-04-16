export interface Sizes {
    id: string;
    name_en: string;
    name_ar: string;
    unit: string;
    status: string;
}
export interface SearchResult {
    tables: Sizes[];
    total: number;
}
