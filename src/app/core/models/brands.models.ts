export interface Brands {
    id: string;
    name_en: string;
    name_ar: string;
    images: any[];
    status: string;
}
export interface SearchResult {
    tables: Brands[];
    total: number;
}
 