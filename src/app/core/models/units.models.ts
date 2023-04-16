export interface Units {
    id: string;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: Units[];
    total: number;
}
