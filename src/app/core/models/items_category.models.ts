export interface ItemsCategory {
    id: string;
    name_en: string;
    name_ar: string;
    abbreviation: string;
    images: any[];
    status: string;

}
export interface SearchResult {
    tables: ItemsCategory[];
    total: number;
}
