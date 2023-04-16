export interface ItemsCategory {
    id: string;
    name_en: string;
    name_ar: string;
    abbreviation: string;
    kenf_collection: string;
    images: any[];
    status: string;

}
export interface SearchResult {
    tables: ItemsCategory[];
    total: number;
}
